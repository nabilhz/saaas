import type { TranslationKey } from "@/i18n";

export interface NavLink {
  labelKey: TranslationKey;
  to: string;
}

export interface NavDropdownItem {
  labelKey: TranslationKey;
  to?: string;
  href?: string;
  external?: boolean;
}

export interface NavDropdown {
  labelKey: TranslationKey;
  items: NavDropdownItem[];
}

export const navLinks: NavLink[] = [
  { labelKey: "nav.home", to: "/" },
  { labelKey: "nav.whySaaas", to: "/why-saaas" },
  { labelKey: "nav.platform", to: "/platform" },
  { labelKey: "nav.governance", to: "/governance" },
  { labelKey: "nav.solutions", to: "/solutions" },
  { labelKey: "nav.countryNodes", to: "/country-nodes" },
  { labelKey: "nav.about", to: "/about" },
];

export const resourcesDropdown: NavDropdown = {
  labelKey: "nav.resources",
  items: [
    {
      labelKey: "nav.resources.saaasOverview",
      href: "https://tmu.ai/docs/SovereignAI-as-a-service.pdf",
      external: true,
    },
    { labelKey: "nav.resources.resourceLibrary", to: "/resources" },
  ],
};

export const footerColumns: {
  title: string;
  titleKey: TranslationKey;
  links: { labelKey: TranslationKey; to?: string; href?: string }[];
}[] = [
  {
    title: "Platform",
    titleKey: "footer.platform",
    links: [
      { labelKey: "footer.controlRoom", to: "/control-room" },
      { labelKey: "footer.infrastructure", to: "/platform" },
      { labelKey: "footer.security", to: "/platform" },
      { labelKey: "footer.integrations", to: "/platform" },
    ],
  },
  {
    title: "Governance",
    titleKey: "footer.governance",
    links: [
      { labelKey: "footer.framework", to: "/governance" },
      { labelKey: "footer.oversight", to: "/governance" },
      { labelKey: "footer.compliance", to: "/governance" },
      { labelKey: "footer.audit", to: "/governance" },
    ],
  },
  {
    title: "Solutions",
    titleKey: "footer.solutions",
    links: [
      { labelKey: "footer.enterprise", to: "/solutions" },
      { labelKey: "footer.publicSector", to: "/solutions" },
      { labelKey: "footer.research", to: "/solutions" },
      { labelKey: "footer.startups", to: "/solutions" },
    ],
  },
  {
    title: "Network",
    titleKey: "footer.network",
    links: [
      { labelKey: "footer.countryNodes", to: "/country-nodes" },
      { labelKey: "footer.partners", to: "/country-nodes" },
      { labelKey: "footer.deployments", to: "/country-nodes" },
      { labelKey: "footer.roadmap", to: "/country-nodes" },
    ],
  },
  {
    title: "Company",
    titleKey: "footer.company",
    links: [
      { labelKey: "footer.about", to: "/about" },
      { labelKey: "footer.resources", to: "/resources" },
      { labelKey: "footer.careers", to: "/about" },
      { labelKey: "footer.contact", to: "/pilot" },
      {
        labelKey: "footer.privacyPolicy",
        href: "https://www.tmu.ai/privacy.php",
      },
      { labelKey: "footer.termsOfUse", href: "https://www.tmu.ai/terms.php" },
    ],
  },
];
