import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { useLanguage } from "@/i18n";
import type { TranslationKey } from "@/i18n";
import { Link } from "@tanstack/react-router";

const axes: {
  axis: string;
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
  whyKey: TranslationKey;
}[] = [
  {
    axis: "X",
    titleKey: "governance.axis.x.title",
    bodyKey: "governance.axis.x.body",
    whyKey: "governance.axis.x.why",
  },
  {
    axis: "Y",
    titleKey: "governance.axis.y.title",
    bodyKey: "governance.axis.y.body",
    whyKey: "governance.axis.y.why",
  },
  {
    axis: "Z",
    titleKey: "governance.axis.z.title",
    bodyKey: "governance.axis.z.body",
    whyKey: "governance.axis.z.why",
  },
];

const rows: {
  image: string;
  altKey: TranslationKey;
  headlineKey: TranslationKey;
  bodyKey: TranslationKey;
  alternate: boolean;
  imageLeft: boolean;
}[] = [
  {
    image: "/assets/generated/governance-oblique.dim_800x800.png",
    altKey: "governance.row.oblique.alt",
    headlineKey: "governance.row.oblique.headline",
    bodyKey: "governance.row.oblique.body",
    alternate: true,
    imageLeft: true,
  },
  {
    image: "/assets/generated/governance-oversight.dim_800x800.png",
    altKey: "governance.row.oversight.alt",
    headlineKey: "governance.row.oversight.headline",
    bodyKey: "governance.row.oversight.body",
    alternate: false,
    imageLeft: false,
  },
  {
    image: "/assets/generated/governance-verification.dim_800x800.png",
    altKey: "governance.row.verification.alt",
    headlineKey: "governance.row.verification.headline",
    bodyKey: "governance.row.verification.body",
    alternate: true,
    imageLeft: true,
  },
  {
    image: "/assets/generated/governance-audit.dim_800x800.png",
    altKey: "governance.row.audit.alt",
    headlineKey: "governance.row.audit.headline",
    bodyKey: "governance.row.audit.body",
    alternate: false,
    imageLeft: false,
  },
];

export default function GovernancePage() {
  const { t } = useLanguage();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(26,58,107,0.2), transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(/assets/generated/governance-hero.dim_1600x900.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pb-20 pt-20 text-center">
          <Eyebrow>{t("governance.hero.eyebrow")}</Eyebrow>
          <h1 className="display-headline mt-6 text-4xl tracking-[0.05em] text-foreground md:text-6xl">
            {t("governance.hero.title1")}
            <br />
            {t("governance.hero.title2")}
          </h1>
          <p className="mx-auto mt-8 max-w-[680px] text-base leading-[1.75] text-card-foreground md:text-lg">
            {t("governance.hero.subcopy")}
          </p>
        </div>
      </section>

      {/* PRINCIPLE BAND */}
      <section className="bg-muted">
        <div className="container py-7 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary md:text-base">
            {t("governance.band")}
          </p>
        </div>
      </section>

      {/* THREE AXIS SECTION */}
      <section className="bg-background py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>{t("governance.axes.eyebrow")}</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold text-foreground md:text-4xl">
              {t("governance.axes.title")}
            </h2>
          </div>

          <div className="mx-auto mt-12 mb-10 max-w-[700px]">
            <img
              src="/assets/generated/governance-axes.dim_1200x800.png"
              alt={t("governance.axes.imageAlt")}
              className="w-full rounded-xl object-cover"
              style={{ boxShadow: "0 0 32px rgba(0,200,255,0.18)" }}
            />
          </div>

          <div className="mx-auto flex max-w-4xl flex-col gap-6">
            {axes.map((item) => (
              <div
                key={item.axis}
                className="rounded-lg border-l-4 border-primary bg-card p-8"
                data-ocid="governance.axis.card"
              >
                <div className="flex items-baseline gap-4">
                  <span className="accent-label text-base">{item.axis}</span>
                  <h3 className="text-lg font-bold uppercase tracking-[0.04em] text-foreground">
                    {t(item.titleKey)}
                  </h3>
                </div>
                <p className="mt-4 text-base leading-[1.75] text-card-foreground">
                  {t(item.bodyKey)}
                </p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {t("governance.whyItMatters")}
                </p>
                <p className="mt-2 text-sm leading-[1.75] text-card-foreground">
                  {t(item.whyKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUR ADDITIONAL ROWS */}
      {rows.map((row) => (
        <section
          key={row.headlineKey}
          className={
            row.alternate ? "bg-muted py-[60px]" : "bg-background py-[60px]"
          }
        >
          <div className="container">
            <div className="flex min-h-[380px] flex-col items-center gap-12 lg:flex-row lg:gap-12">
              <div
                className={
                  row.imageLeft
                    ? "w-full lg:w-1/2"
                    : "w-full lg:order-2 lg:w-1/2"
                }
              >
                <img
                  src={row.image}
                  alt={t(row.altKey)}
                  className="h-[320px] w-full object-cover"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0 0 20px rgba(0,200,255,0.12)",
                  }}
                />
              </div>
              <div
                className={
                  row.imageLeft
                    ? "w-full lg:w-1/2"
                    : "w-full lg:order-1 lg:w-1/2"
                }
              >
                <h2 className="display-headline text-3xl font-extrabold uppercase tracking-[0.05em] text-foreground md:text-4xl">
                  {t(row.headlineKey)}
                </h2>
                <p className="mt-6 max-w-xl text-base leading-[1.75] text-card-foreground">
                  {t(row.bodyKey)}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FINAL CTA BAND */}
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
              {t("governance.cta.title")}
            </h2>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-auto px-7 py-3.5 font-bold"
                data-ocid="governance.cta.primary_button"
              >
                <Link to="/control-room">{t("common.exploreControlRoom")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="h-auto"
                style={{
                  background: "transparent",
                  border: "1.5px solid #00C8FF",
                  color: "#00C8FF",
                  borderRadius: "4px",
                  padding: "14px 28px",
                  fontWeight: 600,
                }}
                data-ocid="governance.cta.secondary_button"
              >
                <a
                  href="https://tmu.ai/docs/SovereignAI-as-a-service.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("governance.cta.readOverview")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
