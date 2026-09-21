import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { Section } from "@/components/Section";
import { Link } from "@tanstack/react-router";
import { type Variants, motion } from "motion/react";

const layers = [
  {
    number: "01",
    name: "Experience / Enterprise Interfaces",
    role: "Web, mobile, APIs, TMU and customer systems.",
    why: "Where users and enterprise systems interact with governed SAAAS services.",
  },
  {
    number: "02",
    name: "SAAAS Orchestration",
    role: "Workflow, agent and institutional-state coordination.",
    why: "Coordinates business context and service workflow across all components.",
  },
  {
    number: "03",
    name: "Sovereign Knowledge",
    role: "Approved enterprise and local knowledge, retrieval and controlled context.",
    why: "Grounds AI responses in authorized institutional knowledge. Customer data is not used to retrain foundation models.",
  },
  {
    number: "04",
    name: "Policy-Aware Smart Routing",
    role: "Select an appropriate authorized model or AI resource per task.",
    why: "Matches each task to the right AI resource based on capability, cost, latency, data classification, jurisdiction and governance state.",
  },
  {
    number: "05",
    name: "AI Resource Fabric",
    role: "Locally deployed open-weight models plus approved external or specialist resources.",
    why: "Avoids single-model dependency. Architecture is provider-neutral.",
  },
  {
    number: "06",
    name: "Oblique AI Governance (HIC · X/Y/Z · DriftShield)",
    role: "Independent X/Y/Z observations and governance-state reconstruction.",
    why: "Governance is independent of the model. The AI does not judge itself.",
  },
  {
    number: "07",
    name: "Authorization & Execution Verification",
    role: "ALLOW / BLOCK / ESCALATE / HUMAN authority; verify execution corresponds to governed state.",
    why: "Separates the governance decision from the execution act and verifies what actually happened.",
  },
  {
    number: "08",
    name: "Evidence & Control Room",
    role: "Traceability, receipts, audit, replay/review and operational visibility.",
    why: "Every governed consequential action leaves a verifiable evidence record.",
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
          <Eyebrow className="text-[#5A6A80]">Platform</Eyebrow>
          <h1 className="display-headline mt-6 text-4xl font-extrabold text-white md:text-5xl">
            Platform
          </h1>
          <p className="display-headline mt-6 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
            One Governed Gateway. Multiple AI Resources.
          </p>
          <p className="subheadline mx-auto mt-6 max-w-[680px]">
            A layered architecture combining sovereign deployment, knowledge
            management, policy-aware routing, independent governance and
            verified execution.
          </p>
        </div>
      </Section>

      {/* ARCHITECTURE STACK */}
      <Section alternate>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="text-[#5A6A80]">Service Architecture</Eyebrow>
          <h2 className="display-headline mt-5 text-3xl font-bold text-white md:text-4xl">
            How the Platform Works
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
            alt="Layered architecture diagram of the SAAAS platform with cyan accent lines"
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
                  {layer.name}
                </h3>
                <p className="mt-1 text-sm leading-[1.7] text-[#A8B4C8]">
                  {layer.role}
                </p>
              </div>
              <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.08em] text-primary md:max-w-[240px] md:text-right">
                {layer.why}
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
            Explore How Governance Works.
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              variant="outline"
              className="h-auto rounded-[4px] border-[1.5px] border-primary bg-transparent px-7 py-3.5 text-primary"
              data-ocid="platform.cta.go_to_governance"
            >
              <Link to="/governance">Go to Governance</Link>
            </Button>
            <Button
              asChild
              className="h-auto rounded-[4px] bg-primary px-7 py-3.5 font-bold text-primary-foreground"
              data-ocid="platform.cta.request_pilot"
            >
              <Link to="/pilot">Request a Pilot</Link>
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
