import App from "@/App";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

// Cover for the three new Home page sections inserted between the OBLIQUE AI
// GOVERNANCE axis cards and the Value proposition section: FIVE DIMENSIONS OF
// SOVEREIGNTY, SOLUTIONS (Sectors We Serve), and a FINAL CTA band.
describe("FIVE DIMENSIONS OF SOVEREIGNTY section", () => {
  it("renders the section with its eyebrow label", async () => {
    render(<App />);
    expect(await screen.findByText("Sovereign AI Defined")).toBeInTheDocument();
  });

  it("renders the five sovereignty dimensions with name and question", async () => {
    render(<App />);
    await screen.findByText("Sovereign AI Defined");

    const items = screen.getAllByTestId("home.sovereignty.item");
    expect(items).toHaveLength(5);

    const names = items.map(
      (item) => within(item).getByRole("heading", { level: 3 }).textContent,
    );
    expect(names).toEqual([
      "Data",
      "Compute",
      "Knowledge",
      "Governance",
      "Execution",
    ]);

    // Each item carries its numbered label and a non-empty question.
    for (const item of items) {
      expect(within(item).getByText(/^0[1-5]$/)).toBeInTheDocument();
      expect(
        within(item).getByRole("paragraph").textContent?.length,
      ).toBeGreaterThan(0);
    }
  });
});

describe("SOLUTIONS section", () => {
  it("renders the section with its eyebrow and headline", async () => {
    render(<App />);
    expect(
      await screen.findByText("One Infrastructure. Many Missions."),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Sectors We Serve/i }),
    ).toBeInTheDocument();
  });

  it("renders the seven sector cards with name and copy", async () => {
    render(<App />);
    await screen.findByText("One Infrastructure. Many Missions.");

    const cards = screen.getAllByTestId("home.sector.card");
    expect(cards).toHaveLength(7);

    const names = cards.map(
      (card) => within(card).getByRole("heading", { level: 3 }).textContent,
    );
    expect(names).toEqual([
      "Government",
      "Banking & Finance",
      "Healthcare",
      "Telecommunications",
      "Education",
      "Agriculture",
      "Enterprise & SMEs",
    ]);

    for (const card of cards) {
      expect(
        within(card).getByRole("paragraph").textContent?.length,
      ).toBeGreaterThan(0);
    }
  });
});

describe("FINAL CTA band", () => {
  it("renders the headline, supporting copy, and two buttons", async () => {
    render(<App />);
    expect(
      await screen.findByRole("heading", {
        name: /Start with one bounded use case/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /prove quality, sovereignty, cost, governance and evidence/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("home.final_cta.primary_button"),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("home.final_cta.secondary_button"),
    ).toBeInTheDocument();
  });
});

describe("New sections placement", () => {
  it("renders the three new sections after the axis cards and before the value proposition", async () => {
    render(<App />);

    // Anchor: the last axis card heading and the value proposition headline.
    const axisCard = await screen.findByRole("heading", {
      name: /Inheritance Continuity/i,
    });
    const valueProp = screen.getByRole("heading", {
      name: /AI should answer to you — not the other way around/i,
    });

    const dimensions = screen.getByText("Sovereign AI Defined");
    const solutions = screen.getByRole("heading", {
      name: /Sectors We Serve/i,
    });
    const finalCta = screen.getByRole("heading", {
      name: /Start with one bounded use case/i,
    });

    const ordered = [axisCard, dimensions, solutions, finalCta, valueProp];
    for (let i = 0; i < ordered.length - 1; i++) {
      expect(
        ordered[i].compareDocumentPosition(ordered[i + 1]) &
          Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy();
    }
  });
});
