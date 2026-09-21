import App from "@/App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

// Characterization of the navigation bar's current working behavior that the
// global nav-styling change must preserve: the bar keeps a fixed near-black
// background at all times, hovering a nav link recolors it cyan without adding
// a background, and the desktop links and CTA buttons live in single-line flex
// containers so they never wrap.

function desktopNavLink(label: string) {
  return screen.getAllByRole("link", { name: label })[0];
}

describe("Navbar background", () => {
  it("keeps the fixed near-black sidebar background on the header", async () => {
    render(<App />);
    const homeLinks = await screen.findAllByRole("link", { name: "HOME" });
    const header = homeLinks[0].closest("header");
    expect(header).not.toBeNull();
    const classes = (header as HTMLElement).className.split(/\s+/);
    // The nav background token maps to #070E1A in the theme.
    expect(classes).toContain("bg-sidebar");
    // The bar is fixed to the top so it does not move or change on scroll.
    expect(classes).toContain("fixed");
    expect(classes).toContain("top-0");
  });
});

describe("Navbar hover behavior", () => {
  it("recolors a nav link cyan on hover without adding a background", async () => {
    const user = userEvent.setup();
    render(<App />);

    const link = desktopNavLink("GOVERNANCE");
    const classes = link.className.split(/\s+/);
    // Hover is expressed as a cyan recolor only, with no background change.
    expect(classes).toContain("hover:text-primary");
    expect(classes.some((c) => c.startsWith("hover:bg-"))).toBe(false);

    await user.hover(link);
    // Hovering must not mutate the element's class list (no background added).
    expect(link.className.split(/\s+/)).toEqual(classes);
  });
});

describe("Navbar single-line layout", () => {
  it("lays the desktop nav links out in a single flex row", () => {
    render(<App />);
    const linksContainer = desktopNavLink("HOME").parentElement;
    expect(linksContainer).not.toBeNull();
    const containerClasses = (linksContainer as HTMLElement).className.split(
      /\s+/,
    );
    // The links row is a responsive flex container so links sit on one line.
    expect(containerClasses).toContain("lg:flex");
    expect(containerClasses).toContain("items-center");
    // The 16px gap between links keeps them from crowding or wrapping.
    expect(containerClasses).toContain("gap-4");
  });

  it("keeps each desktop nav link on one line with 13px text", () => {
    render(<App />);
    const link = desktopNavLink("GOVERNANCE");
    const classes = link.className.split(/\s+/);
    // Links never wrap to a second line and use the fixed 13px nav size.
    expect(classes).toContain("whitespace-nowrap");
    expect(classes).toContain("text-[13px]");
  });

  it("lays the two CTA buttons out in a single flex row", () => {
    render(<App />);
    const explore = screen.getByTestId("nav.explore_control_room");
    const request = screen.getByTestId("nav.request_pilot");
    // Both CTA buttons share the same flex container so they stay on one line.
    expect(explore.parentElement).toBe(request.parentElement);
    const containerClasses = (
      explore.parentElement as HTMLElement
    ).className.split(/\s+/);
    expect(containerClasses).toContain("lg:flex");
    expect(containerClasses).toContain("items-center");
  });
});
