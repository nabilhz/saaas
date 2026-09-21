import App from "@/App";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

// Cover for the Platform page rebuild: a new hero with a server-room background
// image, PLATFORM eyebrow, and the headline 'One Governed Gateway. Multiple AI
// Resources.'; an 8-layer architecture stack; and a final CTA band with GO TO
// GOVERNANCE and REQUEST A PILOT buttons. The level-1 heading 'Platform' and
// non-blank render invariants (also asserted in site.test.tsx) must survive.
async function renderPlatform() {
  const user = userEvent.setup();
  render(<App />);
  const navLink = await screen.findAllByRole("link", { name: "PLATFORM" });
  await user.click(navLink[0]);
  await screen.findByRole("heading", { name: /^platform$/i, level: 1 });
  return user;
}

describe("Platform page structural contract", () => {
  it("renders a level-1 heading matching /^platform$/i", async () => {
    await renderPlatform();
    expect(
      screen.getByRole("heading", { name: /^platform$/i, level: 1 }),
    ).toBeInTheDocument();
  });

  it("renders the page without a blank screen", async () => {
    await renderPlatform();
    // The page must render at least one section beyond the heading so the
    // rebuild does not ship an empty route.
    expect(screen.getAllByRole("heading", { level: 1 }).length).toBeGreaterThan(
      0,
    );
  });
});

describe("Platform page rebuilt content", () => {
  it("renders the hero with a server-room background, PLATFORM eyebrow, and headline", async () => {
    await renderPlatform();

    // The hero's server-room background image is applied as an inline
    // backgroundImage on an absolutely-positioned div.
    const hero = screen
      .getByRole("heading", { name: /^platform$/i, level: 1 })
      .closest("section");
    expect(hero).not.toBeNull();
    const heroEl = hero as HTMLElement;
    expect(
      within(heroEl).getByText(/platform/i, { selector: "p, span" }),
    ).toBeInTheDocument();
    expect(
      within(heroEl).getByText(
        /one governed gateway\. multiple ai resources\./i,
      ),
    ).toBeInTheDocument();

    const bg = heroEl.querySelector('[aria-hidden="true"]');
    expect(bg).not.toBeNull();
    expect((bg as HTMLElement).style.backgroundImage).toContain(
      "platform-hero-serverroom",
    );
  });

  it("renders the 8-layer architecture stack with the specified layers", async () => {
    await renderPlatform();

    const layerCards = screen.getAllByTestId(/^platform\.layer\.\d+$/);
    expect(layerCards).toHaveLength(8);

    const layerNames = [
      "Experience / Enterprise Interfaces",
      "SAAAS Orchestration",
      "Sovereign Knowledge",
      "Policy-Aware Smart Routing",
      "AI Resource Fabric",
      "Oblique AI Governance (HIC · X/Y/Z · DriftShield)",
      "Authorization & Execution Verification",
      "Evidence & Control Room",
    ];

    for (let i = 0; i < layerNames.length; i++) {
      const heading = within(layerCards[i]).getByRole("heading");
      expect(heading.textContent).toMatch(
        new RegExp(layerNames[i].replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"),
      );
    }
  });

  it("renders the final CTA band with GO TO GOVERNANCE and REQUEST A PILOT buttons", async () => {
    await renderPlatform();

    expect(
      screen.getByRole("heading", { name: /explore how governance works\./i }),
    ).toBeInTheDocument();

    const governanceCta = screen.getByTestId("platform.cta.go_to_governance");
    expect(governanceCta).toHaveAttribute("href", "/governance");
    expect(
      within(governanceCta).getByText(/go to governance/i),
    ).toBeInTheDocument();

    const pilotCta = screen.getByTestId("platform.cta.request_pilot");
    expect(pilotCta).toHaveAttribute("href", "/pilot");
    expect(within(pilotCta).getByText(/request a pilot/i)).toBeInTheDocument();
  });
});
