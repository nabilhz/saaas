import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/Eyebrow";
import { Section } from "@/components/Section";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Cpu,
  Globe2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Leaf,
  Lock,
  Network,
  RadioTower,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    icon: Cpu,
    title: "Custom Large Language Models",
    copy: "Train, fine-tune, and deploy sovereign LLMs on infrastructure you control — never routed through third-party clouds.",
  },
  {
    icon: Network,
    title: "Sovereign Inference",
    copy: "Run inference inside your own borders and data centers, with full auditability over every model, request, and output.",
  },
  {
    icon: ShieldCheck,
    title: "Governance & Oversight",
    copy: "Policy-driven guardrails, human-in-the-loop review, and immutable audit trails that keep AI accountable to your mandate.",
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    copy: "Orchestrate AI across your enterprise with deterministic pipelines, role-based access, and transparent, explainable decisions.",
  },
];

const flowSteps = [
  "Customer Mission",
  "Authorized Knowledge",
  "Policy-Aware Routing",
  "AI Resource",
  "X/Y/Z Observation",
  "DriftShield",
  "Authorization",
  "Verified Execution",
  "Evidence",
];

const highlights = [
  {
    icon: Lock,
    title: "Data Residency",
    copy: "Your data never leaves your jurisdiction. Models train and serve on nodes you own, under the laws you answer to.",
  },
  {
    icon: Globe2,
    title: "Country Nodes",
    copy: "Deploy dedicated national infrastructure with local compute, local governance, and full regulatory alignment.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Trust Security",
    copy: "End-to-end encryption, hardware-backed keys, and continuous verification protect every layer of the stack.",
  },
];

const whySaaasBenefits = [
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

const governanceAxes = [
  {
    axis: "X",
    title: "Behavioral Divergence",
    copy: "How much is current behavior departing from a defined reference under comparable conditions? X is evidence, not itself the ALLOW/BLOCK decision.",
  },
  {
    axis: "Y",
    title: "Genesis Continuity",
    copy: "Can the current governed state still be traced to its authorized origin?",
  },
  {
    axis: "Z",
    title: "Inheritance Continuity",
    copy: "Has state evolved through a valid and continuous sequence of authorized transitions?",
  },
];

const sovereigntyDimensions = [
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

const sectorCards = [
  {
    icon: Landmark,
    name: "Government",
    copy: "Institutional AI without surrendering national control.",
  },
  {
    icon: BarChart3,
    name: "Banking & Finance",
    copy: "Governed automation with traceable decisions and escalation.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare",
    copy: "AI assistance with sensitive-data controls and defined human authority.",
  },
  {
    icon: RadioTower,
    name: "Telecommunications",
    copy: "AI-enabled customer and operational workflows at scale.",
  },
  {
    icon: GraduationCap,
    name: "Education",
    copy: "Affordable governed AI capacity for institutions, teachers and learners.",
  },
  {
    icon: Leaf,
    name: "Agriculture",
    copy: "Localized AI knowledge and services for field and enterprise use.",
  },
  {
    icon: Building2,
    name: "Enterprise & SMEs",
    copy: "Managed AI capability without building an internal AI infrastructure company.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(26,58,107,0.25), transparent 70%)",
          }}
        />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
          <Eyebrow>SAAAS · SOVEREIGN AI AS A SERVICE</Eyebrow>
          <h1 className="display-headline mt-6 text-4xl tracking-[0.05em] text-foreground md:text-6xl">
            Sovereign AI.
            <br />
            Governed.
            <br />
            Managed.
          </h1>
          <p className="subheadline mx-auto mt-8 max-w-[680px]">
            Access AI resources appropriate to your organization without
            surrendering control of your data, institutional knowledge,
            jurisdiction or operational authority. SAAAS is a managed AI utility
            combining sovereign deployment options, policy-aware model
            selection, enterprise knowledge, independent AI governance,
            controlled execution and operational evidence.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-4">
            <Button
              asChild
              size="lg"
              className="h-auto px-7 py-3.5 font-bold"
              data-ocid="home.hero.primary_button"
            >
              <Link to="/platform">
                Request a Sovereign AI Pilot
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[1.5px]"
              data-ocid="home.hero.secondary_button"
            >
              <Link to="/control-room">Explore Control Room</Link>
            </Button>
          </div>
          <p className="mt-6 text-xs tracking-[0.08em] text-[#5A6A80]">
            Your Data · Your Knowledge · Your Jurisdiction · Your Governance ·
            Appropriate AI Resources.
          </p>
        </div>
      </section>

      {/* HOW SAAAS WORKS */}
      <section className="bg-muted py-[60px]">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>The Saaas Flow</Eyebrow>
          </div>

          <div className="mt-14 flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:justify-center md:gap-0">
            {flowSteps.map((step, i) => (
              <div
                key={step}
                className="flex flex-col items-center md:flex-row"
              >
                <div
                  className="rounded-[4px] border border-border bg-card px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.06em] text-foreground"
                  data-ocid="home.flow.step"
                >
                  {step}
                </div>
                {i < flowSteps.length - 1 && (
                  <ArrowRight
                    className="mx-3 my-2 h-4 w-4 rotate-90 text-primary md:rotate-0"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-[600px] text-center text-base italic leading-[1.75] text-card-foreground">
            The customer brings the mission. SAAAS supplies governed access to
            appropriate AI resources, authorized knowledge, independent
            observation, controlled execution and evidence.
          </p>
        </div>
      </section>

      {/* WHY SAAAS */}
      <section className="relative overflow-hidden bg-background py-[60px]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(/assets/generated/why-saaas-network.dim_1600x900.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.06,
          }}
          aria-hidden="true"
        />
        <div className="relative container">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Why Saaas</Eyebrow>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whySaaasBenefits.map((benefit) => (
              <div
                key={benefit.number}
                className="card-accent-hover rounded-lg border border-border bg-card p-7"
                data-ocid="home.why.card"
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
        </div>
      </section>

      {/* OBLIQUE AI GOVERNANCE */}
      <section className="bg-muted py-[60px]">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="display-headline text-3xl font-extrabold uppercase tracking-[0.05em] text-foreground md:text-5xl">
                AI should not govern itself.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-[1.75] text-card-foreground">
                Oblique AI Governance independently observes changes, influences
                and state transitions that may alter the original authorized
                intent of an autonomous process as work moves through models,
                agents, knowledge sources, tools and execution environments.
              </p>
              <p className="mt-6 max-w-xl text-base font-semibold text-primary">
                See what your autonomous AI is doing. Know where it came from.
                Know how it changed. Decide whether it should proceed.
              </p>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/governance-control-room.dim_1200x900.png"
                alt="Futuristic control room with server infrastructure lit by cyan ambient lighting"
                className="w-full rounded-[10px] object-cover"
                style={{ boxShadow: "0 0 24px rgba(0,200,255,0.15)" }}
              />
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {governanceAxes.map((axis) => (
              <div
                key={axis.axis}
                className="rounded-lg border-l-[3px] border-primary bg-card p-6"
                data-ocid="home.axis.card"
              >
                <span className="accent-label">{axis.axis}</span>
                <h3 className="mt-3 text-base font-bold uppercase tracking-[0.04em] text-foreground">
                  {axis.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.7] text-card-foreground">
                  {axis.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIVE DIMENSIONS OF SOVEREIGNTY */}
      <section className="bg-background py-[60px]">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Sovereign AI Defined</Eyebrow>
          </div>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <img
                src="/assets/generated/sovereignty-infrastructure.dim_1200x900.png"
                alt="Institutional data center with dark server racks lit by subtle cyan highlights"
                className="w-full rounded-[10px] object-cover"
                style={{ boxShadow: "0 0 20px rgba(0,200,255,0.12)" }}
              />
            </div>

            <div>
              <ul className="divide-y divide-border">
                {sovereigntyDimensions.map((dim) => (
                  <li
                    key={dim.number}
                    className="flex items-start gap-5 py-5"
                    data-ocid="home.sovereignty.item"
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

              <div className="mt-8 rounded-lg border border-border bg-card px-7 py-5 text-center">
                <p className="text-sm italic leading-[1.7] text-card-foreground">
                  Sovereignty is not merely where the server sits. It is
                  meaningful control across the path from information to AI
                  decision to consequential action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="relative overflow-hidden bg-muted py-[60px]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(/assets/generated/sectors-panorama.dim_1600x500.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
          }}
          aria-hidden="true"
        />
        <div className="relative container">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>One Infrastructure. Many Missions.</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold text-foreground md:text-4xl">
              Sectors We Serve
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sectorCards.map((sector) => (
              <div
                key={sector.name}
                className="card-accent-hover rounded-lg border border-border bg-card p-6"
                data-ocid="home.sector.card"
              >
                <sector.icon
                  className="h-7 w-7 text-primary"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-base font-bold uppercase tracking-[0.04em] text-foreground">
                  {sector.name}
                </h3>
                <p className="mt-2 text-sm leading-[1.7] text-card-foreground">
                  {sector.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-muted py-14">
        <div className="container">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div
              className="h-px w-full max-w-md"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #00C8FF, transparent)",
              }}
              aria-hidden="true"
            />
            <h2 className="display-headline mt-10 text-3xl font-extrabold uppercase tracking-[0.05em] text-foreground md:text-5xl">
              Start with one bounded use case.
            </h2>
            <p className="subheadline mx-auto mt-6 max-w-[560px]">
              Prove quality, sovereignty, cost, governance and evidence before
              scaling.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-auto px-7 py-3.5 font-bold"
                data-ocid="home.final_cta.primary_button"
              >
                <Link to="/platform">Request a Pilot</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-auto border-[1.5px] px-7 py-3.5 font-bold"
                data-ocid="home.final_cta.secondary_button"
              >
                <Link to="/pilot">Talk to SAAAS</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Why Sovereign AI</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold text-foreground md:text-4xl">
            AI should answer to you — not the other way around
          </h2>
          <p className="subheadline mx-auto mt-6 max-w-2xl">
            Most enterprises run their most sensitive AI workloads on foreign
            clouds, surrendering data, models, and decision-making to third
            parties. SAAAS returns that control to you. We give governments and
            enterprises the infrastructure, governance, and expertise to own
            their AI end to end — from raw data to deployed model — while
            staying fully compliant with the laws and values of your nation.
          </p>
        </div>
      </Section>

      {/* Capability cards */}
      <Section alternate>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow accent>Capabilities</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold text-foreground md:text-4xl">
            A complete sovereign AI stack
          </h2>
          <p className="subheadline mx-auto mt-6 max-w-2xl">
            Every capability you need to build, govern, and scale AI on
            infrastructure you control.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap) => (
            <Card
              key={cap.title}
              className="flex flex-col"
              data-ocid="home.capability.card"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[4px] border border-primary/30 bg-primary/10 text-primary">
                <cap.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold uppercase tracking-[0.04em] text-foreground">
                {cap.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.75] text-card-foreground">
                {cap.copy}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Platform highlights */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Platform Highlights</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold text-foreground md:text-4xl">
            Built for sovereignty, engineered for scale
          </h2>
          <p className="subheadline mx-auto mt-6 max-w-2xl">
            The SAAAS platform is architected around one principle: your AI
            stays yours. Here is how we deliver on that promise.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <Card
              key={item.title}
              className="flex flex-col"
              data-ocid="home.highlight.card"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[4px] border border-primary/30 bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold uppercase tracking-[0.04em] text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.75] text-card-foreground">
                {item.copy}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA band */}
      <Section alternate variant="cta">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow accent>Get Started</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold text-foreground md:text-4xl">
            Take command of your AI today
          </h2>
          <p className="subheadline mx-auto mt-6 max-w-2xl">
            Explore the control room to see how SAAAS puts sovereignty back in
            your hands — or request a pilot and deploy your first sovereign
            model in weeks, not years.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" data-ocid="home.cta.primary_button">
              <Link to="/control-room">
                Explore Control Room
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              data-ocid="home.cta.secondary_button"
            >
              <Link to="/pilot">Request a Pilot</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
