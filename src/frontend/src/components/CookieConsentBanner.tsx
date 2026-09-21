import { Button } from "@/components/Button";
import { useEffect, useState } from "react";

const CONSENT_STORAGE_KEY = "saaas.cookie-consent";

function hasStoredConsent(): boolean {
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY) === "accepted";
  } catch {
    return false;
  }
}

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!hasStoredConsent()) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, "accepted");
    } catch {
      // Storage unavailable (private mode / blocked) — still dismiss for this session.
    }
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <section
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-[#1E293B] bg-[#0D1B2A]"
      data-ocid="cookie_consent.banner"
    >
      <div className="container flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between md:gap-8">
        <p className="text-sm leading-relaxed text-card-foreground">
          This site uses cookies for essential functionality. By continuing to
          use this site, you accept our use of cookies.
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <Button
            type="button"
            variant="primary"
            size="sm"
            onClick={handleAccept}
            className="bg-[#00C8FF] text-[#07090F] hover:bg-[#00C8FF]/90"
            data-ocid="cookie_consent.accept_button"
          >
            Accept
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-[#00C8FF] text-[#00C8FF]"
          >
            <a
              href="https://www.tmu.ai/privacy.php"
              target="_blank"
              rel="noreferrer"
              data-ocid="cookie_consent.learn_more_link"
            >
              Learn More
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
