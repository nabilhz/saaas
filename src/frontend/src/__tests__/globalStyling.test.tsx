import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import App from "@/App";
import { Section } from "@/components/Section";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

// Read the global stylesheet and theme config directly from disk. The `?raw`
// import is not populated in this Vitest environment, so the files are read
// with Node's fs to assert on the actual global CSS and Tailwind theme content.
const themeCss = readFileSync(resolve(__dirname, "../index.css"), "utf8");
const themeConfig = readFileSync(
  resolve(__dirname, "../../tailwind.config.js"),
  "utf8",
);

// Cover for the global styling acceptance criteria: the active nav link renders
// as electric-cyan text only (no background/box/underline), other nav links use
// the muted sidebar foreground, and the Section component applies the tightened
// padding tiers (80px hero / 60px content / 56px CTA).

async function desktopNavLink(label: string) {
  const links = await screen.findAllByRole("link", { name: label });
  return links[0];
}

describe("Navbar active link styling", () => {
  it("renders the active nav link as cyan text with no background or underline", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Navigate to the Platform page so its nav link becomes active.
    await user.click(await desktopNavLink("PLATFORM"));
    const platformLink = await desktopNavLink("PLATFORM");
    const classes = platformLink.className.split(/\s+/);
    expect(classes).toContain("text-primary");
    // Active link must not carry a background, box, or underline treatment.
    expect(classes.some((c) => c.startsWith("bg-"))).toBe(false);
    expect(classes.some((c) => c.includes("underline"))).toBe(false);
    expect(classes.some((c) => /ring|shadow|border/.test(c))).toBe(false);
  });

  it("renders inactive nav links in the muted sidebar foreground", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Navigate to the Platform page; the Governance link stays inactive.
    await user.click(await desktopNavLink("PLATFORM"));
    const governanceLink = await desktopNavLink("GOVERNANCE");
    const classes = governanceLink.className.split(/\s+/);
    expect(classes).toContain("text-sidebar-foreground");
    // The inactive link carries only the hover:text-primary token, not the
    // standalone active text-primary class.
    expect(classes).not.toContain("text-primary");
  });
});

describe("Dark palette (no pure black)", () => {
  it("defines no pure-black background tokens in the theme", () => {
    // The dark palette replaces pure black with near-black tones. The theme's
    // background tokens must never resolve to #000000.
    expect(themeCss).not.toMatch(/#000000/i);
    expect(themeCss).not.toMatch(/--background:\s*0\s+0\s+0/);
    expect(themeCss).not.toMatch(/--sidebar:\s*0\s+0\s+0/);
    expect(themeCss).not.toMatch(/--card:\s*0\s+0\s+0/);
    expect(themeCss).not.toMatch(/--muted:\s*0\s+0\s+0/);
  });

  it("defines no pure-black background color in the theme config", () => {
    // The Tailwind theme maps every color token to the CSS variables above, so
    // no literal pure-black background color may be defined in the config.
    expect(themeConfig).not.toMatch(/#000000/i);
    expect(themeConfig).not.toMatch(/background:\s*["']?#000/i);
    expect(themeConfig).not.toMatch(/card:\s*["']?#000/i);
    expect(themeConfig).not.toMatch(/muted:\s*["']?#000/i);
  });

  it("defines the dark navy palette page, alternate-section, card, and nav backgrounds", () => {
    // The global stylesheet must positively define the dark navy palette: page
    // background #0A1628, alternate section #0D1B2A, card #111F35, and nav
    // #070E1A. These are the navy tones that replace the previous near-black.
    expect(themeCss).toMatch(/#0A1628/i);
    expect(themeCss).toMatch(/#0D1B2A/i);
    expect(themeCss).toMatch(/#111F35/i);
    expect(themeCss).toMatch(/#070E1A/i);
  });
});

describe("Section padding tiers", () => {
  it("applies the tightened hero/content/cta padding classes", () => {
    const { rerender } = render(
      <Section variant="hero" data-ocid="sec.hero" />,
    );
    expect(screen.getByTestId("sec.hero").className).toContain("section-hero");

    rerender(<Section variant="content" data-ocid="sec.content" />);
    expect(screen.getByTestId("sec.content").className).toContain(
      "section-content",
    );

    rerender(<Section variant="cta" data-ocid="sec.cta" />);
    expect(screen.getByTestId("sec.cta").className).toContain("section-cta");
  });

  it("alternates the section background between muted and background", () => {
    const { rerender } = render(<Section data-ocid="sec.default" />);
    expect(screen.getByTestId("sec.default").className).toContain(
      "bg-background",
    );

    rerender(<Section alternate data-ocid="sec.alt" />);
    expect(screen.getByTestId("sec.alt").className).toContain("bg-muted");
  });
});
