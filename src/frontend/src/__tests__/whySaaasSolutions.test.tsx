import App from "@/App";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

// Cover for the rewritten Why SAAAS page (new hero, six benefit cards, five
// sovereignty dimensions, and a closing CTA) and the Solutions page sector
// cards. The Why SAAAS content was intentionally rewritten and the sector card
// icons changed from emoji to 28x28px SVG icons, so these tests assert the
// accepted new behavior while keeping the Solutions sector-card copy intact.

async function navigateTo(navLabel: string) {
  const user = userEvent.setup();
  render(<App />);
  const navLink = await screen.findAllByRole("link", { name: navLabel });
  await user.click(navLink[0]);
  return user;
}

// The page content lives inside <main>; the footer repeats some labels (e.g.
// "Governance") as column headings, so scope content queries to the main area.
function mainContent(): HTMLElement {
  return screen.getByRole("main");
}

describe("Why SAAAS page content contract", () => {
  it("is reachable from the navigation and renders the new hero heading", async () => {
    await navigateTo("WHY SAAAS");
    expect(
      screen.getByRole("heading", {
        name: /sovereign ai\. on your terms\./i,
        level: 1,
      }),
    ).toBeInTheDocument();
  });

  it("renders the six benefit cards with their numbered labels and titles", async () => {
    await navigateTo("WHY SAAAS");
    const main = mainContent();

    const cards = within(main).getAllByTestId("why.benefit.card");
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

    // Each benefit card carries its numbered label (01..06) and a non-empty
    // description.
    for (const card of cards) {
      expect(within(card).getByText(/^0[1-6]$/)).toBeInTheDocument();
      expect(
        within(card).getByRole("paragraph").textContent?.length,
      ).toBeGreaterThan(0);
    }
  });

  it("renders the five sovereignty dimensions with name and question", async () => {
    await navigateTo("WHY SAAAS");
    const main = mainContent();
    expect(within(main).getByText("Sovereign AI Defined")).toBeInTheDocument();

    const items = within(main).getAllByTestId("why.dimension.item");
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

    for (const item of items) {
      expect(within(item).getByText(/^0[1-5]$/)).toBeInTheDocument();
      expect(
        within(item).getByRole("paragraph").textContent?.length,
      ).toBeGreaterThan(0);
    }
  });

  it("renders the closing CTA with its platform and pilot links", async () => {
    await navigateTo("WHY SAAAS");
    const main = mainContent();
    expect(
      within(main).getByRole("heading", { name: /ready to own your ai\?/i }),
    ).toBeInTheDocument();

    const platformLink = within(main).getByRole("link", {
      name: /explore the platform/i,
    });
    expect(platformLink).toHaveAttribute("href", "/platform");
    expect(
      within(main).getByRole("link", { name: /request a pilot/i }),
    ).toHaveAttribute("href", "/pilot");
  });
});

describe("Solutions page content contract", () => {
  it("is reachable from the navigation and renders a level-1 heading", async () => {
    await navigateTo("SOLUTIONS");
    expect(
      screen.getByRole("heading", { name: /^solutions$/i, level: 1 }),
    ).toBeInTheDocument();
  });

  it("renders the seven sector solution cards with their sector labels", async () => {
    await navigateTo("SOLUTIONS");
    const main = mainContent();

    const titles = [
      "Sovereign AI for Government",
      "Sovereign AI for Finance",
      "Sovereign AI for Healthcare",
      "Sovereign AI for Telecommunications",
      "Sovereign AI for Education",
      "Sovereign AI for Agriculture",
      "Sovereign AI for Enterprise & SMEs",
    ];
    for (const title of titles) {
      expect(
        within(main).getByRole("heading", { name: title }),
      ).toBeInTheDocument();
    }
  });

  it("renders the closing CTA with its pilot and platform links", async () => {
    await navigateTo("SOLUTIONS");
    const main = mainContent();
    expect(
      within(main).getByRole("heading", {
        name: /deploy sovereign ai in your sector/i,
      }),
    ).toBeInTheDocument();

    expect(
      within(main).getByTestId("solutions.cta.request_pilot"),
    ).toHaveAttribute("href", "/pilot");
    expect(
      within(main).getByTestId("solutions.cta.explore_platform"),
    ).toHaveAttribute("href", "/platform");
  });

  it("renders the full-width banner below the hero", async () => {
    await navigateTo("SOLUTIONS");
    const banner = screen.getByTestId("solutions.banner");
    expect(banner).toBeInTheDocument();
    expect(banner.getAttribute("src")).toContain("solutions-banner");
  });

  it("renders a 28x28px cyan SVG icon above each sector card", async () => {
    await navigateTo("SOLUTIONS");
    const main = mainContent();
    const cards = within(main).getAllByTestId(/^solutions\.card\./);
    expect(cards).toHaveLength(7);

    for (const card of cards) {
      // The sector icon is a 28x28px SVG (h-7 w-7) in electric cyan
      // (text-primary).
      const icon = card.querySelector("svg.h-7.w-7.text-primary");
      expect(icon).not.toBeNull();
    }
  });
});
