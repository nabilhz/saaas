import { footerColumns } from "@/lib/routes";
import { Link } from "@tanstack/react-router";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-sidebar">
      <div className="container py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="eyebrow mb-5">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => {
                  const linkClassName =
                    "text-sm text-card-foreground transition-colors duration-200 hover:text-primary";
                  const ocid = `footer.link.${column.title.toLowerCase()}.${link.label.toLowerCase().replace(/\s+/g, "_")}`;

                  return (
                    <li key={link.label}>
                      {link.href ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className={linkClassName}
                          data-ocid={ocid}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.to ?? "/"}
                          className={linkClassName}
                          data-ocid={ocid}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-8 text-center">
          <p className="text-sm tracking-[0.04em] text-muted-foreground">
            SAAAS — Sovereign AI. Governed. Managed.
          </p>
          <p className="mt-4 text-xs text-muted-foreground/70">
            © {year}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
              data-ocid="footer.attribution"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
