import App from "@/App";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

// Coverage of the rebuilt Country Nodes and Pilot pages. Both pages' content
// was intentionally replaced, so these tests assert the new accepted content:
// the Country Nodes hero, Rwanda reference node section, future nodes grid and
// CTA band, and the Pilot hero plus the 13-field request form with its
// client-side success state. The structural contract (each page reachable from
// the navigation and rendering at least one level-1 heading) is also preserved.
async function navigateTo(navLabel: string) {
  const user = userEvent.setup();
  render(<App />);
  const navLink = await screen.findAllByRole("link", { name: navLabel });
  await user.click(navLink[0]);
  return user;
}

async function navigateToPilot() {
  const user = userEvent.setup();
  render(<App />);
  await user.click(await screen.findByTestId("nav.request_pilot"));
  return user;
}

describe("Country Nodes page", () => {
  it("is reachable from the navigation and renders a level-1 heading", async () => {
    await navigateTo("COUNTRY NODES");
    expect(screen.getAllByRole("heading", { level: 1 }).length).toBeGreaterThan(
      0,
    );
  });

  it("renders the new hero with the sovereign nations headline", async () => {
    await navigateTo("COUNTRY NODES");
    expect(
      screen.getByRole("heading", {
        name: /one saaas standard\. many sovereign nations/i,
        level: 1,
      }),
    ).toBeInTheDocument();
  });

  it("renders the Rwanda reference node section", async () => {
    await navigateTo("COUNTRY NODES");
    expect(
      screen.getByRole("heading", { name: /^rwanda$/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/reference node 01/i).length).toBeGreaterThan(0);
    expect(
      screen.getByText(/planning \/ implementation baseline/i),
    ).toBeInTheDocument();
  });

  it("renders the future nodes grid", async () => {
    await navigateTo("COUNTRY NODES");
    expect(
      screen.getByRole("heading", { name: /future country nodes/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/^prospective$/i).length).toBeGreaterThan(0);
    expect(
      screen.getAllByText(/details to be announced/i).length,
    ).toBeGreaterThan(0);
  });

  it("renders the CTA band linking to the pilot page", async () => {
    const user = await navigateTo("COUNTRY NODES");
    expect(
      screen.getByRole("heading", { name: /interested in a country node/i }),
    ).toBeInTheDocument();
    await user.click(screen.getByRole("link", { name: /contact us/i }));
    expect(
      screen.getByRole("heading", {
        name: /start with one bounded use case/i,
      }),
    ).toBeInTheDocument();
  });
});

describe("Pilot page", () => {
  it("is reachable from the navigation and renders a level-1 heading", async () => {
    await navigateToPilot();
    expect(screen.getAllByRole("heading", { level: 1 }).length).toBeGreaterThan(
      0,
    );
  });

  it("renders the new hero with the bounded use case headline", async () => {
    await navigateToPilot();
    expect(
      screen.getByRole("heading", {
        name: /start with one bounded use case/i,
        level: 1,
      }),
    ).toBeInTheDocument();
  });

  it("renders the full 13-field pilot request form", async () => {
    await navigateToPilot();
    expect(screen.getByLabelText(/^organization$/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/country \/ jurisdiction/i),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/^industry$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/primary use case/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/approximate users \/ workload/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("group", { name: /sensitive or regulated data/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("group", {
        name: /local in-country deployment required/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("group", {
        name: /existing data center or gpu capacity/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/desired pilot timing/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/role \/ title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/business email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone \(optional\)/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /submit pilot request/i }),
    ).toBeInTheDocument();
  });

  it("shows the client-side success state after submitting the form", async () => {
    const user = await navigateToPilot();

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
