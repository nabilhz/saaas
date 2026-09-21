import ControlRoomPage from "@/pages/ControlRoomPage";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

// Cover for the new self-contained Control Room page at /control-room: an
// interactive governance demonstration with a scenario selector that updates
// the status bar, gauges, and decision badge. NORMAL OPERATION is the default
// on load.
function renderControlRoom() {
  const user = userEvent.setup();
  render(<ControlRoomPage />);
  return user;
}

function gaugeValue(label: string) {
  const gauge = screen
    .getAllByTestId("control_room.gauge")
    .find((el) => within(el).queryByText(label) !== null);
  expect(gauge).toBeDefined();
  return within(gauge as HTMLElement).getByText(/\d+%/);
}

describe("Control Room page", () => {
  it("renders without a blank screen and shows the page title", () => {
    renderControlRoom();
    expect(
      screen.getByRole("heading", {
        name: /one glance\. the state of your ai operation\./i,
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/interactive governance demonstration/i),
    ).toBeInTheDocument();
  });

  it("defaults to NORMAL OPERATION with gauges 0.12/0.97/0.94, ALLOW badge, and OPERATIONAL status", () => {
    renderControlRoom();

    const normalButton = screen.getByTestId("control_room.scenario.normal");
    expect(normalButton).toHaveAttribute("aria-pressed", "true");

    expect(gaugeValue("BEHAVIORAL DIVERGENCE")).toHaveTextContent("12%");
    expect(gaugeValue("GENESIS CONTINUITY")).toHaveTextContent("97%");
    expect(gaugeValue("INHERITANCE CONTINUITY")).toHaveTextContent("94%");

    expect(
      within(screen.getByTestId("control_room.decision_badge")).getByText(
        /allow/i,
      ),
    ).toBeInTheDocument();
    expect(
      within(screen.getByTestId("control_room.stat.currentStatus")).getByText(
        /operational/i,
      ),
    ).toBeInTheDocument();
  });

  it("selecting BEHAVIORAL DRIFT updates gauge X to 0.78 and the badge to ESCALATE, while the status bar stays static", async () => {
    const user = renderControlRoom();

    await user.click(screen.getByTestId("control_room.scenario.drift"));

    expect(gaugeValue("BEHAVIORAL DIVERGENCE")).toHaveTextContent("78%");
    expect(
      within(screen.getByTestId("control_room.decision_badge")).getByText(
        /escalate/i,
      ),
    ).toBeInTheDocument();
    // The status bar is static per the accepted spec: it always shows the
    // OPERATIONAL / 2 WARNINGS values regardless of the selected scenario.
    expect(
      within(screen.getByTestId("control_room.stat.currentStatus")).getByText(
        /operational/i,
      ),
    ).toBeInTheDocument();
    expect(
      within(
        screen.getByTestId("control_room.stat.governanceEvents"),
      ).getByText(/2 warnings/i),
    ).toBeInTheDocument();
  });

  it("selecting GENESIS BREAK updates gauge Y to 0.31 and the badge to HUMAN REVIEW, while the status bar stays static", async () => {
    const user = renderControlRoom();

    await user.click(screen.getByTestId("control_room.scenario.genesis"));

    expect(gaugeValue("GENESIS CONTINUITY")).toHaveTextContent("31%");
    expect(
      within(screen.getByTestId("control_room.decision_badge")).getByText(
        /human review/i,
      ),
    ).toBeInTheDocument();
    // The status bar is static per the accepted spec: it always shows
    // OPERATIONAL regardless of the selected scenario.
    expect(
      within(screen.getByTestId("control_room.stat.currentStatus")).getByText(
        /operational/i,
      ),
    ).toBeInTheDocument();
  });

  it("selecting INHERITANCE BREAK updates gauge Z to 0.22 and the badge to BLOCK, while the status bar stays static", async () => {
    const user = renderControlRoom();

    await user.click(screen.getByTestId("control_room.scenario.inheritance"));

    expect(gaugeValue("INHERITANCE CONTINUITY")).toHaveTextContent("22%");
    expect(
      within(screen.getByTestId("control_room.decision_badge")).getByText(
        /block/i,
      ),
    ).toBeInTheDocument();
    // The status bar is static per the accepted spec: it always shows
    // OPERATIONAL regardless of the selected scenario.
    expect(
      within(screen.getByTestId("control_room.stat.currentStatus")).getByText(
        /operational/i,
      ),
    ).toBeInTheDocument();
  });

  it("uses the navy card background #111F35 for inactive scenario buttons while keeping text and border colors unchanged", () => {
    renderControlRoom();

    // The background-palette change converted the scenario button's inactive
    // background from the old near-black #111827 to the navy card tone #111F35.
    // The button's text and border colors are explicitly out of scope and must
    // stay exactly as they were.
    const inactive = screen.getByTestId("control_room.scenario.drift");
    expect(inactive).toHaveStyle({ backgroundColor: "#111F35" });
    // Text and border colors are unchanged by the background edit.
    expect(inactive).toHaveStyle({ color: "#A8B4C8" });
    expect(inactive).toHaveStyle({ border: "1px solid #1E293B" });

    // The active button keeps its cyan treatment (background, text, border).
    const active = screen.getByTestId("control_room.scenario.normal");
    expect(active).toHaveStyle({ backgroundColor: "#00C8FF" });
    expect(active).toHaveStyle({ color: "#07090F" });
    expect(active).toHaveStyle({ border: "1px solid #00C8FF" });
  });

  it("renders the event timeline table with five rows and the expected columns", () => {
    renderControlRoom();

    const table = screen.getByRole("table");
    expect(
      within(table).getByRole("columnheader", { name: /timestamp/i }),
    ).toBeInTheDocument();
    expect(
      within(table).getByRole("columnheader", { name: /axis/i }),
    ).toBeInTheDocument();
    expect(
      within(table).getByRole("columnheader", { name: /event/i }),
    ).toBeInTheDocument();
    expect(
      within(table).getByRole("columnheader", { name: /model/i }),
    ).toBeInTheDocument();
    expect(
      within(table).getByRole("columnheader", { name: /decision/i }),
    ).toBeInTheDocument();

    const rows = screen.getAllByTestId(/^control_room\.timeline\.row\.\d+$/);
    expect(rows).toHaveLength(5);
    expect(within(rows[0]).getByText("14:32:01")).toBeInTheDocument();
    expect(within(rows[0]).getByText("Stable observation")).toBeInTheDocument();
    expect(within(rows[0]).getByText("ALLOW")).toBeInTheDocument();
    expect(within(rows[2]).getByText("Drift warning")).toBeInTheDocument();
    expect(within(rows[2]).getByText("ESCALATE")).toBeInTheDocument();
  });
});
