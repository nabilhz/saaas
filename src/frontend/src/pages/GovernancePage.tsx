import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { Link } from "@tanstack/react-router";

const axes = [
  {
    axis: "X",
    title: "Behavioral Divergence",
    body: "How much is current behavior departing from a defined reference under comparable conditions? X is quantitative, repeatable, and independently produced. It is not a risk score and does not make a governance decision.",
    why: "The X-axis is provider-neutral. Different independent measurement technologies can connect to X provided their measurements have clearly defined semantics, repeatability and provenance.",
  },
  {
    axis: "Y",
    title: "Genesis State Continuity",
    body: "Can the current governed state still be traced back to its authorized origin — the genesis state from which it began?",
    why: "Y does not measure behavioral divergence. It provides independent continuity and provenance evidence.",
  },
  {
    axis: "Z",
    title: "State Inheritance Continuity",
    body: "Has the state evolved from one stage to the next without breaking the authorized inheritance chain?",
    why: "This allows us to distinguish origin continuity from transition continuity: Y concerns where the state comes from; Z concerns whether the path from that origin remains intact.",
  },
];

const rows = [
  {
    image: "/assets/generated/governance-oblique.dim_800x800.png",
    alt: "Human hand interacting with a holographic governance panel",
    headline: "Oblique AI Governance",
    body: "Oblique AI Governance independently observes changes, influences and state transitions that may alter the original authorized intent of an autonomous process. The AI does not govern itself.",
    alternate: true,
    imageLeft: true,
  },
  {
    image: "/assets/generated/governance-oversight.dim_800x800.png",
    alt: "Professional reviewing data on screens in a dark control room",
    headline: "Human Oversight",
    body: "Human authority is preserved as a defined governance state: ALLOW / BLOCK / ESCALATE / HUMAN REVIEW. Escalation triggers and human authority thresholds are configured per deployment.",
    alternate: false,
    imageLeft: false,
  },
  {
    image: "/assets/generated/governance-verification.dim_800x800.png",
    alt: "Verified checkmark over a flowing data stream",
    headline: "Execution Verification",
    body: "Authorization and execution are separate events. Execution verification confirms that the action performed corresponds to the previously governed state and has not been replayed or altered.",
    alternate: true,
    imageLeft: true,
  },
  {
    image: "/assets/generated/governance-audit.dim_800x800.png",
    alt: "Audit log with cyan highlighted evidence timeline entries",
    headline: "Evidence & Audit",
    body: "Every governed consequential action leaves a traceable evidence record: semantic value, origin, authority, evidence, governance basis, resolution status and boundary effect.",
    alternate: false,
    imageLeft: false,
  },
];

export default function GovernancePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(26,58,107,0.2), transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(/assets/generated/governance-hero.dim_1600x900.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pb-20 pt-20 text-center">
          <Eyebrow>Governance</Eyebrow>
          <h1 className="display-headline mt-6 text-4xl tracking-[0.05em] text-foreground md:text-6xl">
            Do AI Governance
            <br />
            the right way.
          </h1>
          <p className="mx-auto mt-8 max-w-[680px] text-base leading-[1.75] text-card-foreground md:text-lg">
            Measurement provides evidence. DriftShield reconstructs
            governance-relevant state. Execution authorization is separate. X, Y
            and Z are independent observations — not self-judgment by the AI.
          </p>
        </div>
      </section>

      {/* PRINCIPLE BAND */}
      <section className="bg-muted">
        <div className="container py-7 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-primary md:text-base">
            Independent Observation → X / Y / Z → DriftShield Governance-State
            Reconstruction → TMU Execution Authorization
          </p>
        </div>
      </section>

      {/* THREE AXIS SECTION */}
      <section className="bg-background py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Three Independent Axes</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold text-foreground md:text-4xl">
              What Is Being Observed?
            </h2>
          </div>

          <div className="mx-auto mt-12 mb-10 max-w-[700px]">
            <img
              src="/assets/generated/governance-axes.dim_1200x800.png"
              alt="Three intersecting axes in a 3D coordinate space with glowing cyan and blue lines"
              className="w-full rounded-xl object-cover"
              style={{ boxShadow: "0 0 32px rgba(0,200,255,0.18)" }}
            />
          </div>

          <div className="mx-auto flex max-w-4xl flex-col gap-6">
            {axes.map((item) => (
              <div
                key={item.axis}
                className="rounded-lg border-l-4 border-primary bg-card p-8"
                data-ocid="governance.axis.card"
              >
                <div className="flex items-baseline gap-4">
                  <span className="accent-label text-base">{item.axis}</span>
                  <h3 className="text-lg font-bold uppercase tracking-[0.04em] text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-base leading-[1.75] text-card-foreground">
                  {item.body}
                </p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Why it matters
                </p>
                <p className="mt-2 text-sm leading-[1.75] text-card-foreground">
                  {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUR ADDITIONAL ROWS */}
      {rows.map((row) => (
        <section
          key={row.headline}
          className={
            row.alternate ? "bg-muted py-[60px]" : "bg-background py-[60px]"
          }
        >
          <div className="container">
            <div className="flex min-h-[380px] flex-col items-center gap-12 lg:flex-row lg:gap-12">
              <div
                className={
                  row.imageLeft
                    ? "w-full lg:w-1/2"
                    : "w-full lg:order-2 lg:w-1/2"
                }
              >
                <img
                  src={row.image}
                  alt={row.alt}
                  className="h-[320px] w-full object-cover"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0 0 20px rgba(0,200,255,0.12)",
                  }}
                />
              </div>
              <div
                className={
                  row.imageLeft
                    ? "w-full lg:w-1/2"
                    : "w-full lg:order-1 lg:w-1/2"
                }
              >
                <h2 className="display-headline text-3xl font-extrabold uppercase tracking-[0.05em] text-foreground md:text-4xl">
                  {row.headline}
                </h2>
                <p className="mt-6 max-w-xl text-base leading-[1.75] text-card-foreground">
                  {row.body}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FINAL CTA BAND */}
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
              See Governance in Action.
            </h2>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-auto px-7 py-3.5 font-bold"
                data-ocid="governance.cta.primary_button"
              >
                <Link to="/control-room">Explore Control Room</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
