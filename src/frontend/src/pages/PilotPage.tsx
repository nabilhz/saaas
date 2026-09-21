import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { Section } from "@/components/Section";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface PilotFormState {
  organization: string;
  country: string;
  industry: string;
  useCase: string;
  workload: string;
  sensitiveData: string;
  localDeployment: string;
  gpuCapacity: string;
  timing: string;
  fullName: string;
  role: string;
  email: string;
  phone: string;
}

const initialForm: PilotFormState = {
  organization: "",
  country: "",
  industry: "",
  useCase: "",
  workload: "",
  sensitiveData: "",
  localDeployment: "",
  gpuCapacity: "",
  timing: "",
  fullName: "",
  role: "",
  email: "",
  phone: "",
};

const industries = [
  "Government",
  "Banking & Finance",
  "Healthcare",
  "Telecommunications",
  "Education",
  "Agriculture",
  "Enterprise",
  "SME",
  "Other",
];

const workloads = ["Under 50", "50–500", "500–5,000", "Over 5,000"];

const timings = ["Within 1 month", "1–3 months", "3–6 months", "Flexible"];

const yesNoUnsure = ["Yes", "No", "Unsure"];

const fieldLabelClass =
  "mb-1.5 block text-xs font-medium uppercase tracking-[0.08em] text-card-foreground";

const inputClass =
  "w-full rounded-[4px] border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary";

const selectClass =
  "w-full rounded-[4px] border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary";

const radioClass = "accent-primary";

export default function PilotPage() {
  const [form, setForm] = useState<PilotFormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof PilotFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(initialForm);
    setSubmitted(false);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-background py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url(/assets/generated/pilot-hero-briefing.dim_1600x900.png)",
          }}
        />
        <div className="container relative flex flex-col items-center text-center">
          <Eyebrow className="mb-6">Get Started</Eyebrow>
          <h1 className="display-headline max-w-4xl text-4xl font-extrabold text-foreground md:text-6xl">
            Start with one bounded use case.
          </h1>
          <p className="subheadline mx-auto mt-6 max-w-[580px]">
            Prove quality, sovereignty, cost, governance and evidence before
            scaling. Our team responds within 2 business days.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <Section alternate>
        <div className="mx-auto flex max-w-[720px] flex-col items-center">
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 w-10"
              aria-hidden="true"
            >
              <title>Secure verified pilot request</title>
              <path d="M12 2l7 3v6c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V5l7-3z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>

          {submitted ? (
            <div
              className="flex w-full flex-col items-center rounded-[12px] border border-border bg-card px-8 py-16 text-center"
              data-ocid="pilot.success_state"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="display-headline text-3xl text-foreground">
                Request received
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-[1.75] text-card-foreground">
                Thank you, {form.fullName || "there"}. Your pilot request for{" "}
                <span className="text-foreground">
                  {form.organization || "your organization"}
                </span>{" "}
                has been received. A member of our sovereign AI team will reach
                out to{" "}
                <span className="text-foreground">{form.email || "you"}</span>{" "}
                within two business days to scope your pilot and next steps.
              </p>
              <Button
                variant="outline"
                className="mt-10"
                onClick={handleReset}
                data-ocid="pilot.submit_another_button"
              >
                Submit another request
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="w-full rounded-[12px] border border-border bg-card p-8 md:p-12"
              data-ocid="pilot.form"
            >
              <div className="grid gap-6">
                <div>
                  <label
                    htmlFor="pilot-organization"
                    className={fieldLabelClass}
                  >
                    Organization
                  </label>
                  <input
                    id="pilot-organization"
                    name="organization"
                    type="text"
                    value={form.organization}
                    onChange={(e) =>
                      handleChange("organization", e.target.value)
                    }
                    className={inputClass}
                    autoComplete="organization"
                    data-ocid="pilot.organization.input"
                  />
                </div>

                <div>
                  <label htmlFor="pilot-country" className={fieldLabelClass}>
                    Country / Jurisdiction
                  </label>
                  <input
                    id="pilot-country"
                    name="country"
                    type="text"
                    value={form.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    className={inputClass}
                    autoComplete="country-name"
                    data-ocid="pilot.country.input"
                  />
                </div>

                <div>
                  <label htmlFor="pilot-industry" className={fieldLabelClass}>
                    Industry
                  </label>
                  <select
                    id="pilot-industry"
                    name="industry"
                    value={form.industry}
                    onChange={(e) => handleChange("industry", e.target.value)}
                    className={selectClass}
                    data-ocid="pilot.industry.select"
                  >
                    <option value="" disabled>
                      Select an industry
                    </option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="pilot-use-case" className={fieldLabelClass}>
                    Primary use case
                  </label>
                  <textarea
                    id="pilot-use-case"
                    name="useCase"
                    rows={4}
                    value={form.useCase}
                    onChange={(e) => handleChange("useCase", e.target.value)}
                    className={inputClass}
                    data-ocid="pilot.use_case.textarea"
                  />
                </div>

                <div>
                  <label htmlFor="pilot-workload" className={fieldLabelClass}>
                    Approximate users / workload
                  </label>
                  <select
                    id="pilot-workload"
                    name="workload"
                    value={form.workload}
                    onChange={(e) => handleChange("workload", e.target.value)}
                    className={selectClass}
                    data-ocid="pilot.workload.select"
                  >
                    <option value="" disabled>
                      Select a range
                    </option>
                    {workloads.map((workload) => (
                      <option key={workload} value={workload}>
                        {workload}
                      </option>
                    ))}
                  </select>
                </div>

                <RadioGroup
                  legend="Sensitive or regulated data?"
                  name="sensitiveData"
                  value={form.sensitiveData}
                  options={yesNoUnsure}
                  onChange={(value) => handleChange("sensitiveData", value)}
                  dataOcid="pilot.sensitive_data"
                />

                <RadioGroup
                  legend="Local in-country deployment required?"
                  name="localDeployment"
                  value={form.localDeployment}
                  options={yesNoUnsure}
                  onChange={(value) => handleChange("localDeployment", value)}
                  dataOcid="pilot.local_deployment"
                />

                <RadioGroup
                  legend="Existing data center or GPU capacity?"
                  name="gpuCapacity"
                  value={form.gpuCapacity}
                  options={yesNoUnsure}
                  onChange={(value) => handleChange("gpuCapacity", value)}
                  dataOcid="pilot.gpu_capacity"
                />

                <div>
                  <label htmlFor="pilot-timing" className={fieldLabelClass}>
                    Desired pilot timing
                  </label>
                  <select
                    id="pilot-timing"
                    name="timing"
                    value={form.timing}
                    onChange={(e) => handleChange("timing", e.target.value)}
                    className={selectClass}
                    data-ocid="pilot.timing.select"
                  >
                    <option value="" disabled>
                      Select a timeframe
                    </option>
                    {timings.map((timing) => (
                      <option key={timing} value={timing}>
                        {timing}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="pilot-full-name" className={fieldLabelClass}>
                    Full name
                  </label>
                  <input
                    id="pilot-full-name"
                    name="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    className={inputClass}
                    autoComplete="name"
                    data-ocid="pilot.full_name.input"
                  />
                </div>

                <div>
                  <label htmlFor="pilot-role" className={fieldLabelClass}>
                    Role / title
                  </label>
                  <input
                    id="pilot-role"
                    name="role"
                    type="text"
                    value={form.role}
                    onChange={(e) => handleChange("role", e.target.value)}
                    className={inputClass}
                    autoComplete="organization-title"
                    data-ocid="pilot.role.input"
                  />
                </div>

                <div>
                  <label htmlFor="pilot-email" className={fieldLabelClass}>
                    Business email
                  </label>
                  <input
                    id="pilot-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={inputClass}
                    autoComplete="email"
                    data-ocid="pilot.email.input"
                  />
                </div>

                <div>
                  <label htmlFor="pilot-phone" className={fieldLabelClass}>
                    Phone (optional)
                  </label>
                  <input
                    id="pilot-phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={inputClass}
                    autoComplete="tel"
                    data-ocid="pilot.phone.input"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="mt-6 h-auto w-full rounded-[4px] bg-primary px-4 py-4 text-base font-bold text-primary-foreground hover:bg-primary/90"
                data-ocid="pilot.submit_button"
              >
                Submit Pilot Request
              </Button>
            </form>
          )}

          <p className="mx-auto mt-6 max-w-[600px] text-center text-sm leading-relaxed text-muted-foreground">
            After submitting: Discovery → Requirements Assessment → Pilot Design
            → Controlled Pilot → Evidence Report → Production Decision.
          </p>
        </div>
      </Section>
    </>
  );
}

interface RadioGroupProps {
  legend: string;
  name: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  dataOcid: string;
}

function RadioGroup({
  legend,
  name,
  value,
  options,
  onChange,
  dataOcid,
}: RadioGroupProps) {
  return (
    <fieldset>
      <legend className={fieldLabelClass}>{legend}</legend>
      <div className="flex flex-wrap gap-6">
        {options.map((option) => (
          <label
            key={option}
            className="flex cursor-pointer items-center gap-2 text-sm text-foreground"
          >
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className={radioClass}
              data-ocid={`${dataOcid}.${option.toLowerCase()}`}
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
