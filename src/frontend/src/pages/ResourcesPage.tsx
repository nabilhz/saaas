import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  FileText,
  LineChart,
  ShieldCheck,
} from "lucide-react";

interface Resource {
  title: string;
  type: string;
  description: string;
  icon: React.ReactNode;
}

const resources: Resource[] = [
  {
    title: "The Sovereign AI Imperative",
    type: "Whitepaper",
    description:
      "Why nations and enterprises must own the full AI stack — from silicon to inference — and how SAAAS delivers a sovereign alternative to centralized cloud dependency.",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Control Room Architecture",
    type: "Technical Guide",
    description:
      "A deep dive into the SAAAS control plane: node orchestration, policy enforcement, telemetry pipelines, and the security model that keeps every deployment auditable.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "National Deployment Field Report",
    type: "Case Study",
    description:
      "How a sovereign cloud provider stood up a country-scale AI node in under ninety days — including governance, compliance, and performance outcomes.",
    icon: <LineChart className="h-5 w-5" />,
  },
  {
    title: "Governance & Oversight Framework",
    type: "Report",
    description:
      "The operating model behind transparent AI governance: multi-stakeholder oversight, audit trails, and the accountability mechanisms that earn public trust.",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Deploying Your First Node",
    type: "Documentation",
    description:
      "Step-by-step guidance for standing up a SAAAS node in your own environment — prerequisites, configuration, security hardening, and first-run validation.",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "The Economics of Sovereign Compute",
    type: "Research Brief",
    description:
      "Total cost of ownership across centralized, hyperscaler, and sovereign models — and why owning your compute is a strategic, not just financial, decision.",
    icon: <LineChart className="h-5 w-5" />,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Section variant="hero">
        <PageHeader
          eyebrow="Resource Library"
          title="Resources"
          subcopy="Whitepapers, case studies, technical guides, and research from the SAAAS team. Everything you need to understand, evaluate, and deploy sovereign AI infrastructure."
        />
      </Section>

      <Section alternate>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <Link
              key={resource.title}
              to="/pilot"
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              data-ocid={`resources.card.${index + 1}`}
            >
              <Card className="flex h-full flex-col transition-transform duration-300 group-hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="accent-label">{resource.type}</span>
                  <span className="text-primary">{resource.icon}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-[0.04em] text-foreground">
                  {resource.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-[1.75] text-card-foreground">
                  {resource.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-primary">
                  Read resource
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section variant="cta">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow accent>Get in touch</Eyebrow>
          <h2 className="display-headline mt-5 text-3xl text-foreground md:text-4xl">
            Need a deeper briefing?
          </h2>
          <p className="subheadline mx-auto mt-6 max-w-2xl">
            Our team can walk you through the architecture, governance model,
            and deployment path for your organization. Request a pilot and we
            will connect you with the right specialists.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" data-ocid="resources.cta_pilot">
              <Link to="/pilot">Request a Pilot</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              data-ocid="resources.cta_platform"
            >
              <Link to="/platform">Explore the Platform</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
