import { useLanguage } from "@/i18n";
import type { TranslationKey } from "@/i18n";
import { useState } from "react";

type ScenarioId = "normal" | "drift" | "genesis" | "inheritance";

interface GaugeConfig {
  labelKey: TranslationKey;
  value: number;
  color: string;
}

interface Scenario {
  id: ScenarioId;
  labelKey: TranslationKey;
  status: {
    activeAgents: string;
    governedTasks: string;
    governanceEventsKey: TranslationKey;
    currentStatusKey: TranslationKey;
  };
  gauges: {
    x: GaugeConfig;
    y: GaugeConfig;
    z: GaugeConfig;
  };
  decision: {
    textKey: TranslationKey;
    bg: string;
    textColor: string;
    border: string;
  };
}

const scenarios: Scenario[] = [
  {
    id: "normal",
    labelKey: "controlRoom.scenario.normal",
    status: {
      activeAgents: "3",
      governedTasks: "247",
      governanceEventsKey: "controlRoom.events.2warnings",
      currentStatusKey: "controlRoom.status.operational",
    },
    gauges: {
      x: {
        labelKey: "controlRoom.gauge.x",
        value: 0.12,
        color: "#22C55E",
      },
      y: {
        labelKey: "controlRoom.gauge.y",
        value: 0.97,
        color: "#22C55E",
      },
      z: {
        labelKey: "controlRoom.gauge.z",
        value: 0.94,
        color: "#22C55E",
      },
    },
    decision: {
      textKey: "controlRoom.decision.allow",
      bg: "#14532D",
      textColor: "#22C55E",
      border: "#22C55E",
    },
  },
  {
    id: "drift",
    labelKey: "controlRoom.scenario.drift",
    status: {
      activeAgents: "3",
      governedTasks: "247",
      governanceEventsKey: "controlRoom.events.4warnings",
      currentStatusKey: "controlRoom.status.escalated",
    },
    gauges: {
      x: {
        labelKey: "controlRoom.gauge.x",
        value: 0.78,
        color: "#F59E0B",
      },
      y: {
        labelKey: "controlRoom.gauge.y",
        value: 0.97,
        color: "#22C55E",
      },
      z: {
        labelKey: "controlRoom.gauge.z",
        value: 0.94,
        color: "#22C55E",
      },
    },
    decision: {
      textKey: "controlRoom.decision.escalate",
      bg: "#451A03",
      textColor: "#F59E0B",
      border: "#F59E0B",
    },
  },
  {
    id: "genesis",
    labelKey: "controlRoom.scenario.genesis",
    status: {
      activeAgents: "3",
      governedTasks: "247",
      governanceEventsKey: "controlRoom.events.1critical",
      currentStatusKey: "controlRoom.status.humanReview",
    },
    gauges: {
      x: {
        labelKey: "controlRoom.gauge.x",
        value: 0.12,
        color: "#22C55E",
      },
      y: {
        labelKey: "controlRoom.gauge.y",
        value: 0.31,
        color: "#EF4444",
      },
      z: {
        labelKey: "controlRoom.gauge.z",
        value: 0.94,
        color: "#22C55E",
      },
    },
    decision: {
      textKey: "controlRoom.decision.humanReview",
      bg: "#450A0A",
      textColor: "#EF4444",
      border: "#EF4444",
    },
  },
  {
    id: "inheritance",
    labelKey: "controlRoom.scenario.inheritance",
    status: {
      activeAgents: "3",
      governedTasks: "247",
      governanceEventsKey: "controlRoom.events.1critical",
      currentStatusKey: "controlRoom.status.blocked",
    },
    gauges: {
      x: {
        labelKey: "controlRoom.gauge.x",
        value: 0.12,
        color: "#22C55E",
      },
      y: {
        labelKey: "controlRoom.gauge.y",
        value: 0.97,
        color: "#22C55E",
      },
      z: {
        labelKey: "controlRoom.gauge.z",
        value: 0.22,
        color: "#EF4444",
      },
    },
    decision: {
      textKey: "controlRoom.decision.block",
      bg: "#450A0A",
      textColor: "#EF4444",
      border: "#EF4444",
    },
  },
];

const timelineRows: {
  time: string;
  axis: string;
  typeKey: TranslationKey;
  model: string;
  decision: string;
}[] = [
  {
    time: "14:32:01",
    axis: "X",
    typeKey: "controlRoom.timeline.stableObservation",
    model: "open-weight-local",
    decision: "ALLOW",
  },
  {
    time: "14:31:45",
    axis: "Y",
    typeKey: "controlRoom.timeline.genesisVerified",
    model: "open-weight-local",
    decision: "ALLOW",
  },
  {
    time: "14:30:22",
    axis: "X",
    typeKey: "controlRoom.timeline.driftWarning",
    model: "open-weight-local",
    decision: "ESCALATE",
  },
  {
    time: "14:29:58",
    axis: "Z",
    typeKey: "controlRoom.timeline.inheritanceChecked",
    model: "open-weight-local",
    decision: "ALLOW",
  },
  {
    time: "14:28:10",
    axis: "Y",
    typeKey: "controlRoom.timeline.genesisConfirmed",
    model: "open-weight-local",
    decision: "ALLOW",
  },
];

const statLabels: {
  key: string;
  labelKey: TranslationKey;
}[] = [
  {
    key: "activeAgents",
    labelKey: "controlRoom.stat.activeAgents",
  },
  {
    key: "governedTasks",
    labelKey: "controlRoom.stat.governedTasks",
  },
  {
    key: "governanceEvents",
    labelKey: "controlRoom.stat.governanceEvents",
  },
  {
    key: "currentStatus",
    labelKey: "controlRoom.stat.currentStatus",
  },
];

function ArcGauge({ value, color, labelKey }: GaugeConfig) {
  const { t } = useLanguage();
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - value);
  const label = t(labelKey);

  return (
    <div className="flex flex-col items-center" data-ocid="control_room.gauge">
      <div className="relative h-40 w-40">
        <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90">
          <title>{`${label} ${t("controlRoom.gauge.titleSuffix")}`}</title>
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke="#1E293B"
            strokeWidth="10"
          />
          <circle
            cx="70"
            cy="70"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            style={{
              transition: "stroke-dashoffset 0.5s ease, stroke 0.5s ease",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-2xl font-bold" style={{ color }}>
            {Math.round(value * 100)}%
          </span>
        </div>
      </div>
      <span className="accent-label mt-4 text-center">{label}</span>
    </div>
  );
}

function DecisionBadge({ decision }: { decision: Scenario["decision"] }) {
  const { t } = useLanguage();
  return (
    <div
      className="inline-flex items-center justify-center rounded-md px-8 py-3 text-xl font-bold uppercase tracking-[0.1em]"
      style={{
        backgroundColor: decision.bg,
        color: decision.textColor,
        border: `1px solid ${decision.border}`,
      }}
      data-ocid="control_room.decision_badge"
    >
      {t(decision.textKey)}
    </div>
  );
}

export default function ControlRoomPage() {
  const [activeId, setActiveId] = useState<ScenarioId>("normal");
  const { t } = useLanguage();
  const active = scenarios.find((s) => s.id === activeId) ?? scenarios[0];

  return (
    <>
      {/* TOP DISCLAIMER BANNER */}
      <div
        className="w-full border-b border-primary px-4 py-3 text-center"
        style={{ backgroundColor: "#1A3A6B" }}
        data-ocid="control_room.disclaimer_banner"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white">
          {t("controlRoom.disclaimerBanner")}
        </p>
      </div>

      {/* PAGE HEADER */}
      <section className="relative overflow-hidden bg-background">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(/assets/generated/control-room-hero.dim_1600x900.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
          <span className="eyebrow">{t("controlRoom.hero.eyebrow")}</span>
          <h1 className="display-headline mt-6 text-4xl font-extrabold uppercase tracking-[0.05em] text-foreground md:text-6xl">
            {t("controlRoom.hero.title1")}
            <br />
            {t("controlRoom.hero.title2")}
          </h1>
        </div>
      </section>

      {/* SCENARIO SELECTOR */}
      <div
        className="border-b border-border bg-muted"
        data-ocid="control_room.scenario_selector"
      >
        <div className="container flex flex-wrap items-center justify-center gap-3 py-5">
          {scenarios.map((scenario) => {
            const isActive = scenario.id === activeId;
            return (
              <button
                key={scenario.id}
                type="button"
                onClick={() => setActiveId(scenario.id)}
                aria-pressed={isActive}
                className="rounded px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.06em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                style={{
                  border: `1px solid ${isActive ? "#00C8FF" : "#1E293B"}`,
                  color: isActive ? "#07090F" : "#A8B4C8",
                  backgroundColor: isActive ? "#00C8FF" : "#111F35",
                  fontWeight: isActive ? 700 : 500,
                }}
                data-ocid={`control_room.scenario.${scenario.id}`}
              >
                {t(scenario.labelKey)}
              </button>
            );
          })}
        </div>
      </div>

      {/* STATUS BAR */}
      <section className="bg-background">
        <div className="container mx-auto my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statLabels.map((stat) => {
            const value =
              stat.key === "activeAgents"
                ? active.status.activeAgents
                : stat.key === "governedTasks"
                  ? active.status.governedTasks
                  : stat.key === "governanceEvents"
                    ? t(active.status.governanceEventsKey)
                    : t(active.status.currentStatusKey);
            return (
              <div
                key={stat.key}
                className="rounded-lg border border-border bg-card p-5"
                data-ocid={`control_room.stat.${stat.key}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {t(stat.labelKey)}
                </p>
                <p className="mt-2 text-2xl font-bold text-foreground">
                  {value}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* GAUGES */}
      <section className="bg-background pb-4">
        <div className="container mx-auto flex flex-col items-center justify-center gap-10 md:flex-row md:gap-16">
          <ArcGauge {...active.gauges.x} />
          <ArcGauge {...active.gauges.y} />
          <ArcGauge {...active.gauges.z} />
        </div>
      </section>

      {/* DECISION BADGE */}
      <section className="bg-background py-10">
        <div className="container flex justify-center">
          <DecisionBadge decision={active.decision} />
        </div>
      </section>

      {/* EVENT TIMELINE */}
      <section className="bg-background pb-16">
        <div className="container">
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left font-mono text-sm text-card-foreground">
                <thead>
                  <tr className="border-b border-border text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    <th className="px-5 py-3 font-semibold">
                      {t("controlRoom.timeline.timestamp")}
                    </th>
                    <th className="px-5 py-3 font-semibold">
                      {t("controlRoom.timeline.axis")}
                    </th>
                    <th className="px-5 py-3 font-semibold">
                      {t("controlRoom.timeline.event")}
                    </th>
                    <th className="px-5 py-3 font-semibold">
                      {t("controlRoom.timeline.model")}
                    </th>
                    <th className="px-5 py-3 font-semibold">
                      {t("controlRoom.timeline.decision")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {timelineRows.map((row, index) => (
                    <tr
                      key={`${row.time}-${row.axis}`}
                      className="border-b border-border last:border-b-0"
                      data-ocid={`control_room.timeline.row.${index + 1}`}
                    >
                      <td className="px-5 py-3">{row.time}</td>
                      <td className="px-5 py-3">{row.axis}</td>
                      <td className="px-5 py-3">{t(row.typeKey)}</td>
                      <td className="px-5 py-3">{row.model}</td>
                      <td className="px-5 py-3">
                        <span
                          className="inline-block rounded px-2 py-0.5 text-xs font-semibold uppercase tracking-[0.06em]"
                          style={
                            row.decision === "ALLOW"
                              ? {
                                  backgroundColor: "#14532D",
                                  color: "#22C55E",
                                }
                              : {
                                  backgroundColor: "#451A03",
                                  color: "#F59E0B",
                                }
                          }
                        >
                          {row.decision}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM DISCLAIMER */}
      <div
        className="w-full px-6 py-6 text-center"
        style={{ color: "#5A6A80" }}
        data-ocid="control_room.disclaimer_bottom"
      >
        <p className="mx-auto max-w-3xl text-sm leading-relaxed">
          {t("controlRoom.disclaimerBottom")}
        </p>
      </div>
    </>
  );
}
