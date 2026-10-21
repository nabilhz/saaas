import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { Section } from "@/components/Section";
import { useLanguage } from "@/i18n";
import type { TranslationKey } from "@/i18n";
import { Link } from "@tanstack/react-router";
import { type Variants, motion } from "motion/react";

const implementationSequence: TranslationKey[] = [
  "countryNodes.sequence.1",
  "countryNodes.sequence.2",
  "countryNodes.sequence.3",
  "countryNodes.sequence.4",
  "countryNodes.sequence.5",
  "countryNodes.sequence.6",
  "countryNodes.sequence.7",
  "countryNodes.sequence.8",
  "countryNodes.sequence.9",
];

const futureNodes = [1, 2, 3, 4];

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

export default function CountryNodesPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage:
              "url(/assets/generated/country-nodes-hero.dim_1600x900.png)",
          }}
        />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <Eyebrow>{t("countryNodes.hero.eyebrow")}</Eyebrow>
            <h1 className="display-headline mt-6 text-4xl font-extrabold text-foreground md:text-5xl">
              {t("countryNodes.hero.title")}
            </h1>
            <p className="subheadline mx-auto mt-6 max-w-[680px]">
              {t("countryNodes.hero.subcopy")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* RWANDA REFERENCE NODE */}
      <Section alternate>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow accent>{t("countryNodes.reference.eyebrow")}</Eyebrow>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid items-center gap-10 lg:grid-cols-2"
        >
          <motion.div variants={item}>
            <img
              src="/assets/generated/country-nodes-rwanda.dim_1200x800.png"
              alt={t("countryNodes.rwanda.imageAlt")}
              className="h-full w-full rounded-[10px] object-cover"
              style={{
                filter: "brightness(0.7) hue-rotate(180deg) saturate(0.8)",
                boxShadow: "0 0 24px rgba(0,200,255,0.15)",
              }}
            />
          </motion.div>

          <motion.div variants={item}>
            <span
              className="inline-block rounded-[4px] bg-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-primary-foreground"
              style={{ padding: "4px 12px" }}
            >
              {t("countryNodes.reference.eyebrow")}
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold uppercase tracking-[0.06em] text-foreground md:text-4xl">
              {t("countryNodes.rwanda.name")}
            </h2>
            <span
              className="mt-4 inline-block rounded-[4px] border border-muted-foreground px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground"
              style={{ padding: "4px 12px" }}
            >
              {t("countryNodes.rwanda.status")}
            </span>
            <p className="mt-6 text-base leading-[1.75] text-card-foreground">
              {t("countryNodes.rwanda.body")}
            </p>
          </motion.div>
        </motion.div>

        {/* Implementation sequence */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {implementationSequence.map((stepKey, index) => (
            <motion.div
              key={stepKey}
              variants={item}
              className="flex items-start gap-4 rounded-[8px] border border-border bg-card p-5"
              data-ocid={`country_nodes.sequence.${index + 1}`}
            >
              <span className="font-display text-lg font-bold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-[1.6] text-card-foreground">
                {t(stepKey)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* FUTURE NODES */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{t("countryNodes.future.eyebrow")}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold text-foreground md:text-4xl">
            {t("countryNodes.future.title")}
          </h2>
        </div>

        <div className="mt-10 flex justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-16 w-16"
            style={{ color: "#1A3A6B" }}
            aria-hidden="true"
          >
            <title>{t("countryNodes.future.globeTitle")}</title>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            <path d="M2 12h20" />
          </svg>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          {futureNodes.map((node) => (
            <motion.div
              key={node}
              variants={item}
              className="rounded-[8px] border border-border bg-card p-7"
              data-ocid={`country_nodes.future.${node}`}
            >
              <span
                className="inline-block rounded-[4px] border border-muted-foreground px-3 py-1 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground"
                style={{ padding: "4px 12px" }}
              >
                {t("countryNodes.future.prospective")}
              </span>
              <p className="mt-5 text-sm leading-[1.75] text-card-foreground">
                {t("countryNodes.future.body")}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA BAND */}
      <section className="bg-muted py-14 text-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="display-headline text-3xl font-extrabold text-foreground md:text-4xl">
              {t("countryNodes.cta.title")}
            </h2>
            <div className="mt-10 flex justify-center">
              <Button
                asChild
                size="lg"
                data-ocid="country_nodes.cta.contact_us"
                className="h-auto px-7 py-3.5 font-bold"
              >
                <Link to="/pilot">{t("common.contactUs")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
