import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { Section } from "@/components/Section";
import { useLanguage } from "@/i18n";
import type { TranslationKey } from "@/i18n";
import { Link } from "@tanstack/react-router";
import { type Variants, motion } from "motion/react";

const layers: {
  number: string;
  nameKey: TranslationKey;
  roleKey: TranslationKey;
  whyKey: TranslationKey;
}[] = [
  {
    number: "01",
    nameKey: "platform.layer.1.name",
    roleKey: "platform.layer.1.role",
    whyKey: "platform.layer.1.why",
  },
  {
    number: "02",
    nameKey: "platform.layer.2.name",
    roleKey: "platform.layer.2.role",
    whyKey: "platform.layer.2.why",
  },
  {
    number: "03",
    nameKey: "platform.layer.3.name",
    roleKey: "platform.layer.3.role",
    whyKey: "platform.layer.3.why",
  },
  {
    number: "04",
    nameKey: "platform.layer.4.name",
    roleKey: "platform.layer.4.role",
    whyKey: "platform.layer.4.why",
  },
  {
    number: "05",
    nameKey: "platform.layer.5.name",
    roleKey: "platform.layer.5.role",
    whyKey: "platform.layer.5.why",
  },
  {
    number: "06",
    nameKey: "platform.layer.6.name",
    roleKey: "platform.layer.6.role",
    whyKey: "platform.layer.6.why",
  },
  {
    number: "07",
    nameKey: "platform.layer.7.name",
    roleKey: "platform.layer.7.role",
    whyKey: "platform.layer.7.why",
  },
  {
    number: "08",
    nameKey: "platform.layer.8.name",
    roleKey: "platform.layer.8.role",
    whyKey: "platform.layer.8.why",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function PlatformPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* HERO */}
      <Section variant="hero" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
          style={{
            backgroundImage:
              "url(/assets/generated/platform-hero-serverroom.dim_1600x900.png)",
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow className="text-[#5A6A80]">
            {t("platform.hero.eyebrow")}
          </Eyebrow>
          <h1 className="display-headline mt-6 text-4xl font-extrabold text-white md:text-5xl">
            {t("platform.hero.title")}
          </h1>
          <p className="display-headline mt-6 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
            {t("platform.hero.subtitle")}
          </p>
          <p className="subheadline mx-auto mt-6 max-w-[680px]">
            {t("platform.hero.subcopy")}
          </p>
        </div>
      </Section>

      {/* ARCHITECTURE STACK */}
      <Section alternate>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="text-[#5A6A80]">
            {t("platform.arch.eyebrow")}
          </Eyebrow>
          <h2 className="display-headline mt-5 text-3xl font-bold text-white md:text-4xl">
            {t("platform.arch.title")}
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mt-12 mb-10 max-w-[680px]"
        >
          <img
            src="/assets/generated/platform-architecture-diagram.dim_1200x800.png"
            alt={t("platform.arch.imageAlt")}
            className="w-full rounded-[12px] border border-border object-cover"
            style={{ boxShadow: "0 0 28px rgba(0,200,255,0.15)" }}
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-5xl"
        >
          {layers.map((layer, index) => (
            <motion.div
              key={layer.number}
              variants={item}
              className={`group flex flex-col gap-2 border-b border-[#1E293B] px-6 py-6 transition-colors duration-300 hover:border-l-[3px] hover:border-l-primary md:flex-row md:items-center md:gap-6 ${
                index % 2 === 0 ? "bg-card" : "bg-muted"
              }`}
              data-ocid={`platform.layer.${index + 1}`}
            >
              <span className="w-10 shrink-0 font-display text-lg font-bold text-[#5A6A80]">
                {layer.number}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-base font-bold uppercase tracking-[0.04em] text-white md:text-lg">
                  {t(layer.nameKey)}
                </h3>
                <p className="mt-1 text-sm leading-[1.7] text-[#A8B4C8]">
                  {t(layer.roleKey)}
                </p>
              </div>
              <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.08em] text-primary md:max-w-[240px] md:text-right">
                {t(layer.whyKey)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* FINAL CTA */}
      <Section variant="cta">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="display-headline text-3xl font-extrabold text-white md:text-4xl">
            {t("platform.cta.title")}
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              variant="outline"
              className="h-auto rounded-[4px] border-[1.5px] border-primary bg-transparent px-7 py-3.5 text-primary"
              data-ocid="platform.cta.go_to_governance"
            >
              <Link to="/governance">{t("platform.cta.goToGovernance")}</Link>
            </Button>
            <Button
              asChild
              className="h-auto rounded-[4px] bg-primary px-7 py-3.5 font-bold text-primary-foreground"
              data-ocid="platform.cta.request_pilot"
            >
              <Link to="/pilot">{t("common.requestPilot")}</Link>
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
