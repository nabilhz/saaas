import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { useLanguage } from "@/i18n";
import { ExternalLink } from "lucide-react";

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <>
      <Section variant="hero">
        <PageHeader
          eyebrow={t("privacy.hero.eyebrow")}
          title={t("privacy.hero.title")}
          subcopy={t("privacy.hero.subcopy")}
        />
      </Section>

      <Section variant="cta">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" data-ocid="privacy.policy.primary_button">
            <a
              href="https://www.tmu.ai/privacy.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("privacy.readPolicy")}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            data-ocid="privacy.terms.secondary_button"
          >
            <a
              href="https://www.tmu.ai/terms.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("privacy.readTerms")}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </Section>
    </>
  );
}
