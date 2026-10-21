import App from "@/App";
import ControlRoomPage from "@/pages/ControlRoomPage";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

// Characterization of the working behavior that the EN | FR language-switcher
// change must preserve. The change adds a toggle between the desktop nav links
// and the two CTA buttons and translates visible copy, so this file protects:
//
//   * the desktop bar's structure and order — logo, then the links group, then
//     the CTA group — so the toggle can be inserted between the last two
//     without reordering or merging them;
//   * the strings the accepted requirements keep in English in the French
//     version: brand/product names, technical terms, decision labels, and
//     external URLs;
//   * the cookie banner's English copy and its external Learn More target.
//
// The toggle itself, the French copy, and the persistence behavior are the
// intentional change and are deliberately NOT asserted here.

const CONSENT_STORAGE_KEY = "saaas.cookie-consent";

beforeEach(() => {
  window.localStorage.clear();
});

afterEach(() => {
  window.localStorage.clear();
  // Radix portals its menu into document.body and locks body pointer-events
  // while open; reset both so an open menu cannot leak into the next test.
  cleanup();
  document.body.innerHTML = "";
  document.body.style.pointerEvents = "";
});

// The nav links and CTA buttons render in both the desktop bar and the mobile
// menu; the desktop copies come first in the DOM.
function desktopNavLink(label: string) {
  return screen.getAllByRole("link", { name: label })[0];
}

async function renderApp() {
  render(<App />);
  await screen.findByRole("heading", { level: 1 });
}

describe("Desktop navigation bar structure", () => {
  it("keeps the logo, the links group, and the CTA group as distinct siblings in order", async () => {
    await renderApp();

    const logo = screen.getByTestId("nav.logo");
    const linksGroup = desktopNavLink("HOME").parentElement;
    const ctaGroup = screen.getByTestId(
      "nav.explore_control_room",
    ).parentElement;

    expect(linksGroup).not.toBeNull();
    expect(ctaGroup).not.toBeNull();
    // The links and CTA groups are separate containers, so a toggle can sit
    // between them without being absorbed into either.
    expect(linksGroup).not.toBe(ctaGroup);
    // Both groups share the same parent (the nav row) as the logo.
    expect(linksGroup?.parentElement).toBe(logo.parentElement);
    expect(ctaGroup?.parentElement).toBe(logo.parentElement);

    // Document order: logo, then links group, then CTA group.
    const navRow = logo.parentElement as HTMLElement;
    const order = Array.from(navRow.children);
    expect(order.indexOf(logo)).toBeLessThan(
      order.indexOf(linksGroup as Element),
    );
    expect(order.indexOf(linksGroup as Element)).toBeLessThan(
      order.indexOf(ctaGroup as Element),
    );
  });

  it("keeps both CTA buttons together in one desktop group", async () => {
    await renderApp();

    const explore = screen.getByTestId("nav.explore_control_room");
    const request = screen.getByTestId("nav.request_pilot");
    expect(explore.parentElement).toBe(request.parentElement);

    const ctaGroup = explore.parentElement as HTMLElement;
    const navRow = ctaGroup.parentElement as HTMLElement;
    // The CTA group sits after the links group and before the mobile menu
    // toggle, so the toggle is inserted between the links and the CTAs rather
    // than after the buttons.
    const linksGroup = desktopNavLink("HOME").parentElement as HTMLElement;
    const order = Array.from(navRow.children);
    expect(order.indexOf(linksGroup)).toBeLessThan(order.indexOf(ctaGroup));
    expect(order.indexOf(ctaGroup)).toBeLessThan(
      order.indexOf(screen.getByTestId("nav.menu_toggle")),
    );
  });

  it("keeps the nav links group before the CTA group in the desktop bar", async () => {
    await renderApp();

    const linksGroup = desktopNavLink("HOME").parentElement as HTMLElement;
    const ctaGroup = screen.getByTestId("nav.explore_control_room")
      .parentElement as HTMLElement;

    expect(
      linksGroup.compareDocumentPosition(ctaGroup) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });
});

describe("English-only brand, technical, and decision strings", () => {
  it("keeps the SAAAS brand name in the logo and footer tagline", async () => {
    await renderApp();

    expect(screen.getByTestId("nav.logo")).toHaveTextContent("SAAAS");
    const footer = screen.getByRole("contentinfo");
    expect(
      within(footer).getByText(/SAAAS — Sovereign AI\. Governed\. Managed\./),
    ).toBeInTheDocument();
  });

  it("keeps the Control Room X/Y/Z axes and DriftShield in English", () => {
    render(<ControlRoomPage />);

    // The timeline's Axis column carries the X/Y/Z decision axes verbatim.
    const table = screen.getByRole("table");
    const axisHeader = within(table).getByRole("columnheader", {
      name: /^axis$/i,
    });
    expect(axisHeader).toBeInTheDocument();

    const rows = screen.getAllByTestId(/^control_room\.timeline\.row\.\d+$/);
    const axisValues = rows.map((row) => row.children[1].textContent?.trim());
    expect(axisValues).toEqual(["X", "Y", "X", "Z", "Y"]);

    // DriftShield is a product name and stays in English in the disclaimer.
    expect(screen.getByText(/HIC\/DriftShield/)).toBeInTheDocument();
  });

  it("keeps the Control Room decision labels in English", () => {
    render(<ControlRoomPage />);

    // The default decision badge and the timeline decision cells are English
    // decision labels that must not be translated.
    expect(
      within(screen.getByTestId("control_room.decision_badge")).getByText(
        /^allow$/i,
      ),
    ).toBeInTheDocument();

    const rows = screen.getAllByTestId(/^control_room\.timeline\.row\.\d+$/);
    expect(within(rows[0]).getByText("ALLOW")).toBeInTheDocument();
    expect(within(rows[2]).getByText("ESCALATE")).toBeInTheDocument();
  });

  it("keeps the Control Room scenario buttons in English by default", () => {
    render(<ControlRoomPage />);

    // The scenario buttons now translate when FR is active (covered in
    // i18nLanguageSwitcher.test.tsx); with the default English language they
    // still render their English labels.
    for (const label of [
      "NORMAL OPERATION",
      "BEHAVIORAL DRIFT",
      "GENESIS BREAK",
      "INHERITANCE BREAK",
    ]) {
      expect(screen.getByRole("button", { name: label })).toBeInTheDocument();
    }
  });
});

describe("External URLs and email addresses stay in English", () => {
  it("keeps the footer legal links pointing at the external tmu.ai URLs", async () => {
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

describe("Cookie consent banner English copy", () => {
  it("keeps the banner's English copy and external Learn More target", async () => {
    render(<App />);

    const banner = await screen.findByRole("region", {
      name: /cookie consent/i,
    });
    expect(
      within(banner).getByText(
        /this site uses cookies for essential functionality/i,
      ),
    ).toBeInTheDocument();
    expect(
      within(banner).getByRole("button", { name: /^accept$/i }),
    ).toBeInTheDocument();
    expect(
      within(banner).getByRole("link", { name: /learn more/i }),
    ).toHaveAttribute("href", "https://www.tmu.ai/privacy.php");
  });

  it("keeps the consent storage key unchanged so stored consent still applies", async () => {
    const user = userEvent.setup();
    await renderApp();

    await user.click(
      within(screen.getByRole("region", { name: /cookie consent/i })).getByRole(
        "button",
        { name: /^accept$/i },
      ),
    );

    expect(window.localStorage.getItem(CONSENT_STORAGE_KEY)).toBe("accepted");
  });
});

describe("Pilot form process line stays in English", () => {
  it("keeps the after-submitting process line in English", async () => {
    const user = userEvent.setup();
    await renderApp();

    await user.click(screen.getByTestId("nav.request_pilot"));

    expect(
      screen.getByText(
        /Discovery → Requirements Assessment → Pilot Design → Controlled Pilot → Evidence Report → Production Decision\./,
      ),
    ).toBeInTheDocument();
  });
});

// Kept last: opening the Radix dropdown portals a menu into document.body and
// registers a dismissable layer, which can interfere with later renders. The
// afterEach above resets the portal and pointer-events lock between tests.
describe("Resources dropdown external URL", () => {
  it("keeps the Resources dropdown's external SAAAS Overview URL", async () => {
    render(<App />);

    // Radix's dropdown trigger opens on a primary-button pointerdown, which
    // jsdom cannot faithfully synthesize; fireEvent carries the button through.
    const trigger = await screen.findByTestId("nav.dropdown.resources");
    fireEvent.pointerDown(trigger, { button: 0, ctrlKey: false });

    const overview = screen.getByTestId(
      "nav.dropdown.resources.saaas_overview",
    );
    expect(overview).toHaveAttribute(
      "href",
      "https://tmu.ai/docs/SovereignAI-as-a-service.pdf",
    );
  });
});
