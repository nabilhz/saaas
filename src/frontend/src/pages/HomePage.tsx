import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { useLanguage } from "@/i18n";
import type { TranslationKey } from "@/i18n";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Leaf,
  RadioTower,
} from "lucide-react";

const flowSteps: TranslationKey[] = [
  "home.flow.step1",
  "home.flow.step2",
  "home.flow.step3",
  "home.flow.step4",
  "home.flow.step5",
  "home.flow.step6",
  "home.flow.step7",
  "home.flow.step8",
  "home.flow.step9",
];

const whySaaasBenefits: {
  number: string;
  titleKey: TranslationKey;
  copyKey: TranslationKey;
}[] = [
  { number: "01", titleKey: "home.why.1.title", copyKey: "home.why.1.copy" },
  { number: "02", titleKey: "home.why.2.title", copyKey: "home.why.2.copy" },
  { number: "03", titleKey: "home.why.3.title", copyKey: "home.why.3.copy" },
  { number: "04", titleKey: "home.why.4.title", copyKey: "home.why.4.copy" },
  { number: "05", titleKey: "home.why.5.title", copyKey: "home.why.5.copy" },
  { number: "06", titleKey: "home.why.6.title", copyKey: "home.why.6.copy" },
];

const governanceAxes: {
  axis: string;
  titleKey: TranslationKey;
  copyKey: TranslationKey;
}[] = [
  { axis: "X", titleKey: "home.axis.x.title", copyKey: "home.axis.x.copy" },
  { axis: "Y", titleKey: "home.axis.y.title", copyKey: "home.axis.y.copy" },
  { axis: "Z", titleKey: "home.axis.z.title", copyKey: "home.axis.z.copy" },
];

const sovereigntyDimensions: {
  number: string;
  nameKey: TranslationKey;
  questionKey: TranslationKey;
}[] = [
  {
    number: "01",
    nameKey: "home.sovereignty.1.name",
    questionKey: "home.sovereignty.1.question",
  },
  {
    number: "02",
    nameKey: "home.sovereignty.2.name",
    questionKey: "home.sovereignty.2.question",
  },
  {
    number: "03",
    nameKey: "home.sovereignty.3.name",
    questionKey: "home.sovereignty.3.question",
  },
  {
    number: "04",
    nameKey: "home.sovereignty.4.name",
    questionKey: "home.sovereignty.4.question",
  },
  {
    number: "05",
    nameKey: "home.sovereignty.5.name",
    questionKey: "home.sovereignty.5.question",
  },
];

const sectorCards: {
  icon: typeof Landmark;
  nameKey: TranslationKey;
  copyKey: TranslationKey;
}[] = [
  {
    icon: Landmark,
    nameKey: "home.sector.government",
    copyKey: "home.sector.government.copy",
  },
  {
    icon: BarChart3,
    nameKey: "home.sector.finance",
    copyKey: "home.sector.finance.copy",
  },
  {
    icon: HeartPulse,
    nameKey: "home.sector.healthcare",
    copyKey: "home.sector.healthcare.copy",
  },
  {
    icon: RadioTower,
    nameKey: "home.sector.telecom",
    copyKey: "home.sector.telecom.copy",
  },
  {
    icon: GraduationCap,
    nameKey: "home.sector.education",
    copyKey: "home.sector.education.copy",
  },
  {
    icon: Leaf,
    nameKey: "home.sector.agriculture",
    copyKey: "home.sector.agriculture.copy",
  },
  {
    icon: Building2,
    nameKey: "home.sector.enterprise",
    copyKey: "home.sector.enterprise.copy",
  },
];

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(26,58,107,0.25), transparent 70%)",
          }}
        />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
          <Eyebrow>{t("home.hero.eyebrow")}</Eyebrow>
          <h1 className="display-headline mt-6 text-4xl tracking-[0.05em] text-foreground md:text-6xl">
            {t("home.hero.title1")}
            <br />
            {t("home.hero.title2")}
            <br />
            {t("home.hero.title3")}
          </h1>
          <p className="subheadline mx-auto mt-8 max-w-[680px]">
            {t("home.hero.subcopy")}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-4">
            <Button
              asChild
              size="lg"
              className="h-auto px-7 py-3.5 font-bold"
              data-ocid="home.hero.primary_button"
            >
              <Link to="/pilot">
                {t("home.hero.primaryButton")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[1.5px]"
              data-ocid="home.hero.secondary_button"
            >
              <Link to="/control-room">{t("common.exploreControlRoom")}</Link>
            </Button>
          </div>
          <p className="mt-6 text-xs tracking-[0.08em] text-[#5A6A80]">
            {t("home.hero.microline")}
          </p>
        </div>
      </section>

      {/* HOW SAAAS WORKS */}
      <section className="bg-muted py-[60px]">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>{t("home.flow.eyebrow")}</Eyebrow>
          </div>

          <div className="mt-14 flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:justify-center md:gap-0">
            {flowSteps.map((stepKey, i) => (
              <div
                key={stepKey}
                className="flex flex-col items-center md:flex-row"
              >
                <div
                  className="rounded-[4px] border border-border bg-card px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.06em] text-foreground"
                  data-ocid="home.flow.step"
                >
                  {t(stepKey)}
                </div>
                {i < flowSteps.length - 1 && (
                  <ArrowRight
                    className="mx-3 my-2 h-4 w-4 rotate-90 text-primary md:rotate-0"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-[600px] text-center text-base italic leading-[1.75] text-card-foreground">
            {t("home.flow.caption")}
          </p>
        </div>
      </section>

      {/* WHY SAAAS */}
      <section className="relative overflow-hidden bg-background py-[60px]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(/assets/generated/why-saaas-network.dim_1600x900.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.06,
          }}
          aria-hidden="true"
        />
        <div className="relative container">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>{t("home.why.eyebrow")}</Eyebrow>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whySaaasBenefits.map((benefit) => (
              <div
                key={benefit.number}
                className="card-accent-hover rounded-lg border border-border bg-card p-7"
                data-ocid="home.why.card"
              >
                <span className="font-display text-sm font-bold text-primary">
                  {benefit.number}
                </span>
                <h3 className="mt-3 text-lg font-bold uppercase tracking-[0.04em] text-foreground">
                  {t(benefit.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-[1.7] text-card-foreground">
                  {t(benefit.copyKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OBLIQUE AI GOVERNANCE */}
      <section className="bg-muted py-[60px]">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="display-headline text-3xl font-extrabold uppercase tracking-[0.05em] text-foreground md:text-5xl">
                {t("home.governance.title")}
              </h2>
              <p className="mt-6 max-w-xl text-base leading-[1.75] text-card-foreground">
                {t("home.governance.body")}
              </p>
              <p className="mt-6 max-w-xl text-base font-semibold text-primary">
                {t("home.governance.emphasis")}
              </p>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/governance-control-room.dim_1200x900.png"
                alt={t("home.governance.imageAlt")}
                className="w-full rounded-[10px] object-cover"
                style={{ boxShadow: "0 0 24px rgba(0,200,255,0.15)" }}
              />
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {governanceAxes.map((axis) => (
              <div
                key={axis.axis}
                className="rounded-lg border-l-[3px] border-primary bg-card p-6"
                data-ocid="home.axis.card"
              >
                <span className="accent-label">{axis.axis}</span>
                <h3 className="mt-3 text-base font-bold uppercase tracking-[0.04em] text-foreground">
                  {t(axis.titleKey)}
                </h3>
                <p className="mt-3 text-sm leading-[1.7] text-card-foreground">
                  {t(axis.copyKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIVE DIMENSIONS OF SOVEREIGNTY */}
      <section className="bg-background py-[60px]">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>{t("home.sovereignty.eyebrow")}</Eyebrow>
          </div>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <img
                src="/assets/generated/sovereignty-infrastructure.dim_1200x900.png"
                alt={t("home.sovereignty.imageAlt")}
                className="w-full rounded-[10px] object-cover"
                style={{ boxShadow: "0 0 20px rgba(0,200,255,0.12)" }}
              />
            </div>

            <div>
              <ul className="divide-y divide-border">
                {sovereigntyDimensions.map((dim) => (
                  <li
                    key={dim.number}
                    className="flex items-start gap-5 py-5"
                    data-ocid="home.sovereignty.item"
                  >
                    <span className="font-display text-sm font-bold text-primary">
                      {dim.number}
                    </span>
                    <div>
                      <h3 className="text-base font-bold uppercase tracking-[0.04em] text-foreground">
                        {t(dim.nameKey)}
                      </h3>
                      <p className="mt-1 text-sm leading-[1.7] text-card-foreground">
                        {t(dim.questionKey)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-lg border border-border bg-card px-7 py-5 text-center">
                <p className="text-sm italic leading-[1.7] text-card-foreground">
                  {t("home.sovereignty.quote")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="relative overflow-hidden bg-muted py-[60px]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(/assets/generated/sectors-panorama.dim_1600x500.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
          }}
          aria-hidden="true"
        />
        <div className="relative container">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>{t("home.sectors.eyebrow")}</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold text-foreground md:text-4xl">
              {t("home.sectors.title")}
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sectorCards.map((sector) => (
              <div
                key={sector.nameKey}
                className="card-accent-hover rounded-lg border border-border bg-card p-6"
                data-ocid="home.sector.card"
              >
                <sector.icon
                  className="h-7 w-7 text-primary"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-base font-bold uppercase tracking-[0.04em] text-foreground">
                  {t(sector.nameKey)}
                </h3>
                <p className="mt-2 text-sm leading-[1.7] text-card-foreground">
                  {t(sector.copyKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-muted py-14">
        <div className="container">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div
              className="h-px w-full max-w-md"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #00C8FF, transparent)",
              }}
              aria-hidden="true"
            />
            <h2 className="display-headline mt-10 text-3xl font-extrabold uppercase tracking-[0.05em] text-foreground md:text-5xl">
              {t("home.finalCta.title")}
            </h2>
            <p className="subheadline mx-auto mt-6 max-w-[560px]">
              {t("home.finalCta.subcopy")}
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-auto px-7 py-3.5 font-bold"
                data-ocid="home.final_cta.primary_button"
              >
                <Link to="/pilot">{t("home.finalCta.primaryButton")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-auto border-[1.5px] px-7 py-3.5 font-bold"
                data-ocid="home.final_cta.secondary_button"
              >
                <Link to="/pilot">{t("home.finalCta.secondaryButton")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
