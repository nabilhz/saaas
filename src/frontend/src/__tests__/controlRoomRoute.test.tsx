import App from "@/App";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

// Characterization of the /control-room route: it must render the Control Room
// page without a blank screen. The route and its page content are not changing
// in this request; only the buttons that link to it are being retargeted.

describe("Control Room route", () => {
  it("renders the Control Room page at /control-room without a blank screen", async () => {
    window.history.pushState({}, "", "/control-room");
    render(<App />);
    expect(
      await screen.findByRole("heading", {
        name: /one glance\. the state of your ai operation\./i,
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("control_room.disclaimer_banner"),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("control_room.scenario_selector"),
    ).toBeInTheDocument();
  });
});
