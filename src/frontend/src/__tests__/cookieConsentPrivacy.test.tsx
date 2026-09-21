import App from "@/App";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

// Cover for the cookie-consent / privacy change:
//
//   * a cookie banner appears at the bottom of every page on a first visit,
//     with ACCEPT and LEARN MORE controls;
//   * ACCEPT hides the banner and persists consent so it does not reappear on
//     the same browser;
//   * the footer Company column gains Privacy Policy and Terms of Use links;
//   * /privacy renders a headline, a paragraph, and two external buttons.
//
// The banner reads `window.localStorage` under the key `saaas.cookie-consent`.
// jsdom keeps that store for the whole file, so each test starts from a clean
// slate and the "first visit" case is explicit rather than order-dependent.

const CONSENT_STORAGE_KEY = "saaas.cookie-consent";

beforeEach(() => {
  window.localStorage.clear();
});

afterEach(() => {
  window.localStorage.clear();
});

// The router is a module singleton, so its location persists across tests in
// this file. Await the first render before querying.
async function renderApp() {
  render(<App />);
  await screen.findByRole("heading", { level: 1 });
}

function cookieBanner() {
  return screen.getByRole("region", { name: /cookie consent/i });
}

describe("Cookie consent banner", () => {
  it("shows the banner on a first visit with ACCEPT and LEARN MORE controls", async () => {
    await renderApp();

    const banner = cookieBanner();
    expect(
      within(banner).getByRole("button", { name: /accept/i }),
    ).toBeInTheDocument();
    expect(
      within(banner).getByRole("link", { name: /learn more/i }),
    ).toBeInTheDocument();
  });

  it("shows the banner on a non-home route too", async () => {
    const user = userEvent.setup();
    await renderApp();

    await user.click(screen.getAllByRole("link", { name: "PLATFORM" })[0]);
    expect(
      screen.getByRole("heading", { name: /^platform$/i, level: 1 }),
    ).toBeInTheDocument();

    expect(cookieBanner()).toBeInTheDocument();
  });

  it("hides the banner after ACCEPT and persists consent", async () => {
    const user = userEvent.setup();
    await renderApp();

    await user.click(
      within(cookieBanner()).getByRole("button", { name: /accept/i }),
    );

    expect(
      screen.queryByRole("region", { name: /cookie consent/i }),
    ).not.toBeInTheDocument();
    expect(window.localStorage.getItem(CONSENT_STORAGE_KEY)).toBe("accepted");
  });

  it("does not show the banner when consent was already stored", async () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, "accepted");

    await renderApp();

    expect(
      screen.queryByRole("region", { name: /cookie consent/i }),
    ).not.toBeInTheDocument();
  });

  it("keeps the banner hidden after a fresh mount once consent is stored", async () => {
    const user = userEvent.setup();
    const first = render(<App />);
    await screen.findByRole("heading", { level: 1 });

    await user.click(
      within(cookieBanner()).getByRole("button", { name: /accept/i }),
    );
    expect(
      screen.queryByRole("region", { name: /cookie consent/i }),
    ).not.toBeInTheDocument();

    // Remount the app as a new browser session would, with the stored consent
    // still in place.
    first.unmount();
    render(<App />);
    await screen.findByRole("heading", { level: 1 });

    expect(
      screen.queryByRole("region", { name: /cookie consent/i }),
    ).not.toBeInTheDocument();
  });
});

describe("Footer Company column legal links", () => {
  it("renders Privacy Policy and Terms of Use links", async () => {
    await renderApp();
    const footer = screen.getByRole("contentinfo");

    expect(
      within(footer).getByRole("link", { name: "Privacy Policy" }),
    ).toBeInTheDocument();
    expect(
      within(footer).getByRole("link", { name: "Terms of Use" }),
    ).toBeInTheDocument();
  });

  it("points the legal links at the external privacy and terms URLs", async () => {
    await renderApp();
    const footer = screen.getByRole("contentinfo");

    expect(
      within(footer).getByRole("link", { name: "Privacy Policy" }),
    ).toHaveAttribute("href", "https://www.tmu.ai/privacy.php");
    expect(
      within(footer).getByRole("link", { name: "Terms of Use" }),
    ).toHaveAttribute("href", "https://www.tmu.ai/terms.php");
  });
});

describe("Privacy page", () => {
  it("renders the headline, paragraph, and two external buttons", async () => {
    // The footer's Privacy Policy link is an external URL, so /privacy is
    // reached by URL rather than by an in-app link. The router is a module
    // singleton backed by browser history, so set the location before render.
    window.history.pushState({}, "", "/privacy");

    await renderApp();

    expect(
      await screen.findByRole("heading", {
        name: /privacy policy & terms of use/i,
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/operates under the tmu privacy policy/i),
    ).toBeInTheDocument();

    const policyButton = screen.getByRole("link", {
      name: /read privacy policy/i,
    });
    const termsButton = screen.getByRole("link", {
      name: /read terms of use/i,
    });
    expect(policyButton).toHaveAttribute(
      "href",
      "https://www.tmu.ai/privacy.php",
    );
    expect(termsButton).toHaveAttribute("href", "https://www.tmu.ai/terms.php");
  });
});
