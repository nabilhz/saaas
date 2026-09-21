import App from "@/App";
import { footerColumns } from "@/lib/routes";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

// Characterization of the working behavior that the cookie-consent / privacy
// change must preserve:
//
//   * the footer keeps its five columns and the Company column keeps its
//     existing links (the change only *adds* Privacy Policy and Terms of Use);
//   * every existing route still renders its level-1 heading;
//   * the root layout still renders Navbar + main + Footer in order, with the
//     footer as the last landmark, so a bottom-anchored banner can be added
//     without displacing the page structure.
//
// The new banner, the new footer links, and the /privacy page are the
// intentional change and are deliberately NOT asserted here.

const existingCompanyLinks = ["About", "Resources", "Careers", "Contact"];

const existingRoutes: { link: string; heading: RegExp }[] = [
  { link: "WHY SAAAS", heading: /sovereign ai\. on your terms\./i },
  { link: "PLATFORM", heading: /^platform$/i },
  { link: "GOVERNANCE", heading: /do ai governance the right way/i },
  { link: "SOLUTIONS", heading: /^solutions$/i },
  {
    link: "COUNTRY NODES",
    heading: /one saaas standard\. many sovereign nations/i,
  },
  { link: "RESOURCES", heading: /^resources$/i },
  { link: "ABOUT", heading: /building the sovereign ai layer/i },
];

// The nav links render in both the desktop bar and the mobile menu; the
// desktop copies come first in the DOM.
function desktopNavLink(label: string) {
  return screen.getAllByRole("link", { name: label })[0];
}

// The router is a module singleton, so its location persists across tests in
// this file. Await the first render before querying, and assert the default
// route before any test navigates away from it.
async function renderApp() {
  render(<App />);
  await screen.findByRole("heading", { level: 1 });
}

describe("Home route baseline", () => {
  it("still renders the home page on the default route", async () => {
    render(<App />);
    expect(
      await screen.findByRole("heading", {
        name: /sovereign ai\. governed\. managed/i,
        level: 1,
      }),
    ).toBeInTheDocument();
  });
});

describe("Footer Company column baseline", () => {
  it("keeps the Company column and its existing links", async () => {
    await renderApp();
    const footer = screen.getByRole("contentinfo");

    expect(within(footer).getByText("Company")).toBeInTheDocument();

    for (const label of existingCompanyLinks) {
      expect(
        within(footer).getByRole("link", { name: label }),
      ).toBeInTheDocument();
    }
  });

  it("keeps the Company column's existing link targets", async () => {
    await renderApp();
    const footer = screen.getByRole("contentinfo");

    const expectedTargets: Record<string, string> = {
      About: "/about",
      Resources: "/resources",
      Careers: "/about",
      Contact: "/pilot",
    };

    for (const [label, to] of Object.entries(expectedTargets)) {
      const link = within(footer).getByRole("link", { name: label });
      expect(link).toHaveAttribute("href", to);
    }
  });

  it("keeps the footer's five columns and centered tagline", async () => {
    await renderApp();
    const footer = screen.getByRole("contentinfo");

    for (const column of footerColumns) {
      expect(within(footer).getByText(column.title)).toBeInTheDocument();
    }
    expect(
      within(footer).getByText(/SAAAS — Sovereign AI\. Governed\. Managed\./),
    ).toBeInTheDocument();
  });

  it("keeps the Company column's link order stable", async () => {
    await renderApp();
    const footer = screen.getByRole("contentinfo");

    const companyHeading = within(footer).getByText("Company");
    const column = companyHeading.closest("div");
    expect(column).not.toBeNull();

    const labels = within(column as HTMLElement)
      .getAllByRole("link")
      .map((link) => link.textContent?.trim());

    // The existing links stay in their current relative order; the change may
    // append Privacy Policy / Terms of Use after them.
    const positions = existingCompanyLinks.map((label) =>
      labels.indexOf(label),
    );
    expect(positions.every((position) => position >= 0)).toBe(true);
    expect(positions).toEqual([...positions].sort((a, b) => a - b));
  });
});

describe("Existing routes baseline", () => {
  it("still renders every existing route's level-1 heading", async () => {
    const user = userEvent.setup();
    await renderApp();

    for (const { link, heading } of existingRoutes) {
      await user.click(desktopNavLink(link));
      expect(
        screen.getByRole("heading", { name: heading, level: 1 }),
      ).toBeInTheDocument();
    }
  });
});

describe("Root layout baseline", () => {
  it("renders the navbar, main content, and footer in order", async () => {
    await renderApp();

    const banner = screen.getByRole("banner");
    const main = screen.getByRole("main");
    const footer = screen.getByRole("contentinfo");

    // The three landmarks are distinct and appear in document order.
    expect(banner).not.toBe(main);
    expect(main).not.toBe(footer);
    expect(
      banner.compareDocumentPosition(main) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      main.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it("keeps the footer as the last landmark on the page", async () => {
    await renderApp();

    const footer = screen.getByRole("contentinfo");
    const landmarks = screen
      .getAllByRole("banner")
      .concat(screen.getAllByRole("main"), screen.getAllByRole("contentinfo"));

    // The footer is the final landmark, so a bottom-anchored banner can be
    // appended after it without reordering the existing page structure.
    expect(landmarks[landmarks.length - 1]).toBe(footer);
  });
});
