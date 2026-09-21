import App from "@/App";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

// Cover for the Governance page replacement: a new hero with a dark
// neural-network background and radial glow, a cyan principle band, three axis
// cards (X/Y/Z), four alternating content rows, and a final CTA band.
async function renderGovernance() {
  const user = userEvent.setup();
  render(<App />);
  const navLink = await screen.findAllByRole("link", { name: "GOVERNANCE" });
  await user.click(navLink[0]);
  await screen.findByRole("heading", {
    name: /do ai governance the right way/i,
    level: 1,
  });
  return user;
}

describe("Governance page layout", () => {
  it("renders the new hero with a level-1 headline and supporting paragraph", async () => {
    await renderGovernance();
    expect(
      screen.getByRole("heading", {
        name: /do ai governance the right way/i,
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/measurement provides evidence\./i),
    ).toBeInTheDocument();
  });

  it("renders the cyan principle band", async () => {
    await renderGovernance();
    expect(
      screen.getByText(
        /independent observation → x \/ y \/ z → driftshield governance-state reconstruction → tmu execution authorization/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders the three axis cards X, Y, and Z", async () => {
    await renderGovernance();
    expect(
      screen.getByRole("heading", { name: /what is being observed\?/i }),
    ).toBeInTheDocument();

    const cards = screen.getAllByTestId("governance.axis.card");
    expect(cards).toHaveLength(3);
    const axes = cards.map(
      (card) => within(card).getByText(/^[XYZ]$/).textContent,
    );
    expect(axes).toEqual(["X", "Y", "Z"]);
    expect(
      within(cards[0]).getByRole("heading", {
        name: /behavioral divergence/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(cards[1]).getByRole("heading", {
        name: /genesis state continuity/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(cards[2]).getByRole("heading", {
        name: /state inheritance continuity/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the four alternating content rows", async () => {
    await renderGovernance();
    for (const headline of [
      /oblique ai governance/i,
      /human oversight/i,
      /execution verification/i,
      /evidence & audit/i,
    ]) {
      expect(
        screen.getByRole("heading", { name: headline }),
      ).toBeInTheDocument();
    }
  });

  it("renders an image beside each of the four content rows", async () => {
    await renderGovernance();
    const alts = [
      /human hand interacting with a holographic governance panel/i,
      /professional reviewing data on screens in a dark control room/i,
      /verified checkmark over a flowing data stream/i,
      /audit log with cyan highlighted evidence timeline entries/i,
    ];
    for (const alt of alts) {
      const img = screen.getByAltText(alt);
      expect(img).toBeInTheDocument();
      expect(img.getAttribute("src")).toContain("governance-");
    }
  });

  it("alternates the row backgrounds between muted and background", async () => {
    await renderGovernance();
    const rows = [
      /oblique ai governance/i,
      /human oversight/i,
      /execution verification/i,
      /evidence & audit/i,
    ].map((headline) =>
      screen.getByRole("heading", { name: headline }).closest("section"),
    );
    expect(rows).toHaveLength(4);
    for (const row of rows) {
      expect(row).not.toBeNull();
    }
    // The four rows alternate bg-muted / bg-background / bg-muted / bg-background.
    const backgrounds = rows.map((row) => (row as HTMLElement).className);
    expect(backgrounds[0]).toContain("bg-muted");
    expect(backgrounds[1]).toContain("bg-background");
    expect(backgrounds[2]).toContain("bg-muted");
    expect(backgrounds[3]).toContain("bg-background");
  });

  it("renders the final CTA band with its control-room link", async () => {
    await renderGovernance();
    expect(
      screen.getByRole("heading", { name: /see governance in action\./i }),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("governance.cta.primary_button"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("governance.cta.primary_button")).toHaveAttribute(
      "href",
      "/control-room",
    );
  });
});
