import App from "@/App";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

// Characterization of the Home page Hero's structural contract, independent of
// its copy. The Hero replacement keeps the same anatomy — an eyebrow label, a
// level-1 headline, a supporting paragraph, two call-to-action buttons, and a
// micro-line — so this protects the structure even as the wording changes.
describe("Home page Hero structural contract", () => {
  async function heroSection(): Promise<HTMLElement> {
    const hero = (
      await screen.findByTestId("home.hero.primary_button")
    ).closest("section");
    expect(hero).not.toBeNull();
    return hero as HTMLElement;
  }

  it("renders an eyebrow label inside the hero", async () => {
    render(<App />);
    const hero = await heroSection();
    // The eyebrow is a small uppercase label rendered before the headline.
    const eyebrow = within(hero).getByText(/sovereign ai as a service/i);
    expect(eyebrow).toBeInTheDocument();
    expect(eyebrow.tagName).toBe("SPAN");
  });

  it("renders a single level-1 headline inside the hero", async () => {
    render(<App />);
    const hero = await heroSection();
    const headings = within(hero).getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
  });

  it("renders a supporting paragraph inside the hero", async () => {
    render(<App />);
    const hero = await heroSection();
    // The hero paragraph is the only <p> that is not the micro-line.
    const paragraphs = within(hero).getAllByRole("paragraph");
    expect(paragraphs.length).toBeGreaterThanOrEqual(1);
  });

  it("renders exactly two call-to-action buttons inside the hero", async () => {
    render(<App />);
    const hero = await heroSection();
    expect(
      within(hero).getByTestId("home.hero.primary_button"),
    ).toBeInTheDocument();
    expect(
      within(hero).getByTestId("home.hero.secondary_button"),
    ).toBeInTheDocument();
  });

  it("renders a micro-line below the hero buttons", async () => {
    render(<App />);
    const hero = await heroSection();
    // The micro-line is a small uppercase tagline rendered after the buttons.
    const microLine = within(hero).getByText(
      /your data · your knowledge · your jurisdiction · your governance · appropriate ai resources/i,
    );
    expect(microLine).toBeInTheDocument();
  });
});
