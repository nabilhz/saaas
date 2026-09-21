import App from "@/App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

// Cover for the five 'Explore Control Room' call-to-action buttons across the
// site. Their destination is now /control-room (retargeted from /platform and
// /pilot). This suite protects the accepted behavior: every button stays
// present, is a real link, and points at /control-room.

describe("Explore Control Room buttons", () => {
  it("renders the desktop navbar CTA as a link to /control-room", async () => {
    render(<App />);
    const link = await screen.findByTestId("nav.explore_control_room");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/control-room");
    expect(link).toHaveTextContent(/explore control room/i);
  });

  it("renders the mobile navbar CTA as a link to /control-room once the menu is open", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByTestId("nav.menu_toggle"));
    const link = screen.getByTestId("nav.mobile.explore_control_room");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/control-room");
    expect(link).toHaveTextContent(/explore control room/i);
  });

  it("renders the home hero secondary button as an Explore Control Room link to /control-room", () => {
    render(<App />);
    const link = screen.getByTestId("home.hero.secondary_button");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/control-room");
    expect(link).toHaveTextContent(/explore control room/i);
  });

  it("renders the home CTA primary button as an Explore Control Room link to /control-room", async () => {
    render(<App />);
    const link = await screen.findByTestId("home.cta.primary_button");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/control-room");
    expect(link).toHaveTextContent(/explore control room/i);
  });

  it("renders the governance CTA primary button as an Explore Control Room link to /control-room", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getAllByRole("link", { name: "GOVERNANCE" })[0]);
    const link = await screen.findByTestId("governance.cta.primary_button");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/control-room");
    expect(link).toHaveTextContent(/explore control room/i);
  });
});
