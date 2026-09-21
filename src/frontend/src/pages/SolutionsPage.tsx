import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
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
import { type Variants, motion } from "motion/react";

const solutions = [
  {
    icon: Landmark,
    sector: "Government",
    title: "Sovereign AI for Government",
    body: "Deliver public services powered by AI that never leaves national borders. Deploy models on jurisdiction-resident infrastructure with full auditability and democratic oversight.",
    capabilities: [
      "Citizen services and public-sector automation",
      "National data residency and sovereignty",
      "Parliamentary and regulatory audit trails",
      "Cross-agency secure data sharing",
    ],
  },
  {
    icon: BarChart3,
    sector: "Financial Services",
    title: "Sovereign AI for Finance",
    body: "Run risk, compliance, and customer intelligence on infrastructure you control. Keep sensitive financial data in-region while meeting the strictest regulatory standards.",
    capabilities: [
      "Regulatory-grade model governance",
      "Fraud detection and risk analytics",
      "In-region data residency for compliance",
      "Explainable, auditable decisioning",
    ],
  },
  {
    icon: ShieldPlus,
    sector: "Healthcare",
    title: "Sovereign AI for Healthcare",
    body: "Advance clinical intelligence without compromising patient privacy. Process protected health data on sovereign nodes with granular access control and full traceability.",
    capabilities: [
      "Privacy-preserving clinical analytics",
      "Protected health data residency",
      "Diagnostic and operational intelligence",
      "Role-based clinician access control",
    ],
  },
  {
    icon: Zap,
    sector: "Telecommunications",
    title: "Sovereign AI for Telecommunications",
    body: "AI-enabled customer and operational workflows at scale, with governed data handling and full auditability.",
    capabilities: [
      "Customer service automation",
      "Network operations intelligence",
      "Governed data handling",
      "Operational workflow optimization",
    ],
  },
  {
    icon: Shield,
    sector: "Education",
    title: "Sovereign AI for Education",
    body: "Affordable governed AI capacity for institutions, teachers and learners — on infrastructure the institution controls.",
    capabilities: [
      "Institutional knowledge management",
      "Personalized learning assistance",
      "Administrative workflow automation",
      "Data privacy and student protection",
    ],
  },
  {
    icon: Building2,
    sector: "Agriculture",
    title: "Sovereign AI for Agriculture",
    body: "Localized AI knowledge and services for field and enterprise use, grounded in local conditions and language.",
    capabilities: [
      "Crop and yield intelligence",
      "Local language support",
      "Field and supply chain optimization",
      "Sovereign agricultural data management",
    ],
  },
  {
    icon: Building2,
    sector: "Enterprise & SMEs",
    title: "Sovereign AI for Enterprise & SMEs",
    body: "Bring AI into your enterprise on your own terms. Own your models, data, and infrastructure while scaling across teams with governed, centralized control.",
    capabilities: [
      "Private model deployment and versioning",
      "Enterprise data governance",
      "Centralized policy and billing",
      "Self-hosted or hybrid deployment",
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
  return (
    <>
      {/* Page header */}
      <Section className="pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <PageHeader
            eyebrow="Solutions"
            title="Solutions"
            subcopy="Sovereign AI, purpose-built for the sectors that carry the most sensitive responsibilities. Deploy intelligence on infrastructure you own, under governance you control — across government, finance, healthcare, energy, defense, and enterprise."
          />
        </motion.div>
      </Section>

      {/* Full-width sector banner */}
      <div className="w-full overflow-hidden">
        <img
          src="/assets/generated/solutions-banner.dim_1600x400.jpg"
          alt="Composite of a government building facade, hospital corridor, and financial trading floor with cyan accent lighting"
          className="h-[400px] w-full object-cover opacity-80"
          data-ocid="solutions.banner"
        />
      </div>

      {/* Solution offering cards */}
      <Section className="pt-0">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {solutions.map((solution) => (
            <motion.div key={solution.sector} variants={item}>
              <Card
                className="flex h-full flex-col gap-5"
                data-ocid={`solutions.card.${solution.sector
                  .toLowerCase()
                  .replace(/\s+/g, "_")}`}
              >
                <div className="flex flex-col">
                  <solution.icon
                    className="mb-3 h-7 w-7 text-primary"
                    aria-hidden="true"
                  />
                  <span className="accent-label">{solution.sector}</span>
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-[0.06em] text-foreground">
                  {solution.title}
                </h3>
                <p className="text-sm leading-[1.75] text-card-foreground">
                  {solution.body}
                </p>
                <ul className="mt-auto flex flex-col gap-2.5 border-t border-border pt-5">
                  {solution.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-start gap-2.5 text-sm text-card-foreground"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{capability}</span>
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <Eyebrow accent>Get Started</Eyebrow>
          <h2 className="display-headline mt-5 text-3xl text-foreground md:text-4xl">
            Deploy Sovereign AI in Your Sector
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.75] text-card-foreground md:text-lg">
            Every deployment is tailored to the regulatory, security, and
            operational realities of your industry. Start with a pilot on your
            own infrastructure and keep full control of your intelligence.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" data-ocid="solutions.cta.request_pilot">
              <Link to="/pilot">
                Request a Pilot
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              data-ocid="solutions.cta.explore_platform"
            >
              <Link to="/platform">Explore the Platform</Link>
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
