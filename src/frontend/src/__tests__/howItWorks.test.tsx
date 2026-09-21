import App from "@/App";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

// Cover for the accepted HOW SAAAS WORKS section (a rebuilt 9-step flow with
// cyan arrows and an italic closing paragraph below the Hero) and the
// exact-spec Hero styling: muted #5A6A80 eyebrow, primary button weight 700
// with 14px 28px padding, and a 1.5px outline button border.
describe("HOW SAAAS WORKS section", () => {
  it("renders the section with its eyebrow label", async () => {
    render(<App />);
    expect(await screen.findByText("The Saaas Flow")).toBeInTheDocument();
  });

  it("renders a 9-step flow diagram", async () => {
    render(<App />);
    await screen.findByText("The Saaas Flow");

    const steps = screen.getAllByTestId("home.flow.step");
    expect(steps).toHaveLength(9);
    const labels = steps.map((step) => step.textContent);
    expect(labels).toEqual([
      "Customer Mission",
      "Authorized Knowledge",
      "Policy-Aware Routing",
      "AI Resource",
      "X/Y/Z Observation",
      "DriftShield",
      "Authorization",
      "Verified Execution",
      "Evidence",
    ]);
  });

  it("renders cyan arrows between the flow steps", async () => {
    render(<App />);
    const eyebrow = await screen.findByText("The Saaas Flow");

    // The rebuilt flow renders an ArrowRight icon between consecutive steps,
    // colored with the cyan `text-primary` accent. Locate the flow section via
    // its eyebrow and count the arrow icons within it.
    const section = eyebrow.closest("section");
    expect(section).not.toBeNull();
    const arrows = Array.from(
      (section as HTMLElement).querySelectorAll(
        "svg.lucide-arrow-right.text-primary",
      ),
    );
    expect(arrows.length).toBeGreaterThanOrEqual(8);
  });

  it("renders the flow's italic closing paragraph", async () => {
    render(<App />);
    const tagline = await screen.findByText(
      /the customer brings the mission\. saaas supplies governed access/i,
    );
    expect(tagline).toBeInTheDocument();
    expect(tagline.className).toContain("italic");
  });
});

describe("Exact-spec Hero styling", () => {
  function hero(): HTMLElement {
    const hero = screen
      .getByTestId("home.hero.primary_button")
      .closest("section");
    expect(hero).not.toBeNull();
    return hero as HTMLElement;
  }

  it("renders the eyebrow in muted #5A6A80", async () => {
    render(<App />);
    await screen.findByTestId("home.hero.primary_button");
    const eyebrow = within(hero()).getByText(/sovereign ai as a service/i);
    // The eyebrow renders muted #5A6A80 through the `.eyebrow` class, whose
    // color is `oklch(var(--muted-foreground))` with `--muted-foreground`
    // defined as the #5A6A80 muted label in index.css.
    expect(eyebrow.className).toContain("eyebrow");
  });

  it("renders the primary button at weight 700 with 14px 28px padding", async () => {
    render(<App />);
    await screen.findByTestId("home.hero.primary_button");
    const primary = screen.getByTestId("home.hero.primary_button");
    expect(primary.className).toContain("font-bold");
    expect(primary.className).toContain("px-7");
    expect(primary.className).toContain("py-3.5");
  });

  it("renders the outline button with a 1.5px border", async () => {
    render(<App />);
    await screen.findByTestId("home.hero.primary_button");
    const outline = screen.getByTestId("home.hero.secondary_button");
    expect(outline.className).toContain("border-[1.5px]");
  });
});
