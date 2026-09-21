import App from "@/App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

// Characterization of the navigation bar's working styling that the global
// nav-styling change must preserve. The active link is recolored cyan only —
// no bold, background, box, underline, border, or highlight is added — and the
// near-black nav background stays opaque and fixed across page navigation.

async function desktopNavLink(label: string) {
  const links = await screen.findAllByRole("link", { name: label });
  return links[0];
}

function headerOf(link: HTMLElement): HTMLElement {
  const header = link.closest("header");
  expect(header).not.toBeNull();
  return header as HTMLElement;
}

describe("Navbar active link styling", () => {
  it("recolors the active link cyan without adding bold or a font-weight change", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(await desktopNavLink("PLATFORM"));
    const platformLink = await desktopNavLink("PLATFORM");
    const classes = platformLink.className.split(/\s+/);

    // The active treatment is a color change only: no bold weight is added.
    // The base link already carries font-medium (not bold), which is unchanged.
    expect(classes).toContain("text-primary");
    expect(classes.some((c) => /font-bold|font-semibold/.test(c))).toBe(false);
  });
});

describe("Navbar background opacity and persistence", () => {
  it("keeps the nav background opaque with no transparency token", async () => {
    render(<App />);
    const homeLinks = await screen.findAllByRole("link", { name: "HOME" });
    const header = headerOf(homeLinks[0]);
    const classes = header.className.split(/\s+/);

    // The bar is always the solid near-black sidebar token, never transparent.
    expect(classes).toContain("bg-sidebar");
    expect(classes.some((c) => c.includes("transparent"))).toBe(false);
    expect(classes.some((c) => c.startsWith("opacity-"))).toBe(false);
  });

  it("keeps the same opaque nav background after navigating to another page", async () => {
    const user = userEvent.setup();
    render(<App />);

    const homeLink = await desktopNavLink("HOME");
    const before = headerOf(homeLink).className.split(/\s+/);

    await user.click(await desktopNavLink("GOVERNANCE"));
    const governanceLink = await desktopNavLink("GOVERNANCE");
    const after = headerOf(governanceLink).className.split(/\s+/);

    // The header is fixed and its background does not change across pages.
    expect(after).toContain("bg-sidebar");
    expect(after).toContain("fixed");
    expect(after).toContain("top-0");
    expect(after).toEqual(before);
  });
});
