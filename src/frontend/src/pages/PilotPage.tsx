import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { Section } from "@/components/Section";
import { useLanguage } from "@/i18n";
import type { TranslationKey } from "@/i18n";
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

const industries: { value: string; labelKey: TranslationKey }[] = [
  { value: "Government", labelKey: "pilot.industry.government" },
  { value: "Banking & Finance", labelKey: "pilot.industry.finance" },
  { value: "Healthcare", labelKey: "pilot.industry.healthcare" },
  { value: "Telecommunications", labelKey: "pilot.industry.telecom" },
  { value: "Education", labelKey: "pilot.industry.education" },
  { value: "Agriculture", labelKey: "pilot.industry.agriculture" },
  { value: "Enterprise", labelKey: "pilot.industry.enterprise" },
  { value: "SME", labelKey: "pilot.industry.sme" },
  { value: "Other", labelKey: "pilot.industry.other" },
];

const workloads: { value: string; labelKey: TranslationKey }[] = [
  { value: "Under 50", labelKey: "pilot.workload.under50" },
  { value: "50–500", labelKey: "pilot.workload.50to500" },
  { value: "500–5,000", labelKey: "pilot.workload.500to5000" },
  { value: "Over 5,000", labelKey: "pilot.workload.over5000" },
];

const timings: { value: string; labelKey: TranslationKey }[] = [
  { value: "Within 1 month", labelKey: "pilot.timing.within1" },
  { value: "1–3 months", labelKey: "pilot.timing.1to3" },
  { value: "3–6 months", labelKey: "pilot.timing.3to6" },
  { value: "Flexible", labelKey: "pilot.timing.flexible" },
];

const yesNoUnsure: { value: string; labelKey: TranslationKey }[] = [
  { value: "Yes", labelKey: "pilot.yesNoUnsure.yes" },
  { value: "No", labelKey: "pilot.yesNoUnsure.no" },
  { value: "Unsure", labelKey: "pilot.yesNoUnsure.unsure" },
];

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
  const { t } = useLanguage();

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
          <Eyebrow className="mb-6">{t("pilot.hero.eyebrow")}</Eyebrow>
          <h1 className="display-headline max-w-4xl text-4xl font-extrabold text-foreground md:text-6xl">
            {t("pilot.hero.title")}
          </h1>
          <p className="subheadline mx-auto mt-6 max-w-[580px]">
            {t("pilot.hero.subcopy")}
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
              <title>{t("pilot.form.iconTitle")}</title>
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
                {t("pilot.success.title")}
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-[1.75] text-card-foreground">
                {t("pilot.success.bodyPrefix")}{" "}
                {form.fullName || t("pilot.success.bodyFallbackName")}{" "}
                {t("pilot.success.bodyMid1")}{" "}
                <span className="text-foreground">
                  {form.organization || t("pilot.success.bodyFallbackOrg")}
                </span>{" "}
                {t("pilot.success.bodyMid2")}{" "}
                <span className="text-foreground">
                  {form.email || t("pilot.success.bodyFallbackEmail")}
                </span>{" "}
                {t("pilot.success.bodySuffix")}
              </p>
              <Button
                variant="outline"
                className="mt-10"
                onClick={handleReset}
                data-ocid="pilot.submit_another_button"
              >
                {t("pilot.success.submitAnother")}
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
                    {t("pilot.field.organization")}
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
                    {t("pilot.field.country")}
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
                    {t("pilot.field.industry")}
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
                      {t("pilot.placeholder.industry")}
                    </option>
                    {industries.map((industry) => (
                      <option key={industry.value} value={industry.value}>
                        {t(industry.labelKey)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="pilot-use-case" className={fieldLabelClass}>
                    {t("pilot.field.useCase")}
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
                    {t("pilot.field.workload")}
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
                      {t("pilot.placeholder.workload")}
                    </option>
                    {workloads.map((workload) => (
                      <option key={workload.value} value={workload.value}>
                        {t(workload.labelKey)}
                      </option>
                    ))}
                  </select>
                </div>

                <RadioGroup
                  legend={t("pilot.field.sensitiveData")}
                  name="sensitiveData"
                  value={form.sensitiveData}
                  options={yesNoUnsure}
                  onChange={(value) => handleChange("sensitiveData", value)}
                  dataOcid="pilot.sensitive_data"
                />

                <RadioGroup
                  legend={t("pilot.field.localDeployment")}
                  name="localDeployment"
                  value={form.localDeployment}
                  options={yesNoUnsure}
                  onChange={(value) => handleChange("localDeployment", value)}
                  dataOcid="pilot.local_deployment"
                />

                <RadioGroup
                  legend={t("pilot.field.gpuCapacity")}
                  name="gpuCapacity"
                  value={form.gpuCapacity}
                  options={yesNoUnsure}
                  onChange={(value) => handleChange("gpuCapacity", value)}
                  dataOcid="pilot.gpu_capacity"
                />

                <div>
                  <label htmlFor="pilot-timing" className={fieldLabelClass}>
                    {t("pilot.field.timing")}
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
                      {t("pilot.placeholder.timing")}
                    </option>
                    {timings.map((timing) => (
                      <option key={timing.value} value={timing.value}>
                        {t(timing.labelKey)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="pilot-full-name" className={fieldLabelClass}>
                    {t("pilot.field.fullName")}
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
                    {t("pilot.field.role")}
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
                    {t("pilot.field.email")}
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
                    {t("pilot.field.phone")}
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
                {t("pilot.submit")}
              </Button>
            </form>
          )}

          <p className="mx-auto mt-6 max-w-[600px] text-center text-sm leading-relaxed text-muted-foreground">
            {t("pilot.processLine")}
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
  options: { value: string; labelKey: TranslationKey }[];
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
  const { t } = useLanguage();

  return (
    <fieldset>
      <legend className={fieldLabelClass}>{legend}</legend>
      <div className="flex flex-wrap gap-6">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-2 text-sm text-foreground"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className={radioClass}
              data-ocid={`${dataOcid}.${option.value.toLowerCase()}`}
            />
            {t(option.labelKey)}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
