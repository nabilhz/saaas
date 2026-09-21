import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ArrowRight } from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "Sovereign",
    copy: "Keep sensitive workloads, operational state and evidence within required jurisdictional boundaries where the deployment calls for it.",
  },
  {
    number: "02",
    title: "Economical",
    copy: "Use an appropriate authorized AI resource for each task rather than defaulting every workload to the most expensive option.",
  },
  {
    number: "03",
    title: "Model-Agnostic",
    copy: "Combine locally deployed open-weight resources with approved external or specialized AI services where policy permits.",
  },
  {
    number: "04",
    title: "Locally Informed",
    copy: "Ground services in authorized enterprise, institutional and local knowledge.",
  },
  {
    number: "05",
    title: "Governed",
    copy: "Observe autonomous operation independently of the model and retain defined human and organizational authority.",
  },
  {
    number: "06",
    title: "Managed",
    copy: "SAAAS manages the infrastructure, models, governance, monitoring and service operations.",
  },
];

const dimensions = [
  {
    number: "01",
    name: "Data",
    question: "Where may the information reside?",
  },
  {
    number: "02",
    name: "Compute",
    question: "Where may inference occur?",
  },
  {
    number: "03",
    name: "Knowledge",
    question: "Who controls the proprietary or local knowledge supplied to AI?",
  },
  {
    number: "04",
    name: "Governance",
    question: "Who determines what autonomous AI is permitted to do?",
  },
  {
    number: "05",
    name: "Execution",
    question: "Who authorizes consequential action and verifies what happened?",
  },
];

export default function WhySaaasPage() {
  return (
    <>
      <Section variant="hero">
        <PageHeader
          eyebrow="Why SAAAS"
          title={
            <>
              Sovereign AI.{" "}
              <span className="text-gradient-cyan">On Your Terms.</span>
            </>
          }
          subcopy="Access AI resources appropriate to your organization without surrendering control of your data, institutional knowledge, jurisdiction or operational authority."
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
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.7] text-card-foreground">
                {benefit.copy}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow accent>Sovereign AI Defined</Eyebrow>
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
                    {dim.name}
                  </h3>
                  <p className="mt-1 text-sm leading-[1.7] text-card-foreground">
                    {dim.question}
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
            Sovereignty is not merely where the server sits. It is meaningful
            control across the path from information to AI decision to
            consequential action.
          </p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow accent>Take Command</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold text-foreground md:text-4xl">
            Ready to own your AI?
          </h2>
          <p className="subheadline mx-auto mt-6 max-w-2xl">
            See how SAAAS puts your enterprise AI back under your control.
            Explore the platform or request a pilot to get started.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" data-ocid="why.cta.explore_platform">
              <a href="/platform">
                Explore the Platform
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              data-ocid="why.cta.request_pilot"
            >
              <a href="/pilot">Request a Pilot</a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
