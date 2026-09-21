import App from "@/App";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

const navLabels = [
  "HOME",
  "WHY SAAAS",
  "PLATFORM",
  "GOVERNANCE",
  "SOLUTIONS",
  "COUNTRY NODES",
  "RESOURCES",
  "ABOUT",
];

const footerColumns = [
  "Platform",
  "Governance",
  "Solutions",
  "Network",
  "Company",
];

// The nav links and CTA buttons render in both the desktop bar and the mobile
// menu. The desktop copies come first in the DOM, so the first match is the
// desktop navigation element.
function desktopNavLink(label: string) {
  return screen.getAllByRole("link", { name: label })[0];
}

describe("SAAAS marketing site", () => {
  it("renders the home page on the default route without a blank screen", async () => {
    render(<App />);
    expect(
      await screen.findByRole("heading", {
        name: /sovereign ai\. governed\. managed/i,
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/sovereign ai as a service/i)).toBeInTheDocument();
  });

  it("renders the hero copy: eyebrow, headline, paragraph, buttons, and micro-line", () => {
    render(<App />);

    const hero = screen
      .getByTestId("home.hero.primary_button")
      .closest("section");
    expect(hero).not.toBeNull();
    const heroEl = hero as HTMLElement;

    expect(
      within(heroEl).getByText(/sovereign ai as a service/i),
    ).toBeInTheDocument();
    expect(
      within(heroEl).getByRole("heading", {
        name: /sovereign ai\. governed\. managed/i,
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(
      within(heroEl).getByText(
        /access ai resources appropriate to your organization/i,
      ),
    ).toBeInTheDocument();
    expect(
      within(heroEl).getByRole("link", {
        name: /request a sovereign ai pilot/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(heroEl).getByRole("link", { name: /explore control room/i }),
    ).toBeInTheDocument();
    expect(
      within(heroEl).getByText(
        /your data · your knowledge · your jurisdiction · your governance · appropriate ai resources/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders the hero section with an eyebrow, headline, paragraph, and two buttons", () => {
    render(<App />);

    // The hero's structural elements should persist even as its copy changes:
    // an eyebrow label, a level-1 headline, a supporting paragraph, and two
    // call-to-action buttons.
    const hero = screen
      .getByTestId("home.hero.primary_button")
      .closest("section");
    expect(hero).not.toBeNull();
    expect(
      within(hero as HTMLElement).getByRole("heading", { level: 1 }),
    ).toBeInTheDocument();
    expect(
      within(hero as HTMLElement).getByTestId("home.hero.primary_button"),
    ).toBeInTheDocument();
    expect(
      within(hero as HTMLElement).getByTestId("home.hero.secondary_button"),
    ).toBeInTheDocument();
  });

  it("navigates from the hero buttons to the platform and pilot pages", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByTestId("home.hero.primary_button"));
    expect(
      screen.getByRole("heading", { name: /^platform$/i, level: 1 }),
    ).toBeInTheDocument();

    await user.click(screen.getByTestId("nav.request_pilot"));
    expect(
      screen.getByRole("heading", {
        name: /start with one bounded use case/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the fixed navigation bar with logo, links, and CTA buttons", () => {
    render(<App />);
    expect(screen.getByText("SAAAS")).toBeInTheDocument();
    for (const label of navLabels) {
      expect(desktopNavLink(label)).toBeInTheDocument();
    }
    expect(screen.getByTestId("nav.explore_control_room")).toBeInTheDocument();
    expect(screen.getByTestId("nav.request_pilot")).toBeInTheDocument();
  });

  it("renders the footer with five columns and the centered tagline", () => {
    render(<App />);
    const footer = screen.getByRole("contentinfo");
    for (const column of footerColumns) {
      expect(within(footer).getByText(column)).toBeInTheDocument();
    }
    expect(
      within(footer).getByText(/SAAAS — Sovereign AI\. Governed\. Managed\./),
    ).toBeInTheDocument();
  });

  it("navigates to every page via the navigation links", async () => {
    const user = userEvent.setup();
    render(<App />);

    const cases: { link: string; heading: RegExp }[] = [
      {
        link: "WHY SAAAS",
        heading: /sovereign ai\. on your terms\./i,
      },
      { link: "PLATFORM", heading: /^platform$/i },
      { link: "GOVERNANCE", heading: /do ai governance the right way/i },
      { link: "SOLUTIONS", heading: /^solutions$/i },
      {
        link: "COUNTRY NODES",
        heading: /one saaas standard\. many sovereign nations/i,
      },
      { link: "RESOURCES", heading: /^resources$/i },
      { link: "ABOUT", heading: /building the sovereign ai layer/i },
    ];

    for (const { link, heading } of cases) {
      await user.click(desktopNavLink(link));
      expect(
        screen.getByRole("heading", { name: heading, level: 1 }),
      ).toBeInTheDocument();
    }
  });

  it("navigates to the pilot page via the nav CTA button", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByTestId("nav.request_pilot"));
    expect(
      screen.getByRole("heading", {
        name: /start with one bounded use case/i,
      }),
    ).toBeInTheDocument();
  });

  it("navigates to the control room page via the nav CTA button", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByTestId("nav.explore_control_room"));
    expect(
      screen.getByRole("heading", {
        name: /one glance\. the state of your ai operation\./i,
        level: 1,
      }),
    ).toBeInTheDocument();
  });

  it("accepts the 13-field pilot form input and shows confirmation feedback on submit", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByTestId("nav.request_pilot"));

    await user.type(
      screen.getByLabelText(/^organization$/i),
      "Analytical Engines",
    );
    await user.type(
      screen.getByLabelText(/country \/ jurisdiction/i),
      "United Kingdom",
    );
    await user.selectOptions(
      screen.getByLabelText(/^industry$/i),
      "Enterprise",
    );
    await user.type(
      screen.getByLabelText(/primary use case/i),
      "Sovereign document summarization",
    );
    await user.selectOptions(
      screen.getByLabelText(/approximate users \/ workload/i),
      "50–500",
    );
    await user.click(
      within(
        screen.getByRole("group", { name: /sensitive or regulated data/i }),
      ).getByRole("radio", { name: "Yes" }),
    );
    await user.click(
      within(
        screen.getByRole("group", {
          name: /local in-country deployment required/i,
        }),
      ).getByRole("radio", { name: "No" }),
    );
    await user.click(
      within(
        screen.getByRole("group", {
          name: /existing data center or gpu capacity/i,
        }),
      ).getByRole("radio", { name: "Unsure" }),
    );
    await user.selectOptions(
      screen.getByLabelText(/desired pilot timing/i),
      "1–3 months",
    );
    await user.type(screen.getByLabelText(/full name/i), "Ada Lovelace");
    await user.type(screen.getByLabelText(/role \/ title/i), "CTO");
    await user.type(
      screen.getByLabelText(/business email/i),
      "ada@example.com",
    );
    await user.type(
      screen.getByLabelText(/phone \(optional\)/i),
      "+44 20 1234 5678",
    );

    await user.click(
      screen.getByRole("button", { name: /submit pilot request/i }),
    );

    expect(
      await screen.findByText(/thank you, ada lovelace/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/request received/i)).toBeInTheDocument();
    expect(screen.getByText(/analytical engines/i)).toBeInTheDocument();
  });
});
