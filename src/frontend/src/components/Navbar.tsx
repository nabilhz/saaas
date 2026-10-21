import { Button } from "@/components/Button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/i18n";
import { navLinks, resourcesDropdown } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import type { CSSProperties } from "react";
import { useState } from "react";

const dropdownContentStyle: CSSProperties = {
  backgroundColor: "#0D1B2A",
  border: "1px solid #1E293B",
  borderRadius: "6px",
  padding: "4px",
};

const dropdownItemStyle: CSSProperties = {
  color: "#CBD5E1",
  borderRadius: "6px",
  padding: "12px 20px",
};

function ocidSuffix(key: string): string {
  return key.replace(/^nav\./, "").replace(/\./g, "_");
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-sidebar">
      <nav className="container flex h-16 items-center justify-between gap-4 px-4">
        <Link
          to="/"
          className="shrink-0 font-display text-xl font-bold tracking-[0.06em] text-foreground"
          data-ocid="nav.logo"
        >
          SAAAS
        </Link>

        {/* Desktop center links */}
        <div className="hidden min-w-0 items-center gap-[14px] lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="whitespace-nowrap text-[13px] font-medium tracking-[0.04em] transition-colors duration-200 hover:text-primary"
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-sidebar-foreground" }}
              data-ocid={`nav.link.${ocidSuffix(link.labelKey)}`}
            >
              {t(link.labelKey)}
            </Link>
          ))}

          {/* Resources dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className="group inline-flex items-center gap-1 whitespace-nowrap text-[13px] font-medium tracking-[0.04em] text-sidebar-foreground transition-colors duration-200 hover:text-primary data-[state=open]:text-primary"
              data-ocid="nav.dropdown.resources"
            >
              {t(resourcesDropdown.labelKey)}
              <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={10}
              className="min-w-[200px] shadow-lg"
              style={dropdownContentStyle}
              data-ocid="nav.dropdown.resources_menu"
            >
              {resourcesDropdown.items.map((item) =>
                item.external && item.href ? (
                  <DropdownMenuItem
                    key={item.labelKey}
                    asChild
                    className="cursor-pointer text-[13px] font-medium tracking-[0.04em] transition-colors duration-200 hover:text-[#00C8FF] focus:text-[#00C8FF]"
                    style={dropdownItemStyle}
                    data-ocid="nav.dropdown.resources.saaas_overview"
                  >
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {t(item.labelKey)}
                    </a>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem
                    key={item.labelKey}
                    asChild
                    className="cursor-pointer text-[13px] font-medium tracking-[0.04em] transition-colors duration-200 hover:text-[#00C8FF] focus:text-[#00C8FF]"
                    style={dropdownItemStyle}
                    data-ocid="nav.dropdown.resources.resource_library"
                  >
                    <Link to={item.to ?? "/resources"}>{t(item.labelKey)}</Link>
                  </DropdownMenuItem>
                ),
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Language switcher — between the nav links and the CTA buttons */}
        <LanguageSwitcher className="hidden shrink-0 lg:flex" />

        {/* Right CTA buttons */}
        <div className="hidden shrink-0 items-center gap-3 whitespace-nowrap lg:flex">
          <Button
            asChild
            variant="primary"
            size="sm"
            className="h-auto px-[14px] py-[10px] text-[12px]"
            data-ocid="nav.explore_control_room"
          >
            <Link to="/control-room">{t("nav.exploreControlRoom")}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-auto px-[14px] py-[10px] text-[12px]"
            data-ocid="nav.request_pilot"
          >
            <Link to="/pilot">{t("nav.requestPilot")}</Link>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] text-sidebar-foreground transition-colors hover:text-primary lg:hidden"
          aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
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
              data-ocid={`nav.mobile.link.${ocidSuffix(link.labelKey)}`}
            >
              {t(link.labelKey)}
            </Link>
          ))}

          {/* Mobile resources dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className="group inline-flex items-center gap-1 whitespace-nowrap rounded-[4px] px-3 py-3 text-left text-[13px] font-medium tracking-[0.04em] text-sidebar-foreground transition-colors hover:text-primary data-[state=open]:text-primary"
              data-ocid="nav.mobile.dropdown.resources"
            >
              {t(resourcesDropdown.labelKey)}
              <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={6}
              className="min-w-[200px] shadow-lg"
              style={dropdownContentStyle}
              data-ocid="nav.mobile.dropdown.resources_menu"
            >
              {resourcesDropdown.items.map((item) =>
                item.external && item.href ? (
                  <DropdownMenuItem
                    key={item.labelKey}
                    asChild
                    className="cursor-pointer text-[13px] font-medium tracking-[0.04em] transition-colors duration-200 hover:text-[#00C8FF] focus:text-[#00C8FF]"
                    style={dropdownItemStyle}
                    data-ocid="nav.mobile.dropdown.resources.saaas_overview"
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setOpen(false)}
                    >
                      {t(item.labelKey)}
                    </a>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem
                    key={item.labelKey}
                    asChild
                    className="cursor-pointer text-[13px] font-medium tracking-[0.04em] transition-colors duration-200 hover:text-[#00C8FF] focus:text-[#00C8FF]"
                    style={dropdownItemStyle}
                    data-ocid="nav.mobile.dropdown.resources.resource_library"
                  >
                    <Link
                      to={item.to ?? "/resources"}
                      onClick={() => setOpen(false)}
                    >
                      {t(item.labelKey)}
                    </Link>
                  </DropdownMenuItem>
                ),
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile language switcher */}
          <LanguageSwitcher
            className="px-3 py-3"
            onSelect={() => setOpen(false)}
          />

          <div className="mt-3 flex flex-col gap-3 border-t border-border pt-4">
            <Button
              asChild
              variant="primary"
              size="sm"
              data-ocid="nav.mobile.explore_control_room"
            >
              <Link to="/control-room" onClick={() => setOpen(false)}>
                {t("nav.exploreControlRoom")}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              data-ocid="nav.mobile.request_pilot"
            >
              <Link to="/pilot" onClick={() => setOpen(false)}>
                {t("nav.requestPilot")}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
