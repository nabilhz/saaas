import App from "@/App";
import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

// Cover for the accepted navigation / Home / i18n change:
//   * the desktop nav fits on one line from 1280px up with no cropped button
//     (13px links, 14px gap, 12px CTA labels, 10px/14px CTA padding);
//   * the French nav CTA reads VOIR LE CONTROL ROOM;
//   * the html lang attribute matches the selected language;
//   * the Home page ends after the final START WITH ONE BOUNDED USE CASE band
//     and keeps the footer;
//   * the hero button and the Home bottom buttons link to /pilot, and the
//     footer Control Room link goes to /control-room;
//   * the reworded French strings appear across the affected pages.
//
// This is component/integration coverage driven through the real App, not a
// deployed browser E2E run.

beforeEach(() => {
  window.localStorage.clear();
});

afterEach(() => {
  window.localStorage.clear();
  cleanup();
  document.body.innerHTML = "";
  document.body.style.pointerEvents = "";
});

function desktopNavLink(label: string) {
  return screen.getAllByRole("link", { name: label })[0];
}

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

describe("Desktop nav one-line spec", () => {
  it("uses 13px links, a 14px gap, and 12px CTA labels with 10px/14px padding", async () => {
    await renderApp();

    const linksGroup = desktopNavLink("HOME").parentElement as HTMLElement;
    const linksClasses = linksGroup.className.split(/\s+/);
    expect(linksClasses).toContain("lg:flex");
    expect(linksClasses).toContain("items-center");
    expect(linksClasses).toContain("gap-[14px]");

    for (const label of [
      "HOME",
      "WHY SAAAS",
      "PLATFORM",
      "GOVERNANCE",
      "SOLUTIONS",
      "COUNTRY NODES",
      "ABOUT",
    ]) {
      const link = desktopNavLink(label);
      expect(link.className).toContain("whitespace-nowrap");
      expect(link.className).toContain("text-[13px]");
    }

    for (const testId of ["nav.explore_control_room", "nav.request_pilot"]) {
      const cta = screen.getByTestId(testId);
      expect(cta.className).toContain("text-[12px]");
      expect(cta.className).toContain("px-[14px]");
      expect(cta.className).toContain("py-[10px]");
    }
  });
});

describe("French nav CTA label", () => {
  it("reads VOIR LE CONTROL ROOM in French", async () => {
    const user = userEvent.setup();
    await renderApp();

    await user.click(languageButton("fr"));

    expect(screen.getByTestId("nav.explore_control_room")).toHaveTextContent(
      /voir le control room/i,
    );
    expect(
      screen.getByTestId("nav.explore_control_room"),
    ).not.toHaveTextContent(/explorer le control room/i);
  });
});

describe("html lang attribute", () => {
  it("matches the selected language", async () => {
    const user = userEvent.setup();
    await renderApp();

    expect(document.documentElement.lang).toBe("en");

    await user.click(languageButton("fr"));
    expect(document.documentElement.lang).toBe("fr");

    await user.click(languageButton("en"));
    expect(document.documentElement.lang).toBe("en");
  });
});

describe("Home page truncation", () => {
  it("ends after the final START WITH ONE BOUNDED USE CASE band and keeps the footer", async () => {
    await renderApp();

    const finalCta = screen.getByRole("heading", {
      name: /start with one bounded use case/i,
    });
    const footer = screen.getByRole("contentinfo");

    // The final band precedes the footer, and the removed sections are gone.
    expect(
      finalCta.compareDocumentPosition(footer) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();

    expect(
      screen.queryByRole("heading", {
        name: /AI should answer to you — not the other way around/i,
      }),
    ).not.toBeInTheDocument();
    expect(screen.queryByText("Capabilities")).not.toBeInTheDocument();
    expect(screen.queryByText("Platform Highlights")).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("home.cta.primary_button"),
    ).not.toBeInTheDocument();
  });
});

describe("Pilot and Control Room link targets", () => {
  it("points the hero button and the Home bottom buttons at /pilot", async () => {
    await renderApp();

    expect(screen.getByTestId("home.hero.primary_button")).toHaveAttribute(
      "href",
      "/pilot",
    );
    expect(screen.getByTestId("home.final_cta.primary_button")).toHaveAttribute(
      "href",
      "/pilot",
    );
    expect(
      screen.getByTestId("home.final_cta.secondary_button"),
    ).toHaveAttribute("href", "/pilot");
  });

  it("points the footer Control Room link at /control-room", async () => {
    await renderApp();
    const footer = screen.getByRole("contentinfo");

    expect(
      within(footer).getByTestId("footer.link.platform.controlRoom"),
    ).toHaveAttribute("href", "/control-room");
  });
});

describe("Reworded French strings", () => {
  it("shows the corrected Solutions intro sector list in French", async () => {
    const user = userEvent.setup();
    await renderApp();

    await user.click(languageButton("fr"));
    await user.click(desktopNavLink("SOLUTIONS"));

    expect(
      await screen.findByText(
        /dans le secteur public, la finance, la santé, les télécommunications, l'éducation, l'agriculture et les entreprises/i,
      ),
    ).toBeInTheDocument();
  });

  it("shows the corrected Why SAAAS bottom CTA copy in French", async () => {
    const user = userEvent.setup();
    await renderApp();

    await user.click(languageButton("fr"));
    await user.click(desktopNavLink("POURQUOI SAAAS"));

    expect(
      await screen.findByRole("heading", {
        name: /commencez par un cas d'usage délimité/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /prouvez la qualité, la souveraineté, le coût, la gouvernance et les preuves avant de passer à l'échelle/i,
      ),
    ).toBeInTheDocument();
  });

  it("shows the replaced About Our Story 2nd and 3rd paragraphs in French", async () => {
    const user = userEvent.setup();
    await renderApp();

    await user.click(languageButton("fr"));
    await user.click(desktopNavLink("À PROPOS"));

    expect(
      await screen.findByText(
        /nous avons créé saaas pour offrir une autre voie/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /saaas se met en place comme un service d'ia souveraine géré, à commencer par un nœud national de référence au rwanda/i,
      ),
    ).toBeInTheDocument();
  });

  it("shows the reworded Home hero and sovereignty copy in French", async () => {
    const user = userEvent.setup();
    // The router is a module singleton, so its location persists across tests
    // in this file; reset it to the Home route before asserting Home copy.
    window.history.pushState({}, "", "/");
    await renderApp();

    await user.click(languageButton("fr"));

    // "savoir" -> "connaissances" in the hero subcopy.
    expect(
      screen.getByText(/de vos connaissances institutionnelles/i),
    ).toBeInTheDocument();
    // "action déterminante" -> "action à conséquences" in the sovereignty copy.
    expect(
      screen.getByText(/qui autorise une action à conséquences/i),
    ).toBeInTheDocument();
  });

  it("shows the reworded Platform and Governance copy in French", async () => {
    const user = userEvent.setup();
    await renderApp();

    await user.click(languageButton("fr"));

    await user.click(desktopNavLink("PLATEFORME"));
    expect(
      await screen.findByText(
        /gestion des connaissances, routage selon les politiques/i,
      ),
    ).toBeInTheDocument();

    await user.click(desktopNavLink("GOUVERNANCE"));
    expect(
      await screen.findByText(/la mesure fournit des preuves/i),
    ).toBeInTheDocument();
  });

  it("shows the reworded Country Nodes and Control Room copy in French", async () => {
    const user = userEvent.setup();
    await renderApp();

    await user.click(languageButton("fr"));

    await user.click(desktopNavLink("NŒUDS NATIONAUX"));
    expect(
      await screen.findByText(
        /adaptés à l'infrastructure, au droit, aux clients, aux connaissances/i,
      ),
    ).toBeInTheDocument();

    await user.click(screen.getByTestId("nav.explore_control_room"));
    expect(
      await screen.findByText(/démonstration interactive de gouvernance/i),
    ).toBeInTheDocument();
  });

  it("shows the reworded Pilot form and Footer copy in French", async () => {
    const user = userEvent.setup();
    await renderApp();

    await user.click(languageButton("fr"));

    await user.click(screen.getByTestId("nav.request_pilot"));
    expect(
      await screen.findByText(
        /prouvez la qualité, la souveraineté, le coût, la gouvernance et les preuves avant de passer à l'échelle/i,
      ),
    ).toBeInTheDocument();

    const footer = screen.getByRole("contentinfo");
    expect(
      within(footer).getByText(/SAAAS — IA souveraine\. Gouvernée\. Gérée\./),
    ).toBeInTheDocument();
  });
});
