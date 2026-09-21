import { Button } from "@/components/Button";
import { navLinks } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-sidebar">
      <nav className="container flex h-16 items-center justify-between gap-6">
        <Link
          to="/"
          className="font-display text-xl font-bold tracking-[0.06em] text-foreground"
          data-ocid="nav.logo"
        >
          SAAAS
        </Link>

        {/* Desktop center links */}
        <div className="hidden items-center gap-4 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="whitespace-nowrap text-[13px] font-medium tracking-[0.04em] transition-colors duration-200 hover:text-primary"
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-sidebar-foreground" }}
              data-ocid={`nav.link.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right CTA buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            variant="primary"
            size="sm"
            data-ocid="nav.explore_control_room"
          >
            <Link to="/control-room">Explore Control Room</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            data-ocid="nav.request_pilot"
          >
            <Link to="/pilot">Request a Pilot</Link>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] text-sidebar-foreground transition-colors hover:text-primary lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          data-ocid="nav.menu_toggle"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border bg-sidebar transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[80vh]" : "max-h-0 border-t-0",
        )}
      >
        <div className="container flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="whitespace-nowrap rounded-[4px] px-3 py-3 text-[13px] font-medium tracking-[0.04em] transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-sidebar-foreground" }}
              data-ocid={`nav.mobile.link.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-3 border-t border-border pt-4">
            <Button
              asChild
              variant="primary"
              size="sm"
              data-ocid="nav.mobile.explore_control_room"
            >
              <Link to="/control-room" onClick={() => setOpen(false)}>
                Explore Control Room
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              data-ocid="nav.mobile.request_pilot"
            >
              <Link to="/pilot" onClick={() => setOpen(false)}>
                Request a Pilot
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
