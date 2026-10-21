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
  BarChart3,
  Building2,
  Check,
  Landmark,
  Shield,
  ShieldPlus,
  Zap,
} from "lucide-react";
import { type Variants, motion, useReducedMotion } from "motion/react";

const solutions: {
  icon: typeof Landmark;
  sectorKey: TranslationKey;
  titleKey: TranslationKey;
  bodyKey: TranslationKey;
  capabilityKeys: TranslationKey[];
}[] = [
  {
    icon: Landmark,
    sectorKey: "solutions.government.sector",
    titleKey: "solutions.government.title",
    bodyKey: "solutions.government.body",
    capabilityKeys: [
      "solutions.government.cap1",
      "solutions.government.cap2",
      "solutions.government.cap3",
      "solutions.government.cap4",
    ],
  },
  {
    icon: BarChart3,
    sectorKey: "solutions.finance.sector",
    titleKey: "solutions.finance.title",
    bodyKey: "solutions.finance.body",
    capabilityKeys: [
      "solutions.finance.cap1",
      "solutions.finance.cap2",
      "solutions.finance.cap3",
      "solutions.finance.cap4",
    ],
  },
  {
    icon: ShieldPlus,
    sectorKey: "solutions.healthcare.sector",
    titleKey: "solutions.healthcare.title",
    bodyKey: "solutions.healthcare.body",
    capabilityKeys: [
      "solutions.healthcare.cap1",
      "solutions.healthcare.cap2",
      "solutions.healthcare.cap3",
      "solutions.healthcare.cap4",
    ],
  },
  {
    icon: Zap,
    sectorKey: "solutions.telecom.sector",
    titleKey: "solutions.telecom.title",
    bodyKey: "solutions.telecom.body",
    capabilityKeys: [
      "solutions.telecom.cap1",
      "solutions.telecom.cap2",
      "solutions.telecom.cap3",
      "solutions.telecom.cap4",
    ],
  },
  {
    icon: Shield,
    sectorKey: "solutions.education.sector",
    titleKey: "solutions.education.title",
    bodyKey: "solutions.education.body",
    capabilityKeys: [
      "solutions.education.cap1",
      "solutions.education.cap2",
      "solutions.education.cap3",
      "solutions.education.cap4",
    ],
  },
  {
    icon: Building2,
    sectorKey: "solutions.agriculture.sector",
    titleKey: "solutions.agriculture.title",
    bodyKey: "solutions.agriculture.body",
    capabilityKeys: [
      "solutions.agriculture.cap1",
      "solutions.agriculture.cap2",
      "solutions.agriculture.cap3",
      "solutions.agriculture.cap4",
    ],
  },
  {
    icon: Building2,
    sectorKey: "solutions.enterprise.sector",
    titleKey: "solutions.enterprise.title",
    bodyKey: "solutions.enterprise.body",
    capabilityKeys: [
      "solutions.enterprise.cap1",
      "solutions.enterprise.cap2",
      "solutions.enterprise.cap3",
      "solutions.enterprise.cap4",
    ],
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function SolutionsPage() {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* Page header */}
      <Section className="pt-20">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.5, ease: "easeOut" }
          }
        >
          <PageHeader
            eyebrow={t("solutions.hero.eyebrow")}
            title={t("solutions.hero.title")}
            subcopy={t("solutions.hero.subcopy")}
          />
        </motion.div>
      </Section>

      {/* Full-width sector banner */}
      <div className="w-full overflow-hidden">
        <img
          src="/assets/generated/solutions-banner.dim_1600x400.jpg"
          alt={t("solutions.banner.alt")}
          className="h-[400px] w-full object-cover opacity-80"
          data-ocid="solutions.banner"
        />
      </div>

      {/* Solution offering cards */}
      <Section className="pt-0">
        <motion.div
          variants={container}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.sectorKey}
              variants={shouldReduceMotion ? undefined : item}
            >
              <Card
                className="flex h-full flex-col gap-5"
                data-ocid={`solutions.card.${solution.sectorKey
                  .replace(/^solutions\./, "")
                  .replace(/\.sector$/, "")
                  .replace(/\./g, "_")}`}
              >
                <div className="flex flex-col">
                  <solution.icon
                    className="mb-3 h-7 w-7 text-primary"
                    aria-hidden="true"
                  />
                  <span className="accent-label">{t(solution.sectorKey)}</span>
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-[0.06em] text-foreground">
                  {t(solution.titleKey)}
                </h3>
                <p className="text-sm leading-[1.75] text-card-foreground">
                  {t(solution.bodyKey)}
                </p>
                <ul className="mt-auto flex flex-col gap-2.5 border-t border-border pt-5">
                  {solution.capabilityKeys.map((capabilityKey) => (
                    <li
                      key={capabilityKey}
                      className="flex items-start gap-2.5 text-sm text-card-foreground"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{t(capabilityKey)}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Closing CTA */}
      <Section alternate>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.5, ease: "easeOut" }
          }
          className="mx-auto max-w-3xl text-center"
        >
          <Eyebrow accent>{t("solutions.cta.eyebrow")}</Eyebrow>
          <h2 className="display-headline mt-5 text-3xl text-foreground md:text-4xl">
            {t("solutions.cta.title")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.75] text-card-foreground md:text-lg">
            {t("solutions.cta.body")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" data-ocid="solutions.cta.request_pilot">
              <Link to="/pilot">
                {t("common.requestPilot")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              data-ocid="solutions.cta.explore_platform"
            >
              <Link to="/platform">{t("common.explorePlatform")}</Link>
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
