import { useLanguage } from "@/i18n";
import { LANGUAGES, type Language } from "@/i18n";
import { cn } from "@/lib/utils";

const LANGUAGE_LABELS: Record<Language, string> = {
  en: "EN",
  fr: "FR",
};

const ACTIVE_COLOR = "#00C8FF";
const INACTIVE_COLOR = "#CBD5E1";

interface LanguageSwitcherProps {
  className?: string;
  /** Called after a language is chosen, e.g. to close the mobile menu. */
  onSelect?: () => void;
}

export function LanguageSwitcher({
  className,
  onSelect,
}: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <fieldset
      className={cn("flex items-center gap-1.5", className)}
      data-ocid="nav.language_switcher"
    >
      <legend className="sr-only">{t("nav.languageSwitcher")}</legend>
      {LANGUAGES.map((code, index) => {
        const isActive = code === language;
        return (
          <span key={code} className="flex items-center gap-1.5">
            {index > 0 ? (
              <span
                aria-hidden="true"
                className="text-[13px] font-medium"
                style={{ color: INACTIVE_COLOR }}
              >
                |
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => {
                setLanguage(code);
                onSelect?.();
              }}
              aria-pressed={isActive}
              className="text-[13px] font-semibold tracking-[0.04em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-sidebar"
              style={{ color: isActive ? ACTIVE_COLOR : INACTIVE_COLOR }}
              data-ocid={`nav.language.${code}`}
            >
              {LANGUAGE_LABELS[code]}
            </button>
          </span>
        );
      })}
    </fieldset>
  );
}
