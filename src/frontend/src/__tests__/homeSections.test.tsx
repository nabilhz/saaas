import App from "@/App";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

// Characterization of the Home page sections that sit below the Hero and are
// not part of the Hero replacement / HOW SAAAS WORKS addition. These should
// remain intact when the Hero is reworked.
describe("Home page supporting sections", () => {
  it("renders the value proposition section with its eyebrow and headline", async () => {
    render(<App />);
    expect(await screen.findByText("Why Sovereign AI")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /AI should answer to you — not the other way around/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the four capability cards", async () => {
    render(<App />);
    expect(await screen.findByText("Capabilities")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /A complete sovereign AI stack/i }),
    ).toBeInTheDocument();

    const cards = screen.getAllByTestId("home.capability.card");
    expect(cards).toHaveLength(4);
    const titles = cards.map(
      (card) => within(card).getByRole("heading", { level: 3 }).textContent,
    );
    expect(titles).toEqual([
      "Custom Large Language Models",
      "Sovereign Inference",
      "Governance & Oversight",
      "Automated Workflows",
    ]);
  });

  it("renders the three platform highlight cards", async () => {
    render(<App />);
    expect(await screen.findByText("Platform Highlights")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /Built for sovereignty, engineered for scale/i,
      }),
    ).toBeInTheDocument();

    const cards = screen.getAllByTestId("home.highlight.card");
    expect(cards).toHaveLength(3);
    const titles = cards.map(
      (card) => within(card).getByRole("heading", { level: 3 }).textContent,
    );
    expect(titles).toEqual([
      "Data Residency",
      "Country Nodes",
      "Zero-Trust Security",
    ]);
  });

  it("renders the CTA band with its two buttons", async () => {
    render(<App />);
    expect(await screen.findByText("Get Started")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Take command of your AI today/i }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("home.cta.primary_button")).toBeInTheDocument();
    expect(screen.getByTestId("home.cta.secondary_button")).toBeInTheDocument();
  });

  it("keeps the supporting sections in their established relative order", async () => {
    // The HOW SAAAS WORKS flow section is being rebuilt and new sections are
    // being added below the Hero, but the value proposition, capability cards,
    // platform highlights, and CTA band must keep their relative order.
    render(<App />);
    const valueProp = await screen.findByRole("heading", {
      name: /AI should answer to you — not the other way around/i,
    });
    const capabilities = screen.getByRole("heading", {
      name: /A complete sovereign AI stack/i,
    });
    const highlights = screen.getByRole("heading", {
      name: /Built for sovereignty, engineered for scale/i,
    });
    const cta = screen.getByRole("heading", {
      name: /Take command of your AI today/i,
    });

    const ordered = [valueProp, capabilities, highlights, cta];
    for (let i = 0; i < ordered.length - 1; i++) {
      expect(
        ordered[i].compareDocumentPosition(ordered[i + 1]) &
          Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy();
    }
  });
});
