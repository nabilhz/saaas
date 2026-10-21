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
  BookOpen,
  FileText,
  LineChart,
  ShieldCheck,
} from "lucide-react";

interface Resource {
  typeKey: TranslationKey;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  icon: React.ReactNode;
}

const resources: Resource[] = [
  {
    typeKey: "resources.1.type",
    titleKey: "resources.1.title",
    descriptionKey: "resources.1.description",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    typeKey: "resources.2.type",
    titleKey: "resources.2.title",
    descriptionKey: "resources.2.description",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    typeKey: "resources.3.type",
    titleKey: "resources.3.title",
    descriptionKey: "resources.3.description",
    icon: <LineChart className="h-5 w-5" />,
  },
  {
    typeKey: "resources.4.type",
    titleKey: "resources.4.title",
    descriptionKey: "resources.4.description",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    typeKey: "resources.5.type",
    titleKey: "resources.5.title",
    descriptionKey: "resources.5.description",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    typeKey: "resources.6.type",
    titleKey: "resources.6.title",
    descriptionKey: "resources.6.description",
    icon: <LineChart className="h-5 w-5" />,
  },
];

export default function ResourcesPage() {
  const { t } = useLanguage();

  return (
    <>
      <Section variant="hero">
        <PageHeader
          eyebrow={t("resources.hero.eyebrow")}
          title={t("resources.hero.title")}
          subcopy={t("resources.hero.subcopy")}
        />
      </Section>

      <Section alternate>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <Link
              key={resource.titleKey}
              to="/pilot"
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              data-ocid={`resources.card.${index + 1}`}
            >
              <Card className="flex h-full flex-col transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="accent-label">{t(resource.typeKey)}</span>
                  <span className="text-primary">{resource.icon}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-[0.04em] text-foreground">
                  {t(resource.titleKey)}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-[1.75] text-card-foreground">
                  {t(resource.descriptionKey)}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-primary">
                  {t("common.readResource")}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section variant="cta">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow accent>{t("resources.cta.eyebrow")}</Eyebrow>
          <h2 className="display-headline mt-5 text-3xl text-foreground md:text-4xl">
            {t("resources.cta.title")}
          </h2>
          <p className="subheadline mx-auto mt-6 max-w-2xl">
            {t("resources.cta.body")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" data-ocid="resources.cta_pilot">
              <Link to="/pilot">{t("common.requestPilot")}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              data-ocid="resources.cta_platform"
            >
              <Link to="/platform">{t("common.explorePlatform")}</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
