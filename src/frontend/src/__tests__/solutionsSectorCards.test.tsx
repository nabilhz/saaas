import App from "@/App";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

// Characterization of the Solutions page sector cards' content. The accepted
// change removes the Energy and Defense cards, adds Telecommunications,
// Education, and Agriculture, and renames Enterprise to "Enterprise & SMEs",
// leaving exactly seven sector cards. The cards that survive (Government,
// Financial Services, Healthcare, and the Enterprise content) are adjacent
// working behavior that must remain unchanged. The icon implementation and size
// are intentionally not asserted here.

async function navigateToSolutions() {
  const user = userEvent.setup();
  render(<App />);
  const navLink = await screen.findAllByRole("link", { name: "SOLUTIONS" });
  await user.click(navLink[0]);
  return user;
}

function mainContent(): HTMLElement {
  return screen.getByRole("main");
}

describe("Solutions page sector cards content", () => {
  it("renders exactly seven sector cards with their capability lists", async () => {
    await navigateToSolutions();
    const main = mainContent();

    const expected: Record<string, string[]> = {
      "Sovereign AI for Government": [
        "Citizen services and public-sector automation",
        "National data residency and sovereignty",
        "Parliamentary and regulatory audit trails",
        "Cross-agency secure data sharing",
      ],
      "Sovereign AI for Finance": [
        "Regulatory-grade model governance",
        "Fraud detection and risk analytics",
        "In-region data residency for compliance",
        "Explainable, auditable decisioning",
      ],
      "Sovereign AI for Healthcare": [
        "Privacy-preserving clinical analytics",
        "Protected health data residency",
        "Diagnostic and operational intelligence",
        "Role-based clinician access control",
      ],
      "Sovereign AI for Telecommunications": [
        "Customer service automation",
        "Network operations intelligence",
        "Governed data handling",
        "Operational workflow optimization",
      ],
      "Sovereign AI for Education": [
        "Institutional knowledge management",
        "Personalized learning assistance",
        "Administrative workflow automation",
        "Data privacy and student protection",
      ],
      "Sovereign AI for Agriculture": [
        "Crop and yield intelligence",
        "Local language support",
        "Field and supply chain optimization",
        "Sovereign agricultural data management",
      ],
      "Sovereign AI for Enterprise & SMEs": [
        "Private model deployment and versioning",
        "Enterprise data governance",
        "Centralized policy and billing",
        "Self-hosted or hybrid deployment",
      ],
    };

    const cards = within(main).getAllByTestId(/^solutions\.card\./);
    expect(cards).toHaveLength(7);

    for (const [title, capabilities] of Object.entries(expected)) {
      const card = within(main)
        .getByRole("heading", { name: title })
        .closest("[data-ocid^='solutions.card.']");
      expect(card).not.toBeNull();
      for (const capability of capabilities) {
        expect(
          within(card as HTMLElement).getByText(capability),
        ).toBeInTheDocument();
      }
    }
  });

  it("labels each sector card with its sector accent label", async () => {
    await navigateToSolutions();
    const main = mainContent();

    const sectors = [
      "Government",
      "Financial Services",
      "Healthcare",
      "Telecommunications",
      "Education",
      "Agriculture",
      "Enterprise & SMEs",
    ];
    for (const sector of sectors) {
      expect(within(main).getByText(sector)).toBeInTheDocument();
    }
  });

  it("does not render the removed Energy or Defense cards", async () => {
    await navigateToSolutions();
    const main = mainContent();

    expect(
      within(main).queryByRole("heading", { name: "Sovereign AI for Energy" }),
    ).not.toBeInTheDocument();
    expect(
      within(main).queryByRole("heading", { name: "Sovereign AI for Defense" }),
    ).not.toBeInTheDocument();
    expect(within(main).queryByText("Energy")).not.toBeInTheDocument();
    expect(within(main).queryByText("Defense")).not.toBeInTheDocument();
  });
});
