import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

// Characterization of the global color tokens that the background-palette
// change must NOT disturb. The request intentionally changes only the
// background-family tokens (page, alternate section, card, nav). Text, button,
// and border colors are explicitly out of scope and must stay exactly as they
// are today. This test freezes those non-background tokens so a background
// edit cannot silently bleed into foreground, accent, or border colors.

const themeCss = readFileSync(resolve(__dirname, "../index.css"), "utf8");

describe("Non-background color tokens are preserved", () => {
  it("keeps the foreground (text) tokens unchanged", () => {
    // Headline text stays pure white; body text stays the slate-blue tone.
    expect(themeCss).toMatch(/--foreground:\s*1\s+0\s+0/);
    expect(themeCss).toMatch(/--card-foreground:\s*0\.71\s+0\.022\s+255/);
    expect(themeCss).toMatch(/--muted-foreground:\s*0\.43\s+0\.028\s+255/);
    expect(themeCss).toMatch(/--sidebar-foreground:\s*0\.82\s+0\.018\s+255/);
  });

  it("keeps the primary (button/link/accent) tokens unchanged", () => {
    // Electric cyan drives buttons, links, and the active nav treatment.
    expect(themeCss).toMatch(/--primary:\s*0\.775\s+0\.15\s+220/);
    expect(themeCss).toMatch(/--accent:\s*0\.775\s+0\.15\s+220/);
    expect(themeCss).toMatch(/--ring:\s*0\.775\s+0\.15\s+220/);
    expect(themeCss).toMatch(/--secondary:\s*0\.25\s+0\.085\s+255/);
  });

  it("keeps the border and input tokens unchanged", () => {
    // Card borders and form inputs share the same slate border tone.
    expect(themeCss).toMatch(/--border:\s*0\.17\s+0\.02\s+255/);
    expect(themeCss).toMatch(/--input:\s*0\.17\s+0\.02\s+255/);
    expect(themeCss).toMatch(/--sidebar-border:\s*0\.17\s+0\.02\s+255/);
  });

  it("keeps the destructive and status tokens unchanged", () => {
    // Destructive and status (success/warning/badge) colors are untouched.
    expect(themeCss).toMatch(/--destructive:\s*0\.55\s+0\.2\s+25/);
    expect(themeCss).toMatch(/--success:\s*0\.72\s+0\.16\s+150/);
    expect(themeCss).toMatch(/--warning:\s*0\.7\s+0\.16\s+75/);
  });
});
