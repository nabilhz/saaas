import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { useLanguage } from "@/i18n";
import type { TranslationKey } from "@/i18n";
import { ArrowRight } from "lucide-react";

const benefits: {
  number: string;
  titleKey: TranslationKey;
  copyKey: TranslationKey;
}[] = [
  {
    number: "01",
    titleKey: "why.benefit.1.title",
    copyKey: "why.benefit.1.copy",
  },
  {
    number: "02",
    titleKey: "why.benefit.2.title",
    copyKey: "why.benefit.2.copy",
  },
  {
    number: "03",
    titleKey: "why.benefit.3.title",
    copyKey: "why.benefit.3.copy",
  },
  {
    number: "04",
    titleKey: "why.benefit.4.title",
    copyKey: "why.benefit.4.copy",
  },
  {
    number: "05",
    titleKey: "why.benefit.5.title",
    copyKey: "why.benefit.5.copy",
  },
  {
    number: "06",
    titleKey: "why.benefit.6.title",
    copyKey: "why.benefit.6.copy",
  },
];

const dimensions: {
  number: string;
  nameKey: TranslationKey;
  questionKey: TranslationKey;
}[] = [
  {
    number: "01",
    nameKey: "why.dimension.1.name",
    questionKey: "why.dimension.1.question",
  },
  {
    number: "02",
    nameKey: "why.dimension.2.name",
    questionKey: "why.dimension.2.question",
  },
  {
    number: "03",
    nameKey: "why.dimension.3.name",
    questionKey: "why.dimension.3.question",
  },
  {
    number: "04",
    nameKey: "why.dimension.4.name",
    questionKey: "why.dimension.4.question",
  },
  {
    number: "05",
    nameKey: "why.dimension.5.name",
    questionKey: "why.dimension.5.question",
  },
];

export default function WhySaaasPage() {
  const { t } = useLanguage();

  return (
    <>
      <Section variant="hero">
        <PageHeader
          eyebrow={t("why.hero.eyebrow")}
          title={
            <>
              {t("why.hero.title1")}{" "}
              <span className="text-gradient-cyan">{t("why.hero.title2")}</span>
            </>
          }
          subcopy={t("why.hero.subcopy")}
        />
      </Section>

      <Section alternate>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="card-accent-hover rounded-lg border border-border bg-card p-7"
              data-ocid="why.benefit.card"
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
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow accent>{t("why.dimensions.eyebrow")}</Eyebrow>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <ul className="divide-y divide-border">
            {dimensions.map((dim) => (
              <li
                key={dim.number}
                className="flex items-start gap-5 py-5"
                data-ocid="why.dimension.item"
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
        </div>
      </Section>

      <Section alternate>
        <div className="mx-auto max-w-3xl rounded-lg border border-border bg-card px-7 py-5 text-center">
          <p className="text-sm italic leading-[1.7] text-card-foreground">
            {t("why.quote")}
          </p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow accent>{t("why.cta.eyebrow")}</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold text-foreground md:text-4xl">
            {t("why.cta.title")}
          </h2>
          <p className="subheadline mx-auto mt-6 max-w-2xl">
            {t("why.cta.body")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" data-ocid="why.cta.explore_platform">
              <a href="/platform">
                {t("common.explorePlatform")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              data-ocid="why.cta.request_pilot"
            >
              <a href="/pilot">{t("common.requestPilot")}</a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
