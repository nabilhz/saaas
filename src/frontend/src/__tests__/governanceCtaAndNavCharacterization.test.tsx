import App from "@/App";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

// Characterization of working behavior adjacent to two planned changes:
//   1. The Governance final CTA row will gain a second button beside the
//      existing "Explore Control Room" button.
//   2. The Resources top-level nav item will become a dropdown instead of a
//      single direct link.
//
// This suite protects what must NOT change: the existing Governance CTA button
// stays a real anchor to /control-room with its label, the other top-level nav
// items stay direct links to their routes, and /resources still resolves to the
// Resources page. It deliberately does not assert the number of buttons in the
// CTA row or that Resources is a direct nav link, because those are the
// behaviors the request intentionally changes.

const stableNavLinks: { label: string; href: string }[] = [
  { label: "HOME", href: "/" },
  { label: "WHY SAAAS", href: "/why-saaas" },
  { label: "PLATFORM", href: "/platform" },
  { label: "GOVERNANCE", href: "/governance" },
  { label: "SOLUTIONS", href: "/solutions" },
  { label: "COUNTRY NODES", href: "/country-nodes" },
  { label: "ABOUT", href: "/about" },
];

// The desktop copies render before the mobile copies in the DOM, so the first
// match is the desktop navigation element.
function desktopNavLink(label: string): HTMLElement {
  return screen.getAllByRole("link", { name: label })[0];
}

async function renderGovernance(user: ReturnType<typeof userEvent.setup>) {
  render(<App />);
  const governanceLinks = await screen.findAllByRole("link", {
    name: "GOVERNANCE",
  });
  await user.click(governanceLinks[0]);
  await screen.findByRole("heading", {
    name: /do ai governance the right way/i,
    level: 1,
  });
}

describe("Governance final CTA (adjacent to the added second button)", () => {
  it("keeps the existing Explore Control Room button as an anchor to /control-room", async () => {
    const user = userEvent.setup();
    await renderGovernance(user);

    const button = screen.getByTestId("governance.cta.primary_button");
    expect(button.tagName).toBe("A");
    expect(button).toHaveAttribute("href", "/control-room");
    expect(button).toHaveTextContent(/explore control room/i);
  });

  it("keeps the final CTA heading and places the existing button inside the CTA band", async () => {
    const user = userEvent.setup();
    await renderGovernance(user);

    const heading = screen.getByRole("heading", {
      name: /see governance in action\./i,
    });
    expect(heading).toBeInTheDocument();

    const ctaSection = heading.closest("section");
    expect(ctaSection).not.toBeNull();
    expect(
      within(ctaSection as HTMLElement).getByTestId(
        "governance.cta.primary_button",
      ),
    ).toBeInTheDocument();
  });

  it("navigates to the control room when the existing CTA button is clicked", async () => {
    const user = userEvent.setup();
    await renderGovernance(user);

    await user.click(screen.getByTestId("governance.cta.primary_button"));
    expect(
      await screen.findByRole("heading", {
        name: /one glance\. the state of your ai operation\./i,
        level: 1,
      }),
    ).toBeInTheDocument();
  });
});

describe("Navbar top-level links (adjacent to the Resources dropdown change)", () => {
  it("keeps every non-Resources top-level item as a direct link to its route", () => {
    render(<App />);

    for (const { label, href } of stableNavLinks) {
      const link = desktopNavLink(label);
      expect(link.tagName).toBe("A");
      expect(link).toHaveAttribute("href", href);
    }
  });

  it("keeps the desktop nav CTA buttons and logo intact", () => {
    render(<App />);

    expect(screen.getByTestId("nav.logo")).toHaveAttribute("href", "/");
    expect(screen.getByTestId("nav.explore_control_room")).toHaveAttribute(
      "href",
      "/control-room",
    );
    expect(screen.getByTestId("nav.request_pilot")).toHaveAttribute(
      "href",
      "/pilot",
    );
  });

  it("still navigates to a stable page through its top-level link", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(desktopNavLink("PLATFORM"));
    expect(
      await screen.findByRole("heading", { name: /^platform$/i, level: 1 }),
    ).toBeInTheDocument();
  });
});

describe("Resources route (destination of the changing nav item)", () => {
  it("resolves /resources to the Resources page via the footer link", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByTestId("footer.link.company.resources"));
    expect(
      await screen.findByRole("heading", { name: /^resources$/i, level: 1 }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/whitepapers, case studies, technical guides/i),
    ).toBeInTheDocument();
  });
});
