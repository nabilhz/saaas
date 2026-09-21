export interface NavLink {
  label: string;
  to: string;
}

export const navLinks: NavLink[] = [
  { label: "HOME", to: "/" },
  { label: "WHY SAAAS", to: "/why-saaas" },
  { label: "PLATFORM", to: "/platform" },
  { label: "GOVERNANCE", to: "/governance" },
  { label: "SOLUTIONS", to: "/solutions" },
  { label: "COUNTRY NODES", to: "/country-nodes" },
  { label: "RESOURCES", to: "/resources" },
  { label: "ABOUT", to: "/about" },
];

export const footerColumns: {
  title: string;
  links: { label: string; to?: string; href?: string }[];
}[] = [
  {
    title: "Platform",
    links: [
      { label: "Control Room", to: "/platform" },
      { label: "Infrastructure", to: "/platform" },
      { label: "Security", to: "/platform" },
      { label: "Integrations", to: "/platform" },
    ],
  },
  {
    title: "Governance",
    links: [
      { label: "Framework", to: "/governance" },
      { label: "Oversight", to: "/governance" },
      { label: "Compliance", to: "/governance" },
      { label: "Audit", to: "/governance" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Enterprise", to: "/solutions" },
      { label: "Public Sector", to: "/solutions" },
      { label: "Research", to: "/solutions" },
      { label: "Startups", to: "/solutions" },
    ],
  },
  {
    title: "Network",
    links: [
      { label: "Country Nodes", to: "/country-nodes" },
      { label: "Partners", to: "/country-nodes" },
      { label: "Deployments", to: "/country-nodes" },
      { label: "Roadmap", to: "/country-nodes" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Resources", to: "/resources" },
      { label: "Careers", to: "/about" },
      { label: "Contact", to: "/pilot" },
      { label: "Privacy Policy", href: "https://www.tmu.ai/privacy.php" },
      { label: "Terms of Use", href: "https://www.tmu.ai/terms.php" },
    ],
  },
];
