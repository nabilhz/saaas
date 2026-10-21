import App from "@/App";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

// Characterization of working behavior adjacent to the accepted navigation and
// copy changes. The request intentionally changes:
//   * the French nav CTA label (EXPLORER LE CONTROL ROOM -> VOIR LE CONTROL ROOM);
//   * the Home page, which loses every section below the final
//     START WITH ONE BOUNDED USE CASE band;
//   * the hero and Home bottom buttons (now /pilot) and the footer Control Room
//     link (now /control-room);
//   * several French strings, the About Our Story 2nd/3rd paragraphs, the
//     Solutions sector-list sentence and the Why SAAAS bottom CTA copy.
//
// This suite deliberately does NOT assert any of those changing behaviors.
// It protects the surrounding behavior that must survive: the desktop nav
// structure and one-line layout, the language switcher's placement and colors,
// the html lang attribute, the Home sections that remain above the final band,
// and the footer links that are not being retargeted.

const ACTIVE_COLOR = "rgb(0, 200, 255)";
const INACTIVE_COLOR = "rgb(203, 213, 225)";

beforeEach(() => {
  window.localStorage.clear();
});

afterEach(() => {
  window.localStorage.clear();
  cleanup();
  document.body.innerHTML = "";
  document.body.style.pointerEvents = "";
});

function desktopNavLink(label: string) {
  return screen.getAllByRole("link", { name: label })[0];
}

function desktopSwitcher() {
  return screen.getAllByTestId("nav.language_switcher")[0];
}

function languageButton(code: "en" | "fr") {
  return within(desktopSwitcher()).getByTestId(`nav.language.${code}`);
}

async function renderApp() {
  render(<App />);
  await screen.findByRole("heading", { level: 1 });
}

describe("Desktop navigation one-line layout", () => {
  it("keeps the links group and CTA group as single-line flex rows", async () => {
    await renderApp();

    const linksGroup = desktopNavLink("HOME").parentElement as HTMLElement;
    const linksClasses = linksGroup.className.split(/\s+/);
    expect(linksClasses).toContain("lg:flex");
    expect(linksClasses).toContain("items-center");

    const ctaGroup = screen.getByTestId("nav.explore_control_room")
      .parentElement as HTMLElement;
    const ctaClasses = ctaGroup.className.split(/\s+/);
    expect(ctaClasses).toContain("lg:flex");
    expect(ctaClasses).toContain("items-center");
  });

  it("keeps every desktop nav link and CTA label on one line", async () => {
    await renderApp();

    for (const label of [
      "HOME",
      "WHY SAAAS",
      "PLATFORM",
      "GOVERNANCE",
      "SOLUTIONS",
      "COUNTRY NODES",
      "ABOUT",
    ]) {
      expect(desktopNavLink(label).className).toContain("whitespace-nowrap");
    }

    // The CTA buttons render their labels through the Button component, which
    // keeps the label on a single line.
    expect(screen.getByTestId("nav.explore_control_room")).toBeInTheDocument();
    expect(screen.getByTestId("nav.request_pilot")).toBeInTheDocument();
  });

  it("keeps the language switcher between the links group and the CTA group", async () => {
    await renderApp();

    const switcher = desktopSwitcher();
    const linksGroup = desktopNavLink("HOME").parentElement as HTMLElement;
    const ctaGroup = screen.getByTestId("nav.explore_control_room")
      .parentElement as HTMLElement;

    expect(switcher.parentElement).toBe(linksGroup.parentElement);
    expect(
      linksGroup.compareDocumentPosition(switcher) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      switcher.compareDocumentPosition(ctaGroup) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });
});

describe("Language switcher colors and html lang", () => {
  it("colors the active language #00C8FF and the inactive #CBD5E1", async () => {
    await renderApp();

    expect(languageButton("en")).toHaveStyle({ color: ACTIVE_COLOR });
    expect(languageButton("fr")).toHaveStyle({ color: INACTIVE_COLOR });
  });

  it("reflects the selected language in the html lang attribute", async () => {
    const user = userEvent.setup();
    await renderApp();

    expect(document.documentElement.lang).toBe("en");

    await user.click(languageButton("fr"));
    expect(document.documentElement.lang).toBe("fr");

    await user.click(languageButton("en"));
    expect(document.documentElement.lang).toBe("en");
  });
});

describe("Home sections that remain above the final CTA band", () => {
  it("keeps the hero, flow, why, governance, sovereignty and solutions sections", async () => {
    await renderApp();

    // Hero
    expect(
      screen.getByRole("heading", {
        name: /sovereign ai\. governed\. managed/i,
        level: 1,
      }),
    ).toBeInTheDocument();
    // HOW SAAAS WORKS flow
    expect(screen.getByText("The Saaas Flow")).toBeInTheDocument();
    // WHY SAAAS
    expect(screen.getByText("Why Saaas")).toBeInTheDocument();
    // OBLIQUE AI GOVERNANCE
    expect(
      screen.getByRole("heading", { name: /AI should not govern itself/i }),
    ).toBeInTheDocument();
    // FIVE DIMENSIONS OF SOVEREIGNTY
    expect(screen.getByText("Sovereign AI Defined")).toBeInTheDocument();
    // SOLUTIONS
    expect(
      screen.getByRole("heading", { name: /Sectors We Serve/i }),
    ).toBeInTheDocument();
  });

  it("keeps the final CTA band after the Solutions section", async () => {
    await renderApp();

    const finalCta = screen.getByRole("heading", {
      name: /Start with one bounded use case/i,
    });
    const solutions = screen.getByRole("heading", {
      name: /Sectors We Serve/i,
    });

    // The final band follows the Solutions section. (Whether anything renders
    // below it is the intentional change and is deliberately not asserted.)
    expect(
      solutions.compareDocumentPosition(finalCta) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it("keeps the final CTA band's two buttons present", async () => {
    await renderApp();

    expect(
      screen.getByTestId("home.final_cta.primary_button"),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("home.final_cta.secondary_button"),
    ).toBeInTheDocument();
  });
});

describe("Footer links not being retargeted", () => {
  it("keeps the footer's five columns and the external legal links", async () => {
    await renderApp();
    const footer = screen.getByRole("contentinfo");

    for (const column of [
      "Platform",
      "Governance",
      "Solutions",
      "Network",
      "Company",
    ]) {
      expect(within(footer).getByText(column)).toBeInTheDocument();
    }

    expect(
      within(footer).getByRole("link", { name: "Privacy Policy" }),
    ).toHaveAttribute("href", "https://www.tmu.ai/privacy.php");
    expect(
      within(footer).getByRole("link", { name: "Terms of Use" }),
    ).toHaveAttribute("href", "https://www.tmu.ai/terms.php");
  });

  it("keeps the footer's non-Control-Room internal links on their routes", async () => {
    await renderApp();
    const footer = screen.getByRole("contentinfo");

    expect(
      within(footer).getByTestId("footer.link.company.about"),
    ).toHaveAttribute("href", "/about");
    expect(
      within(footer).getByTestId("footer.link.company.resources"),
    ).toHaveAttribute("href", "/resources");
    expect(
      within(footer).getByTestId("footer.link.network.countryNodes"),
    ).toHaveAttribute("href", "/country-nodes");
    expect(
      within(footer).getByTestId("footer.link.company.contact"),
    ).toHaveAttribute("href", "/pilot");
  });
});
