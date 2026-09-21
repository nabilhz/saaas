import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Eyebrow } from "@/components/Eyebrow";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  Globe2,
  Lock,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";

const values = [
  {
    icon: Lock,
    title: "Sovereignty First",
    body: "We believe intelligence is an asset you should own, not a service you rent. Every decision we make starts with returning control to the people and nations we serve.",
  },
  {
    icon: ShieldCheck,
    title: "Trust Through Transparency",
    body: "Sovereign AI demands accountability. We build with open, auditable processes so every model, decision, and pipeline can be examined and verified by those who depend on it.",
  },
  {
    icon: Users,
    title: "Human Oversight",
    body: "Technology should amplify human judgment, never replace it. We keep people in command of every critical decision, with governance that is explainable and accountable.",
  },
  {
    icon: Globe2,
    title: "National Alignment",
    body: "Infrastructure must respect the laws, values, and borders of the communities it serves. We design for data residency and regulatory alignment from the ground up.",
  },
  {
    icon: Compass,
    title: "Long-Term Stewardship",
    body: "We build infrastructure meant to endure for generations. Our work is measured not in quarters, but in the lasting resilience and independence it creates.",
  },
  {
    icon: Workflow,
    title: "Engineering Excellence",
    body: "Sovereignty is only as strong as the systems behind it. We hold ourselves to the highest standards of security, performance, and reliability in everything we ship.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section variant="hero">
        <PageHeader
          eyebrow="About SAAAS"
          title={
            <>
              Building the{" "}
              <span className="text-gradient-cyan">Sovereign AI</span> Layer
            </>
          }
          subcopy="SAAAS exists to give governments and enterprises complete control over their artificial intelligence — from the silicon that powers it to the models that run on it. We are a team of engineers, researchers, and policy thinkers building the infrastructure for a more independent digital future."
        />
      </Section>

      {/* Company story */}
      <Section alternate>
        <div className="mx-auto max-w-3xl">
          <Eyebrow accent>Our Story</Eyebrow>
          <h2 className="mt-5 text-2xl font-semibold text-foreground md:text-3xl">
            Founded on a simple conviction
          </h2>
          <div className="mt-8 space-y-6 text-base leading-[1.75] text-card-foreground md:text-lg">
            <p>
              SAAAS was founded on a conviction that has only grown stronger:
              the most consequential technology of our era should not be
              controlled by a handful of distant corporations. As enterprises
              and nations began depending on AI for their most sensitive work,
              we saw a dangerous concentration of power — models, data, and
              decision-making flowing through infrastructure owned by others.
            </p>
            <p>
              We started SAAAS to offer a different path. Our founders came from
              high-performance computing, national security, and enterprise
              infrastructure with a shared belief that sovereignty is not a
              luxury but a requirement. We set out to build a platform where
              organizations could train, deploy, and govern their own AI on
              infrastructure they control — without sacrificing capability,
              security, or performance.
            </p>
            <p>
              Today, SAAAS powers sovereign AI programs across governments and
              regulated industries. We remain independent, mission-driven, and
              relentlessly focused on one goal: putting the power of
              intelligence back in the hands of those who own it.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow accent>Our Mission</Eyebrow>
          <h2 className="mt-5 text-2xl font-semibold text-foreground md:text-3xl">
            Return control of AI to its rightful owners
          </h2>
          <p className="subheadline mt-6">
            Our mission is to make sovereign AI the default — to give every
            government and enterprise the infrastructure, governance, and
            expertise to own their intelligence end to end. We believe that when
            data stays in your perimeter, models answer to your mandate, and
            decisions remain under human oversight, technology serves people
            rather than the other way around.
          </p>
        </div>
      </Section>

      {/* Values */}
      <Section alternate>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow accent>Our Values</Eyebrow>
          <h2 className="mt-5 text-2xl font-semibold text-foreground md:text-3xl">
            The principles that guide us
          </h2>
          <p className="subheadline mt-6">
            These values shape every product decision, every partnership, and
            every line of code we write.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <Card
              key={value.title}
              className="flex flex-col"
              data-ocid="about.value.card"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[4px] border border-primary/30 bg-primary/10 text-primary">
                <value.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold uppercase tracking-[0.04em] text-foreground">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.75] text-card-foreground">
                {value.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section variant="cta">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow accent>Work With Us</Eyebrow>
          <h2 className="mt-5 text-2xl font-semibold text-foreground md:text-3xl">
            Join us in building a sovereign future
          </h2>
          <p className="subheadline mt-6">
            Whether you are a government, an enterprise, or a partner who shares
            our mission, we would love to work with you. Explore the platform or
            request a pilot to see sovereign AI in action.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" data-ocid="about.cta.primary_button">
              <Link to="/platform">
                Explore the Platform
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              data-ocid="about.cta.secondary_button"
            >
              <Link to="/pilot">Request a Pilot</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
