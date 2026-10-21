import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { useLanguage } from "@/i18n";
import type { TranslationKey } from "@/i18n";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  Globe2,
  Lock,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";

const values: {
  icon: typeof Lock;
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
}[] = [
  {
    icon: Lock,
    titleKey: "about.value.1.title",
    bodyKey: "about.value.1.body",
  },
  {
    icon: ShieldCheck,
    titleKey: "about.value.2.title",
    bodyKey: "about.value.2.body",
  },
  {
    icon: Users,
    titleKey: "about.value.3.title",
    bodyKey: "about.value.3.body",
  },
  {
    icon: Globe2,
    titleKey: "about.value.4.title",
    bodyKey: "about.value.4.body",
  },
  {
    icon: Compass,
    titleKey: "about.value.5.title",
    bodyKey: "about.value.5.body",
  },
  {
    icon: Workflow,
    titleKey: "about.value.6.title",
    bodyKey: "about.value.6.body",
  },
];

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <Section variant="hero">
        <PageHeader
          eyebrow={t("about.hero.eyebrow")}
          title={
            <>
              {t("about.hero.title1")}{" "}
              <span className="text-gradient-cyan">
                {t("about.hero.title2")}
              </span>
            </>
          }
          subcopy={t("about.hero.subcopy")}
        />
      </Section>

      {/* Company story */}
      <Section alternate>
        <div className="mx-auto max-w-3xl">
          <Eyebrow accent>{t("about.story.eyebrow")}</Eyebrow>
          <h2 className="mt-5 text-2xl font-semibold text-foreground md:text-3xl">
            {t("about.story.title")}
          </h2>
          <div className="mt-8 space-y-6 text-base leading-[1.75] text-card-foreground md:text-lg">
            <p>{t("about.story.p1")}</p>
            <p>{t("about.story.p2")}</p>
            <p>{t("about.story.p3")}</p>
          </div>
        </div>
      </Section>

      {/* Mission */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow accent>{t("about.mission.eyebrow")}</Eyebrow>
          <h2 className="mt-5 text-2xl font-semibold text-foreground md:text-3xl">
            {t("about.mission.title")}
          </h2>
          <p className="subheadline mt-6">{t("about.mission.body")}</p>
        </div>
      </Section>

      {/* Values */}
      <Section alternate>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow accent>{t("about.values.eyebrow")}</Eyebrow>
          <h2 className="mt-5 text-2xl font-semibold text-foreground md:text-3xl">
            {t("about.values.title")}
          </h2>
          <p className="subheadline mt-6">{t("about.values.body")}</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <Card
              key={value.titleKey}
              className="flex flex-col"
              data-ocid="about.value.card"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[4px] border border-primary/30 bg-primary/10 text-primary">
                <value.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold uppercase tracking-[0.04em] text-foreground">
                {t(value.titleKey)}
              </h3>
              <p className="mt-3 text-sm leading-[1.75] text-card-foreground">
                {t(value.bodyKey)}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section variant="cta">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow accent>{t("about.cta.eyebrow")}</Eyebrow>
          <h2 className="mt-5 text-2xl font-semibold text-foreground md:text-3xl">
            {t("about.cta.title")}
          </h2>
          <p className="subheadline mt-6">{t("about.cta.body")}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" data-ocid="about.cta.primary_button">
              <Link to="/platform">
                {t("common.explorePlatform")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              data-ocid="about.cta.secondary_button"
            >
              <Link to="/pilot">{t("common.requestPilot")}</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
