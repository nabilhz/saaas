import App from "@/App";
import { LanguageProvider } from "@/i18n";
import { LANGUAGE_STORAGE_KEY } from "@/i18n";
import ControlRoomPage from "@/pages/ControlRoomPage";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

// Cover for the accepted EN | FR language-switcher change:
//   * a small EN | FR toggle sits in the navigation bar between the nav links
//     and the two CTA buttons;
//   * the active language renders in #00C8FF and the inactive in #CBD5E1;
//   * clicking a language switches the whole site instantly, with no reload;
//   * the choice persists in the browser and survives navigation and reload;
//   * English is the default on a first visit with no stored preference;
//   * navigation, footer, cookie banner, pilot form and Control Room all
//     translate, while brand/product names, technical terms, decision labels
//     and URLs stay in English.
//
// The suite renders the real App (router + LanguageProvider) and drives the
// toggle with user-level events. It is component/integration coverage, not a
// deployed browser E2E run.

const ACTIVE_COLOR = "rgb(0, 200, 255)";
const INACTIVE_COLOR = "rgb(203, 213, 225)";

beforeEach(() => {
  window.localStorage.clear();
});

afterEach(() => {
  window.localStorage.clear();
  cleanup();
  document.body.innerHTML = "";
  document.body.style.pointerEvents = "";
});

// The nav links and CTA buttons render in both the desktop bar and the mobile
// menu; the desktop copies come first in the DOM.
function desktopNavLink(label: string) {
  return screen.getAllByRole("link", { name: label })[0];
}

// The desktop switcher is the first of the two LanguageSwitcher fieldsets.
function desktopSwitcher() {
  return screen.getAllByTestId("nav.language_switcher")[0];
}

function languageButton(code: "en" | "fr") {
  return within(desktopSwitcher()).getByTestId(`nav.language.${code}`);
}

async function renderApp() {
  render(<App />);
  await screen.findByRole("heading", { level: 1 });
}

describe("Language switcher placement and styling", () => {
  it("renders the EN | FR toggle between the nav links and the CTA buttons", async () => {
    await renderApp();

    const switcher = desktopSwitcher();
    const linksGroup = desktopNavLink("HOME").parentElement as HTMLElement;
    const ctaGroup = screen.getByTestId("nav.explore_control_room")
      .parentElement as HTMLElement;

    // The switcher is a distinct sibling of both groups, not absorbed into
    // either, and sits between them in document order.
    expect(switcher).not.toBe(linksGroup);
    expect(switcher).not.toBe(ctaGroup);
    expect(switcher.parentElement).toBe(linksGroup.parentElement);
    expect(
      linksGroup.compareDocumentPosition(switcher) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      switcher.compareDocumentPosition(ctaGroup) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it("shows EN and FR and colors the active language #00C8FF and the inactive #CBD5E1", async () => {
    await renderApp();

    const en = languageButton("en");
    const fr = languageButton("fr");
    expect(en).toHaveTextContent("EN");
    expect(fr).toHaveTextContent("FR");

    // English is active by default.
    expect(en).toHaveStyle({ color: ACTIVE_COLOR });
    expect(fr).toHaveStyle({ color: INACTIVE_COLOR });
    expect(en).toHaveAttribute("aria-pressed", "true");
    expect(fr).toHaveAttribute("aria-pressed", "false");
  });

  it("swaps the active/inactive colors when FR is selected", async () => {
    const user = userEvent.setup();
    await renderApp();

    await user.click(languageButton("fr"));

    expect(languageButton("fr")).toHaveStyle({ color: ACTIVE_COLOR });
    expect(languageButton("en")).toHaveStyle({ color: INACTIVE_COLOR });
    expect(languageButton("fr")).toHaveAttribute("aria-pressed", "true");
    expect(languageButton("en")).toHaveAttribute("aria-pressed", "false");
  });
});

describe("Instant whole-site switching", () => {
  it("defaults to English on a first visit with no stored preference", async () => {
    await renderApp();

    expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBeNull();
    expect(desktopNavLink("HOME")).toHaveTextContent("HOME");
    expect(
      screen.getByRole("heading", {
        name: /sovereign ai\. governed\. managed/i,
        level: 1,
      }),
    ).toBeInTheDocument();
  });

  it("switches the current page to French on click without a reload", async () => {
    const user = userEvent.setup();
    await renderApp();

    await user.click(languageButton("fr"));

    // Navigation links, CTA buttons and the hero copy all switch to French.
    expect(desktopNavLink("ACCUEIL")).toBeInTheDocument();
    expect(screen.getByTestId("nav.explore_control_room")).toHaveTextContent(
      /voir le control room/i,
    );
    expect(screen.getByTestId("nav.request_pilot")).toHaveTextContent(
      /demander un pilote/i,
    );
    expect(
      screen.getByRole("heading", {
        name: /ia souveraine\. gouvernée\. gérée\./i,
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/accédez aux ressources d'ia adaptées/i),
    ).toBeInTheDocument();
  });

  it("switches back to English on click", async () => {
    const user = userEvent.setup();
    await renderApp();

    await user.click(languageButton("fr"));
    expect(desktopNavLink("ACCUEIL")).toBeInTheDocument();

    await user.click(languageButton("en"));
    expect(desktopNavLink("HOME")).toBeInTheDocument();
    expect(
      screen.getByText(/access ai resources appropriate to your organization/i),
    ).toBeInTheDocument();
  });

  it("translates the footer columns and tagline", async () => {
    const user = userEvent.setup();
    await renderApp();

    await user.click(languageButton("fr"));

    const footer = screen.getByRole("contentinfo");
    expect(within(footer).getByText("Plateforme")).toBeInTheDocument();
    expect(within(footer).getByText("Gouvernance")).toBeInTheDocument();
    expect(within(footer).getByText("Réseau")).toBeInTheDocument();
    // The tagline is translated in the French version.
    expect(
      within(footer).getByText(/SAAAS — IA souveraine\. Gouvernée\. Gérée\./),
    ).toBeInTheDocument();
  });

  it("translates the cookie consent banner while keeping its external URL", async () => {
    const user = userEvent.setup();
    await renderApp();

    await user.click(languageButton("fr"));

    const banner = screen.getByRole("region", {
      name: /consentement aux cookies/i,
    });
    expect(
      within(banner).getByText(/ce site utilise des cookies/i),
    ).toBeInTheDocument();
    expect(
      within(banner).getByRole("button", { name: /^accepter$/i }),
    ).toBeInTheDocument();
    expect(
      within(banner).getByRole("link", { name: /en savoir plus/i }),
    ).toHaveAttribute("href", "https://www.tmu.ai/privacy.php");
  });
});

describe("Persistence across navigation and reload", () => {
  it("keeps the chosen language when navigating to another page", async () => {
    const user = userEvent.setup();
    await renderApp();

    await user.click(languageButton("fr"));
    await user.click(desktopNavLink("PLATEFORME"));

    expect(
      screen.getByRole("heading", {
        name: /^plateforme$/i,
        level: 1,
      }),
    ).toBeInTheDocument();
    // The nav stays French after the route change.
    expect(desktopNavLink("ACCUEIL")).toBeInTheDocument();
  });

  it("stores the choice and restores it on a fresh mount", async () => {
    const user = userEvent.setup();
    await renderApp();

    await user.click(languageButton("fr"));
    expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("fr");

    // A fresh mount (as after a reload) reads the stored preference.
    cleanup();
    render(<App />);
    await screen.findByRole("heading", { level: 1 });

    expect(desktopNavLink("ACCUEIL")).toBeInTheDocument();
    expect(languageButton("fr")).toHaveStyle({ color: ACTIVE_COLOR });
  });

  it("ignores an invalid stored value and falls back to English", async () => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
    await renderApp();

    expect(desktopNavLink("HOME")).toBeInTheDocument();
    expect(languageButton("en")).toHaveStyle({ color: ACTIVE_COLOR });
  });
});

describe("Pilot form translation", () => {
  it("translates the pilot form labels, options and process line", async () => {
    const user = userEvent.setup();
    await renderApp();

    await user.click(languageButton("fr"));
    await user.click(screen.getByTestId("nav.request_pilot"));

    expect(
      await screen.findByRole("heading", {
        name: /commencez par un cas d'usage délimité/i,
        level: 1,
      }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/^organisation$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/pays \/ juridiction/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^secteur$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/cas d'usage principal/i)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/utilisateurs \/ charge de travail approximatifs/i),
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(/calendrier souhaité pour le pilote/i),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/nom complet/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail professionnel/i)).toBeInTheDocument();

    // Dropdown options and radio options are translated.
    expect(
      screen.getByRole("option", { name: "Secteur public" }),
    ).toBeInTheDocument();
    expect(
      within(
        screen.getByRole("group", {
          name: /données sensibles ou réglementées/i,
        }),
      ).getByRole("radio", { name: "Oui" }),
    ).toBeInTheDocument();

    // The process line is translated.
    expect(
      screen.getByText(
        /après l'envoi : découverte → évaluation des exigences/i,
      ),
    ).toBeInTheDocument();
  });
});

describe("Control Room translation", () => {
  it("translates scenario buttons, labels and descriptive text while keeping X/Y/Z and DriftShield in English", async () => {
    const user = userEvent.setup();
    render(
      <LanguageProvider>
        <ControlRoomPage />
      </LanguageProvider>,
    );

    // Default English scenario labels.
    expect(
      screen.getByRole("button", { name: "NORMAL OPERATION" }),
    ).toBeInTheDocument();

    // Switch to French through the provider's own switcher is not present on
    // this page, so drive the language via the App-level toggle instead.
    cleanup();
    render(<App />);
    await screen.findByRole("heading", { level: 1 });
    await user.click(languageButton("fr"));
    await user.click(screen.getByTestId("nav.explore_control_room"));

    expect(
      await screen.findByRole("heading", {
        name: /un coup d'œil\. l'état de votre exploitation d'ia\./i,
        level: 1,
      }),
    ).toBeInTheDocument();

    // Scenario buttons are translated.
    expect(
      screen.getByRole("button", { name: "FONCTIONNEMENT NORMAL" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "DÉRIVE COMPORTEMENTALE" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "RUPTURE DE GENÈSE" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "RUPTURE D'HÉRITAGE" }),
    ).toBeInTheDocument();

    // Descriptive text is translated.
    expect(
      screen.getByText(/démonstration interactive de gouvernance/i),
    ).toBeInTheDocument();

    // X/Y/Z axes and DriftShield stay in English.
    const rows = screen.getAllByTestId(/^control_room\.timeline\.row\.\d+$/);
    const axisValues = rows.map((row) => row.children[1].textContent?.trim());
    expect(axisValues).toEqual(["X", "Y", "X", "Z", "Y"]);
    expect(screen.getByText(/HIC\/DriftShield/)).toBeInTheDocument();

    // Decision labels stay in English.
    expect(within(rows[0]).getByText("ALLOW")).toBeInTheDocument();
    expect(within(rows[2]).getByText("ESCALATE")).toBeInTheDocument();
  });
});
