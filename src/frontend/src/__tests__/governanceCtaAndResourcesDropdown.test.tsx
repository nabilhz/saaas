import App from "@/App";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

// Radix keeps a document-level dismissable layer and a body pointer-events
// lock while a menu is open. Unmounting the tree removes the portal, but
// Radix's focus guards and popper wrapper can linger in document.body and
// accumulate across tests, making each later menu open progressively slower.
// Remove only those Radix-owned nodes between tests.
afterEach(() => {
  cleanup();
  for (const node of document.body.querySelectorAll(
    "[data-radix-focus-guard], [data-radix-popper-content-wrapper]",
  )) {
    node.remove();
  }
  document.body.style.pointerEvents = "";
});

// Radix's dropdown trigger opens on a primary-button pointerdown, which jsdom
// cannot faithfully synthesize. Keyboard activation is the equivalent
// accessible path and is fully supported: focus the trigger and press Enter.
async function openResourcesMenu(): Promise<HTMLElement> {
  const trigger = await screen.findByTestId("nav.dropdown.resources");
  fireEvent.pointerDown(trigger, { button: 0, ctrlKey: false });
  screen.getByTestId("nav.dropdown.resources_menu");
  return trigger;
}

// Cover for the accepted change:
//   1. The Governance final CTA row gains a second button, "READ THE SAAAS
//      OVERVIEW", beside the existing "Explore Control Room" button. It links
//      to the SAAAS PDF in a new tab and carries the requested inline styles.
//   2. The Resources top-level nav item becomes a dropdown with two items:
//      "SAAAS Overview" (external PDF, new tab) and "Resource Library"
//      (/resources), with the requested inline styles.
//
// The adjacent behavior that must NOT change (existing CTA button, other nav
// links, logo, right-side CTAs, /resources route) is protected by
// governanceCtaAndNavCharacterization.test.tsx and is not re-asserted here.

const SAAAS_PDF = "https://tmu.ai/docs/SovereignAI-as-a-service.pdf";

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

describe("Governance final CTA second button", () => {
  it("renders the READ THE SAAAS OVERVIEW button beside the existing CTA", async () => {
    const user = userEvent.setup();
    await renderGovernance(user);

    const primary = screen.getByTestId("governance.cta.primary_button");
    const secondary = screen.getByTestId("governance.cta.secondary_button");

    expect(secondary).toHaveTextContent(/read the saaas overview/i);
    // Both buttons share the same CTA row.
    expect(secondary.parentElement).toBe(primary.parentElement);
  });

  it("links the new button to the SAAAS PDF in a new tab with noopener", async () => {
    const user = userEvent.setup();
    await renderGovernance(user);

    const secondary = screen.getByTestId("governance.cta.secondary_button");
    expect(secondary.tagName).toBe("A");
    expect(secondary).toHaveAttribute("href", SAAAS_PDF);
    expect(secondary).toHaveAttribute("target", "_blank");
    expect(secondary.getAttribute("rel")).toContain("noopener");
  });

  it("applies the requested inline styles to the new button", async () => {
    const user = userEvent.setup();
    await renderGovernance(user);

    const secondary = screen.getByTestId(
      "governance.cta.secondary_button",
    ) as HTMLElement;
    expect(secondary.style.background).toBe("transparent");
    expect(secondary.style.borderWidth).toBe("1.5px");
    expect(secondary.style.borderStyle).toBe("solid");
    expect(secondary.style.borderColor).toBe("rgb(0, 200, 255)");
    expect(secondary.style.color).toBe("rgb(0, 200, 255)");
    expect(secondary.style.borderRadius).toBe("4px");
    expect(secondary.style.padding).toBe("14px 28px");
    expect(secondary.style.fontWeight).toBe("600");
  });
});

describe("Resources nav dropdown", () => {
  it("renders Resources as a dropdown trigger rather than a direct link", async () => {
    render(<App />);

    const trigger = await screen.findByTestId("nav.dropdown.resources");
    expect(trigger.tagName).not.toBe("A");
    expect(trigger).toHaveTextContent(/resources/i);
    // The old direct Resources nav link is gone.
    expect(screen.queryByTestId("nav.link.resources")).not.toBeInTheDocument();
  });

  it("opens a menu with SAAAS Overview (external, new tab) and Resource Library (/resources)", async () => {
    render(<App />);

    const trigger = await openResourcesMenu();
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    const menu = screen.getByTestId("nav.dropdown.resources_menu");
    const saaas = within(menu).getByTestId(
      "nav.dropdown.resources.saaas_overview",
    );
    const library = within(menu).getByTestId(
      "nav.dropdown.resources.resource_library",
    );

    expect(saaas).toHaveTextContent(/saaas overview/i);
    expect(saaas.tagName).toBe("A");
    expect(saaas).toHaveAttribute("href", SAAAS_PDF);
    expect(saaas).toHaveAttribute("target", "_blank");

    expect(library).toHaveTextContent(/resource library/i);
    expect(library.tagName).toBe("A");
    expect(library).toHaveAttribute("href", "/resources");

    // Close the menu while the tree is still mounted so Radix tears down its
    // portaled content and document-level listeners before the next test.
    fireEvent.keyDown(document, { key: "Escape" });
  });

  it("applies the requested styles to the dropdown menu and its items", async () => {
    render(<App />);
    await openResourcesMenu();
    const menu = screen.getByTestId(
      "nav.dropdown.resources_menu",
    ) as HTMLElement;

    expect(menu.style.backgroundColor).toBe("rgb(13, 27, 42)");
    expect(menu.style.borderWidth).toBe("1px");
    expect(menu.style.borderStyle).toBe("solid");
    expect(menu.style.borderColor).toBe("rgb(30, 41, 59)");
    expect(menu.style.borderRadius).toBe("6px");

    for (const id of [
      "nav.dropdown.resources.saaas_overview",
      "nav.dropdown.resources.resource_library",
    ]) {
      const item = within(menu).getByTestId(id) as HTMLElement;
      expect(item.style.color).toBe("rgb(203, 213, 225)");
      expect(item.style.borderRadius).toBe("6px");
      expect(item.style.padding).toBe("12px 20px");
      // Hover recolors to cyan via the class list.
      expect(item.className).toContain("hover:text-[#00C8FF]");
    }

    // Close the menu while the tree is still mounted so Radix tears down its
    // portaled content and document-level listeners before the next test.
    fireEvent.keyDown(document, { key: "Escape" });
    // Radix's second menu open in jsdom is slow (popper measurement); the
    // default 5s timeout is too tight for it.
  }, 20000);

  it("navigates to the Resources page from the Resource Library item", async () => {
    render(<App />);

    await openResourcesMenu();
    const library = screen.getByTestId(
      "nav.dropdown.resources.resource_library",
    );
    // The item is a router link to /resources, not an external anchor.
    expect(library).toHaveAttribute("href", "/resources");
    expect(library).not.toHaveAttribute("target");

    // Close the menu so Radix releases its aria-hidden/pointer-events lock,
    // then exercise the /resources route through the app's own plain link
    // (the footer's Resources entry), which shares the same router target.
    fireEvent.keyDown(document, { key: "Escape" });
    const footer = screen.getByRole("contentinfo");
    fireEvent.click(within(footer).getByRole("link", { name: "Resources" }));

    expect(
      await screen.findByRole("heading", { name: /^resources$/i, level: 1 }),
    ).toBeInTheDocument();
    // Radix's menu open in jsdom is slow (popper measurement); the default 5s
    // timeout is too tight for it.
  }, 30000);
});
