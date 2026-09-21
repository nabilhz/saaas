import App from "@/App";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

// Cover for the two new Home page sections added below the rebuilt HOW SAAAS
// WORKS flow: WHY SAAAS (a six-benefit grid) and OBLIQUE AI GOVERNANCE (a
// split layout with three axis cards).
describe("WHY SAAAS section", () => {
  it("renders the section with its eyebrow label", async () => {
    render(<App />);
    expect(await screen.findByText("Why Saaas")).toBeInTheDocument();
  });

  it("renders six benefit cards with number, title, and copy", async () => {
    render(<App />);
    await screen.findByText("Why Saaas");

    const cards = screen.getAllByTestId("home.why.card");
    expect(cards).toHaveLength(6);

    const titles = cards.map(
      (card) => within(card).getByRole("heading", { level: 3 }).textContent,
    );
    expect(titles).toEqual([
      "Sovereign",
      "Economical",
      "Model-Agnostic",
      "Locally Informed",
      "Governed",
      "Managed",
    ]);

    // Each card carries its numbered label and a non-empty description.
    for (const card of cards) {
      expect(within(card).getByText(/^0[1-6]$/)).toBeInTheDocument();
      expect(
        within(card).getByRole("paragraph").textContent?.length,
      ).toBeGreaterThan(0);
    }
  });
});

describe("OBLIQUE AI GOVERNANCE section", () => {
  it("renders the split-layout headline and supporting copy", async () => {
    render(<App />);
    expect(
      await screen.findByRole("heading", {
        name: /AI should not govern itself/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/oblique ai governance independently observes changes/i),
    ).toBeInTheDocument();
  });

  it("renders the control-room image in the split layout", async () => {
    render(<App />);
    await screen.findByRole("heading", {
      name: /AI should not govern itself/i,
    });
    const image = screen.getByAltText(
      /futuristic control room with server infrastructure/i,
    );
    expect(image).toBeInTheDocument();
    expect(image.getAttribute("src")).toContain("governance-control-room");
  });

  it("renders the three axis cards with their axis labels", async () => {
    render(<App />);
    await screen.findByRole("heading", {
      name: /AI should not govern itself/i,
    });

    const cards = screen.getAllByTestId("home.axis.card");
    expect(cards).toHaveLength(3);

    const axes = cards.map(
      (card) => within(card).getByText(/^[XYZ]$/).textContent,
    );
    expect(axes).toEqual(["X", "Y", "Z"]);

    const titles = cards.map(
      (card) => within(card).getByRole("heading", { level: 3 }).textContent,
    );
    expect(titles).toEqual([
      "Behavioral Divergence",
      "Genesis Continuity",
      "Inheritance Continuity",
    ]);
  });
});

describe("New Home sections order below the Hero", () => {
  it("renders HOW SAAAS WORKS, WHY SAAAS, then OBLIQUE AI GOVERNANCE in order", async () => {
    render(<App />);
    const flow = await screen.findByText("The Saaas Flow");
    const why = screen.getByText("Why Saaas");
    const governance = screen.getByRole("heading", {
      name: /AI should not govern itself/i,
    });

    expect(
      flow.compareDocumentPosition(why) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      why.compareDocumentPosition(governance) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });
});
