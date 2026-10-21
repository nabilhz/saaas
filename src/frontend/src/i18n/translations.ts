import type { Language } from "./types";

/**
 * Flat, dot-namespaced translation dictionary.
 *
 * The English map is the source of truth for the key set; the French map is
 * typed against it so a missing or misspelled key is a compile error. Brand and
 * product names (SAAAS, DriftShield, TMU, Control Room, Oblique AI Governance),
 * technical terms (HIC, X/Y/Z, open-weight, API, GPU, token), decision labels
 * (ALLOW, BLOCK, ESCALATE), and email addresses / URLs stay in English in both
 * languages.
 */
const en = {
  // Navigation
  "nav.home": "HOME",
  "nav.whySaaas": "WHY SAAAS",
  "nav.platform": "PLATFORM",
  "nav.governance": "GOVERNANCE",
  "nav.solutions": "SOLUTIONS",
  "nav.countryNodes": "COUNTRY NODES",
  "nav.about": "ABOUT",
  "nav.resources": "RESOURCES",
  "nav.resources.saaasOverview": "SAAAS Overview",
  "nav.resources.resourceLibrary": "Resource Library",
  "nav.exploreControlRoom": "Explore Control Room",
  "nav.requestPilot": "Request a Pilot",
  "nav.openMenu": "Open menu",
  "nav.closeMenu": "Close menu",
  "nav.languageSwitcher": "Language",

  // Footer
  "footer.platform": "Platform",
  "footer.governance": "Governance",
  "footer.solutions": "Solutions",
  "footer.network": "Network",
  "footer.company": "Company",
  "footer.controlRoom": "Control Room",
  "footer.infrastructure": "Infrastructure",
  "footer.security": "Security",
  "footer.integrations": "Integrations",
  "footer.framework": "Framework",
  "footer.oversight": "Oversight",
  "footer.compliance": "Compliance",
  "footer.audit": "Audit",
  "footer.enterprise": "Enterprise",
  "footer.publicSector": "Public Sector",
  "footer.research": "Research",
  "footer.startups": "Startups",
  "footer.countryNodes": "Country Nodes",
  "footer.partners": "Partners",
  "footer.deployments": "Deployments",
  "footer.roadmap": "Roadmap",
  "footer.about": "About",
  "footer.resources": "Resources",
  "footer.careers": "Careers",
  "footer.contact": "Contact",
  "footer.privacyPolicy": "Privacy Policy",
  "footer.termsOfUse": "Terms of Use",
  "footer.tagline": "SAAAS — Sovereign AI. Governed. Managed.",
  "footer.attributionPrefix": "Built with love using",

  // Cookie consent
  "cookie.ariaLabel": "Cookie consent",
  "cookie.message":
    "This site uses cookies for essential functionality. By continuing to use this site, you accept our use of cookies.",
  "cookie.accept": "Accept",
  "cookie.learnMore": "Learn More",

  // Shared
  "common.requestPilot": "Request a Pilot",
  "common.exploreControlRoom": "Explore Control Room",
  "common.explorePlatform": "Explore the Platform",
  "common.contactUs": "Contact Us",
  "common.getStarted": "Get Started",
  "common.readResource": "Read resource",

  // Home
  "home.hero.eyebrow": "SAAAS · SOVEREIGN AI AS A SERVICE",
  "home.hero.title1": "Sovereign AI.",
  "home.hero.title2": "Governed.",
  "home.hero.title3": "Managed.",
  "home.hero.subcopy":
    "Access AI resources appropriate to your organization without surrendering control of your data, institutional knowledge, jurisdiction or operational authority. SAAAS is a managed AI utility combining sovereign deployment options, policy-aware model selection, enterprise knowledge, independent AI governance, controlled execution and operational evidence.",
  "home.hero.primaryButton": "Request a Sovereign AI Pilot",
  "home.hero.microline":
    "Your Data · Your Knowledge · Your Jurisdiction · Your Governance · Appropriate AI Resources.",
  "home.flow.eyebrow": "The Saaas Flow",
  "home.flow.step1": "Customer Mission",
  "home.flow.step2": "Authorized Knowledge",
  "home.flow.step3": "Policy-Aware Routing",
  "home.flow.step4": "AI Resource",
  "home.flow.step5": "X/Y/Z Observation",
  "home.flow.step6": "DriftShield",
  "home.flow.step7": "Authorization",
  "home.flow.step8": "Verified Execution",
  "home.flow.step9": "Evidence",
  "home.flow.caption":
    "The customer brings the mission. SAAAS supplies governed access to appropriate AI resources, authorized knowledge, independent observation, controlled execution and evidence.",
  "home.why.eyebrow": "Why Saaas",
  "home.why.1.title": "Sovereign",
  "home.why.1.copy":
    "Keep sensitive workloads, operational state and evidence within required jurisdictional boundaries where the deployment calls for it.",
  "home.why.2.title": "Economical",
  "home.why.2.copy":
    "Use an appropriate authorized AI resource for each task rather than defaulting every workload to the most expensive option.",
  "home.why.3.title": "Model-Agnostic",
  "home.why.3.copy":
    "Combine locally deployed open-weight resources with approved external or specialized AI services where policy permits.",
  "home.why.4.title": "Locally Informed",
  "home.why.4.copy":
    "Ground services in authorized enterprise, institutional and local knowledge.",
  "home.why.5.title": "Governed",
  "home.why.5.copy":
    "Observe autonomous operation independently of the model and retain defined human and organizational authority.",
  "home.why.6.title": "Managed",
  "home.why.6.copy":
    "SAAAS manages the infrastructure, models, governance, monitoring and service operations.",
  "home.governance.title": "AI should not govern itself.",
  "home.governance.body":
    "Oblique AI Governance independently observes changes, influences and state transitions that may alter the original authorized intent of an autonomous process as work moves through models, agents, knowledge sources, tools and execution environments.",
  "home.governance.emphasis":
    "See what your autonomous AI is doing. Know where it came from. Know how it changed. Decide whether it should proceed.",
  "home.governance.imageAlt":
    "Futuristic control room with server infrastructure lit by cyan ambient lighting",
  "home.axis.x.title": "Behavioral Divergence",
  "home.axis.x.copy":
    "How much is current behavior departing from a defined reference under comparable conditions? X is evidence, not itself the ALLOW/BLOCK decision.",
  "home.axis.y.title": "Genesis Continuity",
  "home.axis.y.copy":
    "Can the current governed state still be traced to its authorized origin?",
  "home.axis.z.title": "Inheritance Continuity",
  "home.axis.z.copy":
    "Has state evolved through a valid and continuous sequence of authorized transitions?",
  "home.sovereignty.eyebrow": "Sovereign AI Defined",
  "home.sovereignty.imageAlt":
    "Institutional data center with dark server racks lit by subtle cyan highlights",
  "home.sovereignty.1.name": "Data",
  "home.sovereignty.1.question": "Where may the information reside?",
  "home.sovereignty.2.name": "Compute",
  "home.sovereignty.2.question": "Where may inference occur?",
  "home.sovereignty.3.name": "Knowledge",
  "home.sovereignty.3.question":
    "Who controls the proprietary or local knowledge supplied to AI?",
  "home.sovereignty.4.name": "Governance",
  "home.sovereignty.4.question":
    "Who determines what autonomous AI is permitted to do?",
  "home.sovereignty.5.name": "Execution",
  "home.sovereignty.5.question":
    "Who authorizes consequential action and verifies what happened?",
  "home.sovereignty.quote":
    "Sovereignty is not merely where the server sits. It is meaningful control across the path from information to AI decision to consequential action.",
  "home.sectors.eyebrow": "One Infrastructure. Many Missions.",
  "home.sectors.title": "Sectors We Serve",
  "home.sector.government": "Government",
  "home.sector.government.copy":
    "Institutional AI without surrendering national control.",
  "home.sector.finance": "Banking & Finance",
  "home.sector.finance.copy":
    "Governed automation with traceable decisions and escalation.",
  "home.sector.healthcare": "Healthcare",
  "home.sector.healthcare.copy":
    "AI assistance with sensitive-data controls and defined human authority.",
  "home.sector.telecom": "Telecommunications",
  "home.sector.telecom.copy":
    "AI-enabled customer and operational workflows at scale.",
  "home.sector.education": "Education",
  "home.sector.education.copy":
    "Affordable governed AI capacity for institutions, teachers and learners.",
  "home.sector.agriculture": "Agriculture",
  "home.sector.agriculture.copy":
    "Localized AI knowledge and services for field and enterprise use.",
  "home.sector.enterprise": "Enterprise & SMEs",
  "home.sector.enterprise.copy":
    "Managed AI capability without building an internal AI infrastructure company.",
  "home.finalCta.title": "Start with one bounded use case.",
  "home.finalCta.subcopy":
    "Prove quality, sovereignty, cost, governance and evidence before scaling.",
  "home.finalCta.primaryButton": "Request a Pilot",
  "home.finalCta.secondaryButton": "Talk to SAAAS",
  "home.value.eyebrow": "Why Sovereign AI",
  "home.value.title": "AI should answer to you — not the other way around",
  "home.value.body":
    "Most enterprises run their most sensitive AI workloads on foreign clouds, surrendering data, models, and decision-making to third parties. SAAAS returns that control to you. We give governments and enterprises the infrastructure, governance, and expertise to own their AI end to end — from raw data to deployed model — while staying fully compliant with the laws and values of your nation.",
  "home.capabilities.eyebrow": "Capabilities",
  "home.capabilities.title": "A complete sovereign AI stack",
  "home.capabilities.body":
    "Every capability you need to build, govern, and scale AI on infrastructure you control.",
  "home.capability.1.title": "Custom Large Language Models",
  "home.capability.1.copy":
    "Train, fine-tune, and deploy sovereign LLMs on infrastructure you control — never routed through third-party clouds.",
  "home.capability.2.title": "Sovereign Inference",
  "home.capability.2.copy":
    "Run inference inside your own borders and data centers, with full auditability over every model, request, and output.",
  "home.capability.3.title": "Governance & Oversight",
  "home.capability.3.copy":
    "Policy-driven guardrails, human-in-the-loop review, and immutable audit trails that keep AI accountable to your mandate.",
  "home.capability.4.title": "Automated Workflows",
  "home.capability.4.copy":
    "Orchestrate AI across your enterprise with deterministic pipelines, role-based access, and transparent, explainable decisions.",
  "home.highlights.eyebrow": "Platform Highlights",
  "home.highlights.title": "Built for sovereignty, engineered for scale",
  "home.highlights.body":
    "The SAAAS platform is architected around one principle: your AI stays yours. Here is how we deliver on that promise.",
  "home.highlight.1.title": "Data Residency",
  "home.highlight.1.copy":
    "Your data never leaves your jurisdiction. Models train and serve on nodes you own, under the laws you answer to.",
  "home.highlight.2.title": "Country Nodes",
  "home.highlight.2.copy":
    "Deploy dedicated national infrastructure with local compute, local governance, and full regulatory alignment.",
  "home.highlight.3.title": "Zero-Trust Security",
  "home.highlight.3.copy":
    "End-to-end encryption, hardware-backed keys, and continuous verification protect every layer of the stack.",
  "home.cta.eyebrow": "Get Started",
  "home.cta.title": "Take command of your AI today",
  "home.cta.body":
    "Explore the control room to see how SAAAS puts sovereignty back in your hands — or request a pilot and deploy your first sovereign model in weeks, not years.",

  // Why SAAAS
  "why.hero.eyebrow": "Why SAAAS",
  "why.hero.title1": "Sovereign AI.",
  "why.hero.title2": "On Your Terms.",
  "why.hero.subcopy":
    "Access AI resources appropriate to your organization without surrendering control of your data, institutional knowledge, jurisdiction or operational authority.",
  "why.benefit.1.title": "Sovereign",
  "why.benefit.1.copy":
    "Keep sensitive workloads, operational state and evidence within required jurisdictional boundaries where the deployment calls for it.",
  "why.benefit.2.title": "Economical",
  "why.benefit.2.copy":
    "Use an appropriate authorized AI resource for each task rather than defaulting every workload to the most expensive option.",
  "why.benefit.3.title": "Model-Agnostic",
  "why.benefit.3.copy":
    "Combine locally deployed open-weight resources with approved external or specialized AI services where policy permits.",
  "why.benefit.4.title": "Locally Informed",
  "why.benefit.4.copy":
    "Ground services in authorized enterprise, institutional and local knowledge.",
  "why.benefit.5.title": "Governed",
  "why.benefit.5.copy":
    "Observe autonomous operation independently of the model and retain defined human and organizational authority.",
  "why.benefit.6.title": "Managed",
  "why.benefit.6.copy":
    "SAAAS manages the infrastructure, models, governance, monitoring and service operations.",
  "why.dimensions.eyebrow": "Sovereign AI Defined",
  "why.dimension.1.name": "Data",
  "why.dimension.1.question": "Where may the information reside?",
  "why.dimension.2.name": "Compute",
  "why.dimension.2.question": "Where may inference occur?",
  "why.dimension.3.name": "Knowledge",
  "why.dimension.3.question":
    "Who controls the proprietary or local knowledge supplied to AI?",
  "why.dimension.4.name": "Governance",
  "why.dimension.4.question":
    "Who determines what autonomous AI is permitted to do?",
  "why.dimension.5.name": "Execution",
  "why.dimension.5.question":
    "Who authorizes consequential action and verifies what happened?",
  "why.quote":
    "Sovereignty is not merely where the server sits. It is meaningful control across the path from information to AI decision to consequential action.",
  "why.cta.eyebrow": "GET STARTED",
  "why.cta.title": "START WITH ONE BOUNDED USE CASE.",
  "why.cta.body":
    "Prove quality, sovereignty, cost, governance and evidence before scaling. Our team responds within 2 business days.",

  // Platform
  "platform.hero.eyebrow": "Platform",
  "platform.hero.title": "Platform",
  "platform.hero.subtitle": "One Governed Gateway. Multiple AI Resources.",
  "platform.hero.subcopy":
    "A layered architecture combining sovereign deployment, knowledge management, policy-aware routing, independent governance and verified execution.",
  "platform.arch.eyebrow": "Service Architecture",
  "platform.arch.title": "How the Platform Works",
  "platform.arch.imageAlt":
    "Layered architecture diagram of the SAAAS platform with cyan accent lines",
  "platform.layer.1.name": "Experience / Enterprise Interfaces",
  "platform.layer.1.role": "Web, mobile, APIs, TMU and customer systems.",
  "platform.layer.1.why":
    "Where users and enterprise systems interact with governed SAAAS services.",
  "platform.layer.2.name": "SAAAS Orchestration",
  "platform.layer.2.role":
    "Workflow, agent and institutional-state coordination.",
  "platform.layer.2.why":
    "Coordinates business context and service workflow across all components.",
  "platform.layer.3.name": "Sovereign Knowledge",
  "platform.layer.3.role":
    "Approved enterprise and local knowledge, retrieval and controlled context.",
  "platform.layer.3.why":
    "Grounds AI responses in authorized institutional knowledge. Customer data is not used to retrain foundation models.",
  "platform.layer.4.name": "Policy-Aware Smart Routing",
  "platform.layer.4.role":
    "Select an appropriate authorized model or AI resource per task.",
  "platform.layer.4.why":
    "Matches each task to the right AI resource based on capability, cost, latency, data classification, jurisdiction and governance state.",
  "platform.layer.5.name": "AI Resource Fabric",
  "platform.layer.5.role":
    "Locally deployed open-weight models plus approved external or specialist resources.",
  "platform.layer.5.why":
    "Avoids single-model dependency. Architecture is provider-neutral.",
  "platform.layer.6.name": "Oblique AI Governance (HIC · X/Y/Z · DriftShield)",
  "platform.layer.6.role":
    "Independent X/Y/Z observations and governance-state reconstruction.",
  "platform.layer.6.why":
    "Governance is independent of the model. The AI does not judge itself.",
  "platform.layer.7.name": "Authorization & Execution Verification",
  "platform.layer.7.role":
    "ALLOW / BLOCK / ESCALATE / HUMAN authority; verify execution corresponds to governed state.",
  "platform.layer.7.why":
    "Separates the governance decision from the execution act and verifies what actually happened.",
  "platform.layer.8.name": "Evidence & Control Room",
  "platform.layer.8.role":
    "Traceability, receipts, audit, replay/review and operational visibility.",
  "platform.layer.8.why":
    "Every governed consequential action leaves a verifiable evidence record.",
  "platform.cta.title": "Explore How Governance Works.",
  "platform.cta.goToGovernance": "Go to Governance",

  // Governance
  "governance.hero.eyebrow": "Governance",
  "governance.hero.title1": "Do AI Governance",
  "governance.hero.title2": "the right way.",
  "governance.hero.subcopy":
    "Measurement provides evidence. DriftShield reconstructs governance-relevant state. Execution authorization is separate. X, Y and Z are independent observations — not self-judgment by the AI.",
  "governance.band":
    "Independent Observation → X / Y / Z → DriftShield Governance-State Reconstruction → TMU Execution Authorization",
  "governance.axes.eyebrow": "Three Independent Axes",
  "governance.axes.title": "What Is Being Observed?",
  "governance.axes.imageAlt":
    "Three intersecting axes in a 3D coordinate space with glowing cyan and blue lines",
  "governance.axis.x.title": "Behavioral Divergence",
  "governance.axis.x.body":
    "How much is current behavior departing from a defined reference under comparable conditions? X is quantitative, repeatable, and independently produced. It is not a risk score and does not make a governance decision.",
  "governance.axis.x.why":
    "The X-axis is provider-neutral. Different independent measurement technologies can connect to X provided their measurements have clearly defined semantics, repeatability and provenance.",
  "governance.axis.y.title": "Genesis State Continuity",
  "governance.axis.y.body":
    "Can the current governed state still be traced back to its authorized origin — the genesis state from which it began?",
  "governance.axis.y.why":
    "Y does not measure behavioral divergence. It provides independent continuity and provenance evidence.",
  "governance.axis.z.title": "State Inheritance Continuity",
  "governance.axis.z.body":
    "Has the state evolved from one stage to the next without breaking the authorized inheritance chain?",
  "governance.axis.z.why":
    "This allows us to distinguish origin continuity from transition continuity: Y concerns where the state comes from; Z concerns whether the path from that origin remains intact.",
  "governance.whyItMatters": "Why it matters",
  "governance.row.oblique.headline": "Oblique AI Governance",
  "governance.row.oblique.body":
    "Oblique AI Governance independently observes changes, influences and state transitions that may alter the original authorized intent of an autonomous process. The AI does not govern itself.",
  "governance.row.oblique.alt":
    "Human hand interacting with a holographic governance panel",
  "governance.row.oversight.headline": "Human Oversight",
  "governance.row.oversight.body":
    "Human authority is preserved as a defined governance state: ALLOW / BLOCK / ESCALATE / HUMAN REVIEW. Escalation triggers and human authority thresholds are configured per deployment.",
  "governance.row.oversight.alt":
    "Professional reviewing data on screens in a dark control room",
  "governance.row.verification.headline": "Execution Verification",
  "governance.row.verification.body":
    "Authorization and execution are separate events. Execution verification confirms that the action performed corresponds to the previously governed state and has not been replayed or altered.",
  "governance.row.verification.alt":
    "Verified checkmark over a flowing data stream",
  "governance.row.audit.headline": "Evidence & Audit",
  "governance.row.audit.body":
    "Every governed consequential action leaves a traceable evidence record: semantic value, origin, authority, evidence, governance basis, resolution status and boundary effect.",
  "governance.row.audit.alt":
    "Audit log with cyan highlighted evidence timeline entries",
  "governance.cta.title": "See Governance in Action.",
  "governance.cta.readOverview": "Read the SAAAS Overview",

  // Control Room
  "controlRoom.disclaimerBanner":
    "Interactive Governance Demonstration — Simulated Data Only",
  "controlRoom.hero.eyebrow": "SAAAS GOVERNANCE",
  "controlRoom.hero.title1": "One glance. The state of",
  "controlRoom.hero.title2": "your AI operation.",
  "controlRoom.scenario.normal": "NORMAL OPERATION",
  "controlRoom.scenario.drift": "BEHAVIORAL DRIFT",
  "controlRoom.scenario.genesis": "GENESIS BREAK",
  "controlRoom.scenario.inheritance": "INHERITANCE BREAK",
  "controlRoom.stat.activeAgents": "Active Agents",
  "controlRoom.stat.governedTasks": "Governed Tasks Today",
  "controlRoom.stat.governanceEvents": "Governance Events",
  "controlRoom.stat.currentStatus": "Current Status",
  "controlRoom.gauge.x": "BEHAVIORAL DIVERGENCE",
  "controlRoom.gauge.y": "GENESIS CONTINUITY",
  "controlRoom.gauge.z": "INHERITANCE CONTINUITY",
  "controlRoom.gauge.titleSuffix": "gauge",
  "controlRoom.decision.allow": "Allow",
  "controlRoom.decision.escalate": "Escalate",
  "controlRoom.decision.humanReview": "Human Review",
  "controlRoom.decision.block": "Block",
  "controlRoom.status.operational": "Operational",
  "controlRoom.status.escalated": "Escalated",
  "controlRoom.status.humanReview": "Human Review",
  "controlRoom.status.blocked": "Blocked",
  "controlRoom.events.2warnings": "2 Warnings",
  "controlRoom.events.4warnings": "4 Warnings",
  "controlRoom.events.1critical": "1 Critical",
  "controlRoom.timeline.timestamp": "Timestamp",
  "controlRoom.timeline.axis": "Axis",
  "controlRoom.timeline.event": "Event",
  "controlRoom.timeline.model": "Model",
  "controlRoom.timeline.decision": "Decision",
  "controlRoom.timeline.stableObservation": "Stable observation",
  "controlRoom.timeline.genesisVerified": "Genesis verified",
  "controlRoom.timeline.driftWarning": "Drift warning",
  "controlRoom.timeline.inheritanceChecked": "Inheritance checked",
  "controlRoom.timeline.genesisConfirmed": "Genesis confirmed",
  "controlRoom.disclaimerBottom":
    "This demonstration uses simulated data only. Production governance metrics require validated HIC/DriftShield integration. Scenario buttons change display values for illustration purposes only.",

  // Solutions
  "solutions.hero.eyebrow": "Solutions",
  "solutions.hero.title": "Solutions",
  "solutions.hero.subcopy":
    "Sovereign AI, purpose-built for the sectors that carry the most sensitive responsibilities. Deploy intelligence on infrastructure you own, under governance you control — across government, finance, healthcare, telecommunications, education, agriculture, and enterprise.",
  "solutions.banner.alt":
    "Composite of a government building facade, hospital corridor, and financial trading floor with cyan accent lighting",
  "solutions.government.sector": "Government",
  "solutions.government.title": "Sovereign AI for Government",
  "solutions.government.body":
    "Deliver public services powered by AI that never leaves national borders. Deploy models on jurisdiction-resident infrastructure with full auditability and democratic oversight.",
  "solutions.government.cap1": "Citizen services and public-sector automation",
  "solutions.government.cap2": "National data residency and sovereignty",
  "solutions.government.cap3": "Parliamentary and regulatory audit trails",
  "solutions.government.cap4": "Cross-agency secure data sharing",
  "solutions.finance.sector": "Financial Services",
  "solutions.finance.title": "Sovereign AI for Finance",
  "solutions.finance.body":
    "Run risk, compliance, and customer intelligence on infrastructure you control. Keep sensitive financial data in-region while meeting the strictest regulatory standards.",
  "solutions.finance.cap1": "Regulatory-grade model governance",
  "solutions.finance.cap2": "Fraud detection and risk analytics",
  "solutions.finance.cap3": "In-region data residency for compliance",
  "solutions.finance.cap4": "Explainable, auditable decisioning",
  "solutions.healthcare.sector": "Healthcare",
  "solutions.healthcare.title": "Sovereign AI for Healthcare",
  "solutions.healthcare.body":
    "Advance clinical intelligence without compromising patient privacy. Process protected health data on sovereign nodes with granular access control and full traceability.",
  "solutions.healthcare.cap1": "Privacy-preserving clinical analytics",
  "solutions.healthcare.cap2": "Protected health data residency",
  "solutions.healthcare.cap3": "Diagnostic and operational intelligence",
  "solutions.healthcare.cap4": "Role-based clinician access control",
  "solutions.telecom.sector": "Telecommunications",
  "solutions.telecom.title": "Sovereign AI for Telecommunications",
  "solutions.telecom.body":
    "AI-enabled customer and operational workflows at scale, with governed data handling and full auditability.",
  "solutions.telecom.cap1": "Customer service automation",
  "solutions.telecom.cap2": "Network operations intelligence",
  "solutions.telecom.cap3": "Governed data handling",
  "solutions.telecom.cap4": "Operational workflow optimization",
  "solutions.education.sector": "Education",
  "solutions.education.title": "Sovereign AI for Education",
  "solutions.education.body":
    "Affordable governed AI capacity for institutions, teachers and learners — on infrastructure the institution controls.",
  "solutions.education.cap1": "Institutional knowledge management",
  "solutions.education.cap2": "Personalized learning assistance",
  "solutions.education.cap3": "Administrative workflow automation",
  "solutions.education.cap4": "Data privacy and student protection",
  "solutions.agriculture.sector": "Agriculture",
  "solutions.agriculture.title": "Sovereign AI for Agriculture",
  "solutions.agriculture.body":
    "Localized AI knowledge and services for field and enterprise use, grounded in local conditions and language.",
  "solutions.agriculture.cap1": "Crop and yield intelligence",
  "solutions.agriculture.cap2": "Local language support",
  "solutions.agriculture.cap3": "Field and supply chain optimization",
  "solutions.agriculture.cap4": "Sovereign agricultural data management",
  "solutions.enterprise.sector": "Enterprise & SMEs",
  "solutions.enterprise.title": "Sovereign AI for Enterprise & SMEs",
  "solutions.enterprise.body":
    "Bring AI into your enterprise on your own terms. Own your models, data, and infrastructure while scaling across teams with governed, centralized control.",
  "solutions.enterprise.cap1": "Private model deployment and versioning",
  "solutions.enterprise.cap2": "Enterprise data governance",
  "solutions.enterprise.cap3": "Centralized policy and billing",
  "solutions.enterprise.cap4": "Self-hosted or hybrid deployment",
  "solutions.cta.eyebrow": "Get Started",
  "solutions.cta.title": "Deploy Sovereign AI in Your Sector",
  "solutions.cta.body":
    "Every deployment is tailored to the regulatory, security, and operational realities of your industry. Start with a pilot on your own infrastructure and keep full control of your intelligence.",

  // Country Nodes
  "countryNodes.hero.eyebrow": "Country Nodes",
  "countryNodes.hero.title": "One SAAAS Standard. Many Sovereign Nations.",
  "countryNodes.hero.subcopy":
    "SAAAS is designed to be replicated as locally operated Country Nodes: common architecture and governance principles, adapted to local infrastructure, law, customers, knowledge and operations.",
  "countryNodes.reference.eyebrow": "Reference Node 01",
  "countryNodes.rwanda.imageAlt":
    "Kigali, Rwanda skyline at night, the site of the first SAAAS reference node",
  "countryNodes.rwanda.name": "Rwanda",
  "countryNodes.rwanda.status": "Planning / Implementation Baseline",
  "countryNodes.rwanda.body":
    "The first reference implementation for the SAAAS Country Node model. Staged deployment following data-center readiness review, hardware benchmarking, platform integration, governance testing and controlled pilot.",
  "countryNodes.sequence.1": "Requirements Alignment",
  "countryNodes.sequence.2": "Data Center Readiness Review",
  "countryNodes.sequence.3": "Hardware Candidate Selection",
  "countryNodes.sequence.4": "Base Platform Installation",
  "countryNodes.sequence.5": "Open-Weight Model Benchmark",
  "countryNodes.sequence.6": "SAAAS Platform Integration",
  "countryNodes.sequence.7": "Governance & Failure Testing",
  "countryNodes.sequence.8": "Controlled Pilot",
  "countryNodes.sequence.9": "Production Readiness Review",
  "countryNodes.future.eyebrow": "Expanding the Network",
  "countryNodes.future.title": "Future Country Nodes",
  "countryNodes.future.globeTitle":
    "Globe icon representing the expanding global network",
  "countryNodes.future.prospective": "Prospective",
  "countryNodes.future.body":
    "Details to be announced. Contact us to explore a Country Node in your jurisdiction.",
  "countryNodes.cta.title": "Interested in a Country Node?",

  // Resources
  "resources.hero.eyebrow": "Resource Library",
  "resources.hero.title": "Resources",
  "resources.hero.subcopy":
    "Whitepapers, case studies, technical guides, and research from the SAAAS team. Everything you need to understand, evaluate, and deploy sovereign AI infrastructure.",
  "resources.1.type": "Whitepaper",
  "resources.1.title": "The Sovereign AI Imperative",
  "resources.1.description":
    "Why nations and enterprises must own the full AI stack — from silicon to inference — and how SAAAS delivers a sovereign alternative to centralized cloud dependency.",
  "resources.2.type": "Technical Guide",
  "resources.2.title": "Control Room Architecture",
  "resources.2.description":
    "A deep dive into the SAAAS control plane: node orchestration, policy enforcement, telemetry pipelines, and the security model that keeps every deployment auditable.",
  "resources.3.type": "Case Study",
  "resources.3.title": "National Deployment Field Report",
  "resources.3.description":
    "How a sovereign cloud provider stood up a country-scale AI node in under ninety days — including governance, compliance, and performance outcomes.",
  "resources.4.type": "Report",
  "resources.4.title": "Governance & Oversight Framework",
  "resources.4.description":
    "The operating model behind transparent AI governance: multi-stakeholder oversight, audit trails, and the accountability mechanisms that earn public trust.",
  "resources.5.type": "Documentation",
  "resources.5.title": "Deploying Your First Node",
  "resources.5.description":
    "Step-by-step guidance for standing up a SAAAS node in your own environment — prerequisites, configuration, security hardening, and first-run validation.",
  "resources.6.type": "Research Brief",
  "resources.6.title": "The Economics of Sovereign Compute",
  "resources.6.description":
    "Total cost of ownership across centralized, hyperscaler, and sovereign models — and why owning your compute is a strategic, not just financial, decision.",
  "resources.cta.eyebrow": "Get in touch",
  "resources.cta.title": "Need a deeper briefing?",
  "resources.cta.body":
    "Our team can walk you through the architecture, governance model, and deployment path for your organization. Request a pilot and we will connect you with the right specialists.",

  // About
  "about.hero.eyebrow": "About SAAAS",
  "about.hero.title1": "Building Sovereign AI",
  "about.hero.title2": "",
  "about.hero.title3": "",
  "about.hero.subcopy":
    "SAAAS exists to give governments and enterprises complete control over their artificial intelligence — from the silicon that powers it to the models that run on it. We are a team of engineers, researchers, and policy thinkers building the infrastructure for a more independent digital future.",
  "about.story.eyebrow": "Our Story",
  "about.story.title": "Founded on a simple conviction",
  "about.story.p1":
    "SAAAS was founded on a conviction that has only grown stronger: the most consequential technology of our era should not be controlled by a handful of distant corporations. As enterprises and nations began depending on AI for their most sensitive work, we saw a dangerous concentration of power — models, data, and decision-making flowing through infrastructure owned by others.",
  "about.story.p2":
    "We started SAAAS to offer a different path: a platform where organizations can deploy and govern AI on infrastructure they control, without sacrificing capability, security, or performance.",
  "about.story.p3":
    "SAAAS is being established as a managed Sovereign AI service, starting with a reference Country Node in Rwanda. We remain focused on one goal: putting the power of intelligence back in the hands of those who own it.",
  "about.mission.eyebrow": "Our Mission",
  "about.mission.title": "Return control of AI to its rightful owners",
  "about.mission.body":
    "Our mission is to make sovereign AI the default — to give every government and enterprise the infrastructure, governance, and expertise to own their intelligence end to end. We believe that when data stays in your perimeter, models answer to your mandate, and decisions remain under human oversight, technology serves people rather than the other way around.",
  "about.values.eyebrow": "Our Values",
  "about.values.title": "The principles that guide us",
  "about.values.body":
    "These values shape every product decision, every partnership, and every line of code we write.",
  "about.value.1.title": "Sovereignty First",
  "about.value.1.body":
    "We believe intelligence is an asset you should own, not a service you rent. Every decision we make starts with returning control to the people and nations we serve.",
  "about.value.2.title": "Trust Through Transparency",
  "about.value.2.body":
    "Sovereign AI demands accountability. We build with open, auditable processes so every model, decision, and pipeline can be examined and verified by those who depend on it.",
  "about.value.3.title": "Human Oversight",
  "about.value.3.body":
    "Technology should amplify human judgment, never replace it. We keep people in command of every critical decision, with governance that is explainable and accountable.",
  "about.value.4.title": "National Alignment",
  "about.value.4.body":
    "Infrastructure must respect the laws, values, and borders of the communities it serves. We design for data residency and regulatory alignment from the ground up.",
  "about.value.5.title": "Long-Term Stewardship",
  "about.value.5.body":
    "We build infrastructure meant to endure for generations. Our work is measured not in quarters, but in the lasting resilience and independence it creates.",
  "about.value.6.title": "Engineering Excellence",
  "about.value.6.body":
    "Sovereignty is only as strong as the systems behind it. We hold ourselves to the highest standards of security, performance, and reliability in everything we ship.",
  "about.cta.eyebrow": "Work With Us",
  "about.cta.title": "Join us in building a sovereign future",
  "about.cta.body":
    "Whether you are a government, an enterprise, or a partner who shares our mission, we would love to work with you. Explore the platform or request a pilot to see sovereign AI in action.",

  // Pilot
  "pilot.hero.eyebrow": "Get Started",
  "pilot.hero.title": "Start with one bounded use case.",
  "pilot.hero.subcopy":
    "Prove quality, sovereignty, cost, governance and evidence before scaling. Our team responds within 2 business days.",
  "pilot.form.iconTitle": "Secure verified pilot request",
  "pilot.success.title": "Request received",
  "pilot.success.bodyPrefix": "Thank you,",
  "pilot.success.bodyFallbackName": "there",
  "pilot.success.bodyMid1": "Your pilot request for",
  "pilot.success.bodyFallbackOrg": "your organization",
  "pilot.success.bodyMid2":
    "has been received. A member of our sovereign AI team will reach out to",
  "pilot.success.bodyFallbackEmail": "you",
  "pilot.success.bodySuffix":
    "within two business days to scope your pilot and next steps.",
  "pilot.success.submitAnother": "Submit another request",
  "pilot.field.organization": "Organization",
  "pilot.field.country": "Country / Jurisdiction",
  "pilot.field.industry": "Industry",
  "pilot.field.useCase": "Primary use case",
  "pilot.field.workload": "Approximate users / workload",
  "pilot.field.sensitiveData": "Sensitive or regulated data?",
  "pilot.field.localDeployment": "Local in-country deployment required?",
  "pilot.field.gpuCapacity": "Existing data center or GPU capacity?",
  "pilot.field.timing": "Desired pilot timing",
  "pilot.field.fullName": "Full name",
  "pilot.field.role": "Role / title",
  "pilot.field.email": "Business email",
  "pilot.field.phone": "Phone (optional)",
  "pilot.placeholder.industry": "Select an industry",
  "pilot.placeholder.workload": "Select a range",
  "pilot.placeholder.timing": "Select a timeframe",
  "pilot.industry.government": "Government",
  "pilot.industry.finance": "Banking & Finance",
  "pilot.industry.healthcare": "Healthcare",
  "pilot.industry.telecom": "Telecommunications",
  "pilot.industry.education": "Education",
  "pilot.industry.agriculture": "Agriculture",
  "pilot.industry.enterprise": "Enterprise",
  "pilot.industry.sme": "SME",
  "pilot.industry.other": "Other",
  "pilot.workload.under50": "Under 50",
  "pilot.workload.50to500": "50–500",
  "pilot.workload.500to5000": "500–5,000",
  "pilot.workload.over5000": "Over 5,000",
  "pilot.timing.within1": "Within 1 month",
  "pilot.timing.1to3": "1–3 months",
  "pilot.timing.3to6": "3–6 months",
  "pilot.timing.flexible": "Flexible",
  "pilot.yesNoUnsure.yes": "Yes",
  "pilot.yesNoUnsure.no": "No",
  "pilot.yesNoUnsure.unsure": "Unsure",
  "pilot.submit": "Submit Pilot Request",
  "pilot.processLine":
    "After submitting: Discovery → Requirements Assessment → Pilot Design → Controlled Pilot → Evidence Report → Production Decision.",

  // Privacy
  "privacy.hero.eyebrow": "Legal",
  "privacy.hero.title": "Privacy Policy & Terms of Use",
  "privacy.hero.subcopy":
    "SAAAS operates under the TMU privacy policy and terms of use.",
  "privacy.readPolicy": "Read Privacy Policy",
  "privacy.readTerms": "Read Terms of Use",
} as const;

export type TranslationKey = keyof typeof en;

const fr: Record<TranslationKey, string> = {
  // Navigation
  "nav.home": "ACCUEIL",
  "nav.whySaaas": "POURQUOI SAAAS",
  "nav.platform": "PLATEFORME",
  "nav.governance": "GOUVERNANCE",
  "nav.solutions": "SOLUTIONS",
  "nav.countryNodes": "NŒUDS NATIONAUX",
  "nav.about": "À PROPOS",
  "nav.resources": "RESSOURCES",
  "nav.resources.saaasOverview": "Présentation de SAAAS",
  "nav.resources.resourceLibrary": "Bibliothèque de ressources",
  "nav.exploreControlRoom": "VOIR LE CONTROL ROOM",
  "nav.requestPilot": "Demander un pilote",
  "nav.openMenu": "Ouvrir le menu",
  "nav.closeMenu": "Fermer le menu",
  "nav.languageSwitcher": "Langue",

  // Footer
  "footer.platform": "Plateforme",
  "footer.governance": "Gouvernance",
  "footer.solutions": "Solutions",
  "footer.network": "Réseau",
  "footer.company": "Société",
  "footer.controlRoom": "Control Room",
  "footer.infrastructure": "Infrastructure",
  "footer.security": "Sécurité",
  "footer.integrations": "Intégrations",
  "footer.framework": "Cadre",
  "footer.oversight": "Supervision",
  "footer.compliance": "Conformité",
  "footer.audit": "Audit",
  "footer.enterprise": "Entreprise",
  "footer.publicSector": "Secteur public",
  "footer.research": "Recherche",
  "footer.startups": "Startups",
  "footer.countryNodes": "Nœuds nationaux",
  "footer.partners": "Partenaires",
  "footer.deployments": "Déploiements",
  "footer.roadmap": "Feuille de route",
  "footer.about": "À propos",
  "footer.resources": "Ressources",
  "footer.careers": "Carrières",
  "footer.contact": "Contact",
  "footer.privacyPolicy": "Politique de confidentialité",
  "footer.termsOfUse": "Conditions d'utilisation",
  "footer.tagline": "SAAAS — IA souveraine. Gouvernée. Gérée.",
  "footer.attributionPrefix": "Créé avec passion grâce à",

  // Cookie consent
  "cookie.ariaLabel": "Consentement aux cookies",
  "cookie.message":
    "Ce site utilise des cookies pour son fonctionnement essentiel. En poursuivant votre navigation, vous acceptez notre utilisation des cookies.",
  "cookie.accept": "Accepter",
  "cookie.learnMore": "En savoir plus",

  // Shared
  "common.requestPilot": "Demander un pilote",
  "common.exploreControlRoom": "Explorer le Control Room",
  "common.explorePlatform": "Explorer la plateforme",
  "common.contactUs": "Nous contacter",
  "common.getStarted": "Commencer",
  "common.readResource": "Lire la ressource",

  // Home
  "home.hero.eyebrow": "SAAAS · SOVEREIGN AI AS A SERVICE",
  "home.hero.title1": "IA SOUVERAINE.",
  "home.hero.title2": "GOUVERNÉE.",
  "home.hero.title3": "GÉRÉE.",
  "home.hero.subcopy":
    "Accédez aux ressources d'IA adaptées à votre organisation sans renoncer au contrôle de vos données, de vos connaissances institutionnelles, de votre juridiction ni de votre autorité opérationnelle. SAAAS est un service d'IA géré qui combine des options de déploiement souverain, une sélection de modèles tenant compte des politiques, les connaissances d'entreprise, une gouvernance indépendante de l'IA, une exécution contrôlée et des preuves opérationnelles.",
  "home.hero.primaryButton": "Demander un pilote d'IA souveraine",
  "home.hero.microline":
    "Vos données · Vos connaissances · Votre juridiction · Votre gouvernance · Des ressources d'IA appropriées.",
  "home.flow.eyebrow": "Le flux SAAAS",
  "home.flow.step1": "Mission du client",
  "home.flow.step2": "Connaissances autorisées",
  "home.flow.step3": "Routage selon les politiques",
  "home.flow.step4": "Ressource d'IA",
  "home.flow.step5": "Observation X/Y/Z",
  "home.flow.step6": "DriftShield",
  "home.flow.step7": "Autorisation",
  "home.flow.step8": "Exécution vérifiée",
  "home.flow.step9": "Preuve",
  "home.flow.caption":
    "Le client apporte la mission. SAAAS fournit un accès gouverné aux ressources d'IA appropriées, aux connaissances autorisées, à une observation indépendante, à une exécution contrôlée et aux preuves.",
  "home.why.eyebrow": "Pourquoi SAAAS",
  "home.why.1.title": "Souverain",
  "home.why.1.copy":
    "Maintenez les charges de travail sensibles, l'état opérationnel et les preuves dans les limites juridictionnelles requises lorsque le déploiement l'exige.",
  "home.why.2.title": "Économique",
  "home.why.2.copy":
    "Utilisez une ressource d'IA autorisée appropriée pour chaque tâche plutôt que de recourir systématiquement à l'option la plus coûteuse.",
  "home.why.3.title": "Indépendant des modèles",
  "home.why.3.copy":
    "Combinez des ressources open-weight déployées localement avec des services d'IA externes ou spécialisés approuvés lorsque la politique le permet.",
  "home.why.4.title": "Ancré localement",
  "home.why.4.copy":
    "Fondez les services sur les connaissances autorisées de l'entreprise, des institutions et du territoire.",
  "home.why.5.title": "Gouverné",
  "home.why.5.copy":
    "Observez le fonctionnement autonome indépendamment du modèle et conservez une autorité humaine et organisationnelle définie.",
  "home.why.6.title": "Géré",
  "home.why.6.copy":
    "SAAAS gère l'infrastructure, les modèles, la gouvernance, la supervision et l'exploitation des services.",
  "home.governance.title": "L'IA ne doit pas se gouverner elle-même.",
  "home.governance.body":
    "Oblique AI Governance observe de manière indépendante les changements, les influences et les transitions d'état susceptibles d'altérer l'intention autorisée d'origine d'un processus autonome, à mesure que le travail traverse les modèles, les agents, les sources de connaissances, les outils et les environnements d'exécution.",
  "home.governance.emphasis":
    "Voyez ce que fait votre IA autonome. Sachez d'où elle vient. Sachez comment elle a changé. Décidez si elle peut poursuivre.",
  "home.governance.imageAlt":
    "Salle de contrôle futuriste avec une infrastructure de serveurs éclairée par un éclairage ambiant cyan",
  "home.axis.x.title": "Divergence comportementale",
  "home.axis.x.copy":
    "Dans quelle mesure le comportement actuel s'écarte-t-il d'une référence définie dans des conditions comparables ? X est une preuve, et non la décision ALLOW/BLOCK elle-même.",
  "home.axis.y.title": "Continuité de genèse",
  "home.axis.y.copy":
    "L'état gouverné actuel peut-il encore être rattaché à son origine autorisée ?",
  "home.axis.z.title": "Continuité d'héritage",
  "home.axis.z.copy":
    "L'état a-t-il évolué selon une séquence valide et continue de transitions autorisées ?",
  "home.sovereignty.eyebrow": "Définition de l'IA souveraine",
  "home.sovereignty.imageAlt":
    "Centre de données institutionnel avec des baies de serveurs sombres éclairées par de subtils reflets cyan",
  "home.sovereignty.1.name": "Données",
  "home.sovereignty.1.question": "Où l'information peut-elle résider ?",
  "home.sovereignty.2.name": "Calcul",
  "home.sovereignty.2.question": "Où l'inférence peut-elle avoir lieu ?",
  "home.sovereignty.3.name": "Connaissances",
  "home.sovereignty.3.question":
    "Qui contrôle les connaissances propriétaires ou locales fournies à l'IA ?",
  "home.sovereignty.4.name": "Gouvernance",
  "home.sovereignty.4.question":
    "Qui détermine ce que l'IA autonome est autorisée à faire ?",
  "home.sovereignty.5.name": "Exécution",
  "home.sovereignty.5.question":
    "Qui autorise une action à conséquences et vérifie ce qui s'est produit ?",
  "home.sovereignty.quote":
    "La souveraineté ne se résume pas à l'emplacement du serveur. C'est un contrôle réel sur tout le parcours, de l'information à la décision d'IA jusqu'à l'action à conséquences.",
  "home.sectors.eyebrow": "Une infrastructure. De nombreuses missions.",
  "home.sectors.title": "Les secteurs que nous servons",
  "home.sector.government": "Secteur public",
  "home.sector.government.copy":
    "Une IA institutionnelle sans renoncer au contrôle national.",
  "home.sector.finance": "Banque et finance",
  "home.sector.finance.copy":
    "Une automatisation gouvernée avec des décisions traçables et une escalade.",
  "home.sector.healthcare": "Santé",
  "home.sector.healthcare.copy":
    "Une assistance par IA avec des contrôles sur les données sensibles et une autorité humaine définie.",
  "home.sector.telecom": "Télécommunications",
  "home.sector.telecom.copy":
    "Des flux clients et opérationnels assistés par IA à grande échelle.",
  "home.sector.education": "Éducation",
  "home.sector.education.copy":
    "Une capacité d'IA gouvernée et abordable pour les institutions, les enseignants et les apprenants.",
  "home.sector.agriculture": "Agriculture",
  "home.sector.agriculture.copy":
    "Des connaissances et des services d'IA localisés pour le terrain et l'entreprise.",
  "home.sector.enterprise": "Entreprises et PME",
  "home.sector.enterprise.copy":
    "Une capacité d'IA gérée sans devoir bâtir une société d'infrastructure d'IA interne.",
  "home.finalCta.title": "Commencez par un cas d'usage délimité.",
  "home.finalCta.subcopy":
    "Prouvez la qualité, la souveraineté, le coût, la gouvernance et les preuves avant de passer à l'échelle.",
  "home.finalCta.primaryButton": "Demander un pilote",
  "home.finalCta.secondaryButton": "Parler à SAAAS",
  "home.value.eyebrow": "Pourquoi l'IA souveraine",
  "home.value.title": "L'IA doit vous obéir — et non l'inverse",
  "home.value.body":
    "La plupart des entreprises exécutent leurs charges de travail d'IA les plus sensibles sur des clouds étrangers, cédant données, modèles et prise de décision à des tiers. SAAAS vous restitue ce contrôle. Nous donnons aux gouvernements et aux entreprises l'infrastructure, la gouvernance et l'expertise nécessaires pour maîtriser leur IA de bout en bout — des données brutes au modèle déployé — tout en restant pleinement conformes aux lois et aux valeurs de votre nation.",
  "home.capabilities.eyebrow": "Capacités",
  "home.capabilities.title": "Une pile d'IA souveraine complète",
  "home.capabilities.body":
    "Toutes les capacités nécessaires pour créer, gouverner et faire évoluer l'IA sur une infrastructure que vous contrôlez.",
  "home.capability.1.title": "Grands modèles de langage sur mesure",
  "home.capability.1.copy":
    "Entraînez, affinez et déployez des LLM souverains sur une infrastructure que vous contrôlez — jamais acheminés via des clouds tiers.",
  "home.capability.2.title": "Inférence souveraine",
  "home.capability.2.copy":
    "Exécutez l'inférence à l'intérieur de vos frontières et de vos centres de données, avec une auditabilité totale sur chaque modèle, requête et résultat.",
  "home.capability.3.title": "Gouvernance et supervision",
  "home.capability.3.copy":
    "Des garde-fous pilotés par les politiques, une revue humaine dans la boucle et des pistes d'audit immuables qui rendent l'IA redevable à votre mandat.",
  "home.capability.4.title": "Flux de travail automatisés",
  "home.capability.4.copy":
    "Orchestrez l'IA dans toute votre entreprise avec des pipelines déterministes, un accès basé sur les rôles et des décisions transparentes et explicables.",
  "home.highlights.eyebrow": "Points forts de la plateforme",
  "home.highlights.title": "Conçue pour la souveraineté, pensée pour l'échelle",
  "home.highlights.body":
    "La plateforme SAAAS est architecturée autour d'un principe : votre IA reste la vôtre. Voici comment nous tenons cette promesse.",
  "home.highlight.1.title": "Résidence des données",
  "home.highlight.1.copy":
    "Vos données ne quittent jamais votre juridiction. Les modèles s'entraînent et s'exécutent sur des nœuds que vous possédez, sous les lois auxquelles vous répondez.",
  "home.highlight.2.title": "Nœuds nationaux",
  "home.highlight.2.copy":
    "Déployez une infrastructure nationale dédiée avec un calcul local, une gouvernance locale et un alignement réglementaire complet.",
  "home.highlight.3.title": "Sécurité zéro confiance",
  "home.highlight.3.copy":
    "Un chiffrement de bout en bout, des clés matérielles et une vérification continue protègent chaque couche de la pile.",
  "home.cta.eyebrow": "Commencer",
  "home.cta.title": "Prenez le commandement de votre IA dès aujourd'hui",
  "home.cta.body":
    "Explorez le Control Room pour voir comment SAAAS vous restitue la souveraineté — ou demandez un pilote et déployez votre premier modèle souverain en quelques semaines, et non en années.",

  // Why SAAAS
  "why.hero.eyebrow": "Pourquoi SAAAS",
  "why.hero.title1": "IA souveraine.",
  "why.hero.title2": "À vos conditions.",
  "why.hero.subcopy":
    "Accédez aux ressources d'IA adaptées à votre organisation sans renoncer au contrôle de vos données, de vos connaissances institutionnelles, de votre juridiction ni de votre autorité opérationnelle.",
  "why.benefit.1.title": "Souverain",
  "why.benefit.1.copy":
    "Maintenez les charges de travail sensibles, l'état opérationnel et les preuves dans les limites juridictionnelles requises lorsque le déploiement l'exige.",
  "why.benefit.2.title": "Économique",
  "why.benefit.2.copy":
    "Utilisez une ressource d'IA autorisée appropriée pour chaque tâche plutôt que de recourir systématiquement à l'option la plus coûteuse.",
  "why.benefit.3.title": "Indépendant des modèles",
  "why.benefit.3.copy":
    "Combinez des ressources open-weight déployées localement avec des services d'IA externes ou spécialisés approuvés lorsque la politique le permet.",
  "why.benefit.4.title": "Ancré localement",
  "why.benefit.4.copy":
    "Fondez les services sur les connaissances autorisées de l'entreprise, des institutions et du territoire.",
  "why.benefit.5.title": "Gouverné",
  "why.benefit.5.copy":
    "Observez le fonctionnement autonome indépendamment du modèle et conservez une autorité humaine et organisationnelle définie.",
  "why.benefit.6.title": "Géré",
  "why.benefit.6.copy":
    "SAAAS gère l'infrastructure, les modèles, la gouvernance, la supervision et l'exploitation des services.",
  "why.dimensions.eyebrow": "Définition de l'IA souveraine",
  "why.dimension.1.name": "Données",
  "why.dimension.1.question": "Où l'information peut-elle résider ?",
  "why.dimension.2.name": "Calcul",
  "why.dimension.2.question": "Où l'inférence peut-elle avoir lieu ?",
  "why.dimension.3.name": "Connaissances",
  "why.dimension.3.question":
    "Qui contrôle les connaissances propriétaires ou locales fournies à l'IA ?",
  "why.dimension.4.name": "Gouvernance",
  "why.dimension.4.question":
    "Qui détermine ce que l'IA autonome est autorisée à faire ?",
  "why.dimension.5.name": "Exécution",
  "why.dimension.5.question":
    "Qui autorise une action à conséquences et vérifie ce qui s'est produit ?",
  "why.quote":
    "La souveraineté ne se résume pas à l'emplacement du serveur. C'est un contrôle réel sur tout le parcours, de l'information à la décision d'IA jusqu'à l'action à conséquences.",
  "why.cta.eyebrow": "POUR COMMENCER",
  "why.cta.title": "COMMENCEZ PAR UN CAS D'USAGE DÉLIMITÉ.",
  "why.cta.body":
    "Prouvez la qualité, la souveraineté, le coût, la gouvernance et les preuves avant de passer à l'échelle. Notre équipe répond sous 2 jours ouvrés.",

  // Platform
  "platform.hero.eyebrow": "Plateforme",
  "platform.hero.title": "Plateforme",
  "platform.hero.subtitle":
    "Une passerelle gouvernée. De multiples ressources d'IA.",
  "platform.hero.subcopy":
    "Une architecture en couches combinant déploiement souverain, gestion des connaissances, routage selon les politiques, gouvernance indépendante et exécution vérifiée.",
  "platform.arch.eyebrow": "Architecture de service",
  "platform.arch.title": "Comment fonctionne la plateforme",
  "platform.arch.imageAlt":
    "Schéma d'architecture en couches de la plateforme SAAAS avec des lignes d'accent cyan",
  "platform.layer.1.name": "Expérience / Interfaces d'entreprise",
  "platform.layer.1.role": "Web, mobile, API, TMU et systèmes clients.",
  "platform.layer.1.why":
    "Là où les utilisateurs et les systèmes d'entreprise interagissent avec les services SAAAS gouvernés.",
  "platform.layer.2.name": "Orchestration SAAAS",
  "platform.layer.2.role":
    "Coordination des flux de travail, des agents et de l'état institutionnel.",
  "platform.layer.2.why":
    "Coordonne le contexte métier et le flux de service entre tous les composants.",
  "platform.layer.3.name": "Connaissances souveraines",
  "platform.layer.3.role":
    "Connaissances d'entreprise et locales approuvées, récupération et contexte contrôlé.",
  "platform.layer.3.why":
    "Fonde les réponses de l'IA sur les connaissances institutionnelles autorisées. Les données clients ne servent pas à réentraîner les modèles de fondation.",
  "platform.layer.4.name": "Routage intelligent selon les politiques",
  "platform.layer.4.role":
    "Sélectionner un modèle ou une ressource d'IA autorisé approprié pour chaque tâche.",
  "platform.layer.4.why":
    "Associe chaque tâche à la bonne ressource d'IA selon la capacité, le coût, la latence, la classification des données, la juridiction et l'état de gouvernance.",
  "platform.layer.5.name": "Couche de ressources d'IA",
  "platform.layer.5.role":
    "Modèles open-weight déployés localement, plus des ressources externes ou spécialisées approuvées.",
  "platform.layer.5.why":
    "Évite la dépendance à un modèle unique. L'architecture est neutre vis-à-vis des fournisseurs.",
  "platform.layer.6.name": "Oblique AI Governance (HIC · X/Y/Z · DriftShield)",
  "platform.layer.6.role":
    "Observations X/Y/Z indépendantes et reconstruction de l'état de gouvernance.",
  "platform.layer.6.why":
    "La gouvernance est indépendante du modèle. L'IA ne se juge pas elle-même.",
  "platform.layer.7.name": "Autorisation et vérification d'exécution",
  "platform.layer.7.role":
    "Autorité ALLOW / BLOCK / ESCALATE / HUMAN ; vérifier que l'exécution correspond à l'état gouverné.",
  "platform.layer.7.why":
    "Sépare la décision de gouvernance de l'acte d'exécution et vérifie ce qui s'est réellement produit.",
  "platform.layer.8.name": "Preuves et Control Room",
  "platform.layer.8.role":
    "Traçabilité, reçus, audit, rejeu/revue et visibilité opérationnelle.",
  "platform.layer.8.why":
    "Chaque action à conséquences gouvernée laisse un enregistrement de preuve vérifiable.",
  "platform.cta.title": "Découvrez comment fonctionne la gouvernance.",
  "platform.cta.goToGovernance": "Aller à la gouvernance",

  // Governance
  "governance.hero.eyebrow": "Gouvernance",
  "governance.hero.title1": "Gouvernez l'IA",
  "governance.hero.title2": "comme il se doit.",
  "governance.hero.subcopy":
    "La mesure fournit des preuves. DriftShield reconstruit l'état pertinent pour la gouvernance. L'autorisation d'exécution est distincte. X, Y et Z sont des observations indépendantes — et non un jugement de l'IA sur elle-même.",
  "governance.band":
    "Observation indépendante → X / Y / Z → Reconstruction de l'état de gouvernance par DriftShield → Autorisation d'exécution TMU",
  "governance.axes.eyebrow": "Trois axes indépendants",
  "governance.axes.title": "Qu'observe-t-on ?",
  "governance.axes.imageAlt":
    "Trois axes sécants dans un espace de coordonnées 3D avec des lignes cyan et bleues lumineuses",
  "governance.axis.x.title": "Divergence comportementale",
  "governance.axis.x.body":
    "Dans quelle mesure le comportement actuel s'écarte-t-il d'une référence définie dans des conditions comparables ? X est quantitatif, reproductible et produit de manière indépendante. Ce n'est pas un score de risque et cela ne prend pas de décision de gouvernance.",
  "governance.axis.x.why":
    "L'axe X est neutre vis-à-vis des fournisseurs. Différentes technologies de mesure indépendantes peuvent se connecter à X, à condition que leurs mesures aient une sémantique, une reproductibilité et une provenance clairement définies.",
  "governance.axis.y.title": "Continuité de l'état de genèse",
  "governance.axis.y.body":
    "L'état gouverné actuel peut-il encore être rattaché à son origine autorisée — l'état de genèse à partir duquel il a commencé ?",
  "governance.axis.y.why":
    "Y ne mesure pas la divergence comportementale. Il fournit des preuves indépendantes de continuité et de provenance.",
  "governance.axis.z.title": "Continuité de l'héritage d'état",
  "governance.axis.z.body":
    "L'état a-t-il évolué d'une étape à la suivante sans rompre la chaîne d'héritage autorisée ?",
  "governance.axis.z.why":
    "Cela permet de distinguer la continuité d'origine de la continuité de transition : Y concerne l'origine de l'état ; Z concerne l'intégrité du chemin depuis cette origine.",
  "governance.whyItMatters": "Pourquoi c'est important",
  "governance.row.oblique.headline": "Oblique AI Governance",
  "governance.row.oblique.body":
    "Oblique AI Governance observe de manière indépendante les changements, les influences et les transitions d'état susceptibles d'altérer l'intention autorisée d'origine d'un processus autonome. L'IA ne se gouverne pas elle-même.",
  "governance.row.oblique.alt":
    "Main humaine interagissant avec un panneau de gouvernance holographique",
  "governance.row.oversight.headline": "Supervision humaine",
  "governance.row.oversight.body":
    "L'autorité humaine est préservée comme un état de gouvernance défini : ALLOW / BLOCK / ESCALATE / HUMAN REVIEW. Les déclencheurs d'escalade et les seuils d'autorité humaine sont configurés par déploiement.",
  "governance.row.oversight.alt":
    "Professionnel examinant des données sur des écrans dans une salle de contrôle sombre",
  "governance.row.verification.headline": "Vérification d'exécution",
  "governance.row.verification.body":
    "L'autorisation et l'exécution sont des événements distincts. La vérification d'exécution confirme que l'action réalisée correspond à l'état gouverné précédent et n'a pas été rejouée ni altérée.",
  "governance.row.verification.alt":
    "Coche de validation au-dessus d'un flux de données",
  "governance.row.audit.headline": "Preuves et audit",
  "governance.row.audit.body":
    "Chaque action à conséquences gouvernée laisse un enregistrement de preuve traçable : valeur sémantique, origine, autorité, preuve, base de gouvernance, statut de résolution et effet de périmètre.",
  "governance.row.audit.alt":
    "Journal d'audit avec des entrées de chronologie de preuves surlignées en cyan",
  "governance.cta.title": "Voyez la gouvernance en action.",
  "governance.cta.readOverview": "Lire la présentation de SAAAS",

  // Control Room
  "controlRoom.disclaimerBanner":
    "Démonstration interactive de gouvernance — données simulées uniquement",
  "controlRoom.hero.eyebrow": "GOUVERNANCE SAAAS",
  "controlRoom.hero.title1": "Un coup d'œil. L'état de",
  "controlRoom.hero.title2": "votre exploitation d'IA.",
  "controlRoom.scenario.normal": "FONCTIONNEMENT NORMAL",
  "controlRoom.scenario.drift": "DÉRIVE COMPORTEMENTALE",
  "controlRoom.scenario.genesis": "RUPTURE DE GENÈSE",
  "controlRoom.scenario.inheritance": "RUPTURE D'HÉRITAGE",
  "controlRoom.stat.activeAgents": "Agents actifs",
  "controlRoom.stat.governedTasks": "Tâches gouvernées aujourd'hui",
  "controlRoom.stat.governanceEvents": "Événements de gouvernance",
  "controlRoom.stat.currentStatus": "Statut actuel",
  "controlRoom.gauge.x": "DIVERGENCE COMPORTEMENTALE",
  "controlRoom.gauge.y": "CONTINUITÉ DE GENÈSE",
  "controlRoom.gauge.z": "CONTINUITÉ D'HÉRITAGE",
  "controlRoom.gauge.titleSuffix": "jauge",
  "controlRoom.decision.allow": "Allow",
  "controlRoom.decision.escalate": "Escalate",
  "controlRoom.decision.humanReview": "Human Review",
  "controlRoom.decision.block": "Block",
  "controlRoom.status.operational": "OPÉRATIONNEL",
  "controlRoom.status.escalated": "Escaladé",
  "controlRoom.status.humanReview": "Human Review",
  "controlRoom.status.blocked": "Bloqué",
  "controlRoom.events.2warnings": "2 AVERTISSEMENTS",
  "controlRoom.events.4warnings": "4 AVERTISSEMENTS",
  "controlRoom.events.1critical": "1 CRITIQUE",
  "controlRoom.timeline.timestamp": "Horodatage",
  "controlRoom.timeline.axis": "Axe",
  "controlRoom.timeline.event": "Événement",
  "controlRoom.timeline.model": "Modèle",
  "controlRoom.timeline.decision": "Décision",
  "controlRoom.timeline.stableObservation": "Observation stable",
  "controlRoom.timeline.genesisVerified": "Genèse vérifiée",
  "controlRoom.timeline.driftWarning": "Avertissement de dérive",
  "controlRoom.timeline.inheritanceChecked": "Héritage vérifié",
  "controlRoom.timeline.genesisConfirmed": "Genèse confirmée",
  "controlRoom.disclaimerBottom":
    "Cette démonstration utilise uniquement des données simulées. Les métriques de gouvernance en production nécessitent une intégration HIC/DriftShield validée. Les boutons de scénario modifient les valeurs affichées à des fins d'illustration uniquement.",

  // Solutions
  "solutions.hero.eyebrow": "Solutions",
  "solutions.hero.title": "Solutions",
  "solutions.hero.subcopy":
    "Une IA souveraine conçue pour les secteurs qui portent les responsabilités les plus sensibles. Déployez l'intelligence sur une infrastructure que vous possédez, sous une gouvernance que vous contrôlez — dans le secteur public, la finance, la santé, les télécommunications, l'éducation, l'agriculture et les entreprises.",
  "solutions.banner.alt":
    "Composition d'une façade de bâtiment public, d'un couloir d'hôpital et d'une salle de marché financière avec un éclairage d'accent cyan",
  "solutions.government.sector": "Secteur public",
  "solutions.government.title": "IA souveraine pour le secteur public",
  "solutions.government.body":
    "Fournissez des services publics propulsés par une IA qui ne quitte jamais les frontières nationales. Déployez des modèles sur une infrastructure résidant dans la juridiction, avec une auditabilité totale et une supervision démocratique.",
  "solutions.government.cap1":
    "Services aux citoyens et automatisation du secteur public",
  "solutions.government.cap2":
    "Résidence nationale des données et souveraineté",
  "solutions.government.cap3":
    "Pistes d'audit parlementaires et réglementaires",
  "solutions.government.cap4":
    "Partage sécurisé de données entre administrations",
  "solutions.finance.sector": "Services financiers",
  "solutions.finance.title": "IA souveraine pour la finance",
  "solutions.finance.body":
    "Exécutez le risque, la conformité et l'intelligence client sur une infrastructure que vous contrôlez. Gardez les données financières sensibles dans la région tout en respectant les normes réglementaires les plus strictes.",
  "solutions.finance.cap1": "Gouvernance des modèles de niveau réglementaire",
  "solutions.finance.cap2": "Détection de fraude et analyse des risques",
  "solutions.finance.cap3":
    "Résidence des données dans la région pour la conformité",
  "solutions.finance.cap4": "Décisions explicables et auditables",
  "solutions.healthcare.sector": "Santé",
  "solutions.healthcare.title": "IA souveraine pour la santé",
  "solutions.healthcare.body":
    "Faites progresser l'intelligence clinique sans compromettre la confidentialité des patients. Traitez les données de santé protégées sur des nœuds souverains avec un contrôle d'accès granulaire et une traçabilité totale.",
  "solutions.healthcare.cap1": "Analyse clinique préservant la confidentialité",
  "solutions.healthcare.cap2": "Résidence des données de santé protégées",
  "solutions.healthcare.cap3": "Aide au diagnostic et à l'exploitation",
  "solutions.healthcare.cap4":
    "Contrôle d'accès des cliniciens basé sur les rôles",
  "solutions.telecom.sector": "Télécommunications",
  "solutions.telecom.title": "IA souveraine pour les télécommunications",
  "solutions.telecom.body":
    "Des flux clients et opérationnels assistés par IA à grande échelle, avec une gestion gouvernée des données et une auditabilité totale.",
  "solutions.telecom.cap1": "Automatisation du service client",
  "solutions.telecom.cap2": "Analyse des opérations réseau",
  "solutions.telecom.cap3": "Gestion gouvernée des données",
  "solutions.telecom.cap4": "Optimisation des flux opérationnels",
  "solutions.education.sector": "Éducation",
  "solutions.education.title": "IA souveraine pour l'éducation",
  "solutions.education.body":
    "Une capacité d'IA gouvernée et abordable pour les institutions, les enseignants et les apprenants — sur une infrastructure que l'institution contrôle.",
  "solutions.education.cap1": "Gestion des connaissances institutionnelles",
  "solutions.education.cap2": "Assistance à l'apprentissage personnalisée",
  "solutions.education.cap3": "Automatisation des flux administratifs",
  "solutions.education.cap4":
    "Confidentialité des données et protection des étudiants",
  "solutions.agriculture.sector": "Agriculture",
  "solutions.agriculture.title": "IA souveraine pour l'agriculture",
  "solutions.agriculture.body":
    "Des connaissances et des services d'IA localisés pour le terrain et l'entreprise, ancrés dans les conditions et la langue locales.",
  "solutions.agriculture.cap1": "Analyse des cultures et des rendements",
  "solutions.agriculture.cap2": "Prise en charge de la langue locale",
  "solutions.agriculture.cap3":
    "Optimisation du terrain et de la chaîne d'approvisionnement",
  "solutions.agriculture.cap4": "Gestion souveraine des données agricoles",
  "solutions.enterprise.sector": "Entreprises et PME",
  "solutions.enterprise.title": "IA souveraine pour les entreprises et PME",
  "solutions.enterprise.body":
    "Intégrez l'IA dans votre entreprise à vos propres conditions. Maîtrisez vos modèles, vos données et votre infrastructure tout en passant à l'échelle avec un contrôle gouverné et centralisé.",
  "solutions.enterprise.cap1": "Déploiement et versionnage de modèles privés",
  "solutions.enterprise.cap2": "Gouvernance des données d'entreprise",
  "solutions.enterprise.cap3": "Politique et facturation centralisées",
  "solutions.enterprise.cap4": "Déploiement auto-hébergé ou hybride",
  "solutions.cta.eyebrow": "Commencer",
  "solutions.cta.title": "Déployez l'IA souveraine dans votre secteur",
  "solutions.cta.body":
    "Chaque déploiement est adapté aux réalités réglementaires, de sécurité et opérationnelles de votre secteur. Commencez par un pilote sur votre propre infrastructure et gardez le contrôle total de votre intelligence.",

  // Country Nodes
  "countryNodes.hero.eyebrow": "Nœuds nationaux",
  "countryNodes.hero.title":
    "Une norme SAAAS. De nombreuses nations souveraines.",
  "countryNodes.hero.subcopy":
    "SAAAS est conçu pour être répliqué sous forme de nœuds nationaux exploités localement : une architecture et des principes de gouvernance communs, adaptés à l'infrastructure, au droit, aux clients, aux connaissances et aux opérations locaux.",
  "countryNodes.reference.eyebrow": "Nœud de référence 01",
  "countryNodes.rwanda.imageAlt":
    "Panorama nocturne de Kigali, au Rwanda, site du premier nœud de référence SAAAS",
  "countryNodes.rwanda.name": "Rwanda",
  "countryNodes.rwanda.status": "Base de planification / mise en œuvre",
  "countryNodes.rwanda.body":
    "La première mise en œuvre de référence du modèle de nœud national SAAAS. Déploiement par étapes après revue de préparation du centre de données, benchmark du matériel, intégration de la plateforme, tests de gouvernance et pilote contrôlé.",
  "countryNodes.sequence.1": "Alignement des exigences",
  "countryNodes.sequence.2": "Revue de préparation du centre de données",
  "countryNodes.sequence.3": "Sélection des candidats matériels",
  "countryNodes.sequence.4": "Installation de la plateforme de base",
  "countryNodes.sequence.5": "Benchmark des modèles open-weight",
  "countryNodes.sequence.6": "Intégration de la plateforme SAAAS",
  "countryNodes.sequence.7": "Tests de gouvernance et de défaillance",
  "countryNodes.sequence.8": "Pilote contrôlé",
  "countryNodes.sequence.9": "Revue de préparation à la production",
  "countryNodes.future.eyebrow": "Étendre le réseau",
  "countryNodes.future.title": "Futurs nœuds nationaux",
  "countryNodes.future.globeTitle":
    "Icône de globe représentant le réseau mondial en expansion",
  "countryNodes.future.prospective": "Potentiel",
  "countryNodes.future.body":
    "Détails à venir. Contactez-nous pour explorer un nœud national dans votre juridiction.",
  "countryNodes.cta.title": "Un nœud national vous intéresse ?",

  // Resources
  "resources.hero.eyebrow": "Bibliothèque de ressources",
  "resources.hero.title": "Ressources",
  "resources.hero.subcopy":
    "Livres blancs, études de cas, guides techniques et recherches de l'équipe SAAAS. Tout ce qu'il faut pour comprendre, évaluer et déployer une infrastructure d'IA souveraine.",
  "resources.1.type": "Livre blanc",
  "resources.1.title": "L'impératif de l'IA souveraine",
  "resources.1.description":
    "Pourquoi les nations et les entreprises doivent maîtriser toute la pile d'IA — du silicium à l'inférence — et comment SAAAS offre une alternative souveraine à la dépendance au cloud centralisé.",
  "resources.2.type": "Guide technique",
  "resources.2.title": "Architecture du Control Room",
  "resources.2.description":
    "Une plongée dans le plan de contrôle SAAAS : orchestration des nœuds, application des politiques, pipelines de télémétrie et modèle de sécurité qui rend chaque déploiement auditable.",
  "resources.3.type": "Étude de cas",
  "resources.3.title": "Rapport de terrain sur un déploiement national",
  "resources.3.description":
    "Comment un fournisseur de cloud souverain a mis en place un nœud d'IA à l'échelle nationale en moins de quatre-vingt-dix jours — gouvernance, conformité et résultats de performance compris.",
  "resources.4.type": "Rapport",
  "resources.4.title": "Cadre de gouvernance et de supervision",
  "resources.4.description":
    "Le modèle opérationnel d'une gouvernance transparente de l'IA : supervision multipartite, pistes d'audit et mécanismes de responsabilité qui gagnent la confiance du public.",
  "resources.5.type": "Documentation",
  "resources.5.title": "Déployer votre premier nœud",
  "resources.5.description":
    "Des conseils étape par étape pour mettre en place un nœud SAAAS dans votre propre environnement — prérequis, configuration, durcissement de la sécurité et validation initiale.",
  "resources.6.type": "Note de recherche",
  "resources.6.title": "L'économie du calcul souverain",
  "resources.6.description":
    "Le coût total de possession selon les modèles centralisé, hyperscaler et souverain — et pourquoi posséder son calcul est une décision stratégique, et pas seulement financière.",
  "resources.cta.eyebrow": "Nous contacter",
  "resources.cta.title": "Besoin d'un briefing plus approfondi ?",
  "resources.cta.body":
    "Notre équipe peut vous présenter l'architecture, le modèle de gouvernance et le parcours de déploiement pour votre organisation. Demandez un pilote et nous vous mettrons en relation avec les bons spécialistes.",

  // About
  "about.hero.eyebrow": "À propos de SAAAS",
  "about.hero.title1": "Bâtir l'IA souveraine",
  "about.hero.title2": "",
  "about.hero.title3": "",
  "about.hero.subcopy":
    "SAAAS existe pour donner aux gouvernements et aux entreprises un contrôle total sur leur intelligence artificielle — du silicium qui l'alimente aux modèles qui s'y exécutent. Nous sommes une équipe d'ingénieurs, de chercheurs et de spécialistes des politiques qui bâtissent l'infrastructure d'un avenir numérique plus indépendant.",
  "about.story.eyebrow": "Notre histoire",
  "about.story.title": "Fondée sur une conviction simple",
  "about.story.p1":
    "SAAAS a été fondée sur une conviction qui n'a fait que se renforcer : la technologie la plus déterminante de notre époque ne doit pas être contrôlée par une poignée de sociétés lointaines. À mesure que les entreprises et les nations ont commencé à dépendre de l'IA pour leurs travaux les plus sensibles, nous avons vu une dangereuse concentration du pouvoir — modèles, données et prise de décision transitant par une infrastructure détenue par d'autres.",
  "about.story.p2":
    "Nous avons créé SAAAS pour offrir une autre voie : une plateforme où les organisations déploient et gouvernent l'IA sur une infrastructure qu'elles contrôlent, sans sacrifier la capacité, la sécurité ni la performance.",
  "about.story.p3":
    "SAAAS se met en place comme un service d'IA souveraine géré, à commencer par un nœud national de référence au Rwanda. Nous restons concentrés sur un seul objectif : remettre le pouvoir de l'intelligence entre les mains de ceux qui le possèdent.",
  "about.mission.eyebrow": "Notre mission",
  "about.mission.title":
    "Rendre le contrôle de l'IA à ses légitimes propriétaires",
  "about.mission.body":
    "Notre mission est de faire de l'IA souveraine la norme — de donner à chaque gouvernement et à chaque entreprise l'infrastructure, la gouvernance et l'expertise nécessaires pour maîtriser leur intelligence de bout en bout. Nous croyons que lorsque les données restent dans votre périmètre, que les modèles répondent à votre mandat et que les décisions demeurent sous supervision humaine, la technologie sert les personnes plutôt que l'inverse.",
  "about.values.eyebrow": "Nos valeurs",
  "about.values.title": "Les principes qui nous guident",
  "about.values.body":
    "Ces valeurs façonnent chaque décision produit, chaque partenariat et chaque ligne de code que nous écrivons.",
  "about.value.1.title": "La souveraineté d'abord",
  "about.value.1.body":
    "Nous croyons que l'intelligence est un actif que vous devez posséder, et non un service que vous louez. Chaque décision que nous prenons commence par rendre le contrôle aux personnes et aux nations que nous servons.",
  "about.value.2.title": "La confiance par la transparence",
  "about.value.2.body":
    "L'IA souveraine exige la responsabilité. Nous construisons avec des processus ouverts et auditables afin que chaque modèle, décision et pipeline puisse être examiné et vérifié par ceux qui en dépendent.",
  "about.value.3.title": "Supervision humaine",
  "about.value.3.body":
    "La technologie doit amplifier le jugement humain, jamais le remplacer. Nous gardons les personnes aux commandes de chaque décision critique, avec une gouvernance explicable et responsable.",
  "about.value.4.title": "Alignement national",
  "about.value.4.body":
    "L'infrastructure doit respecter les lois, les valeurs et les frontières des communautés qu'elle sert. Nous concevons la résidence des données et l'alignement réglementaire dès le départ.",
  "about.value.5.title": "Engagement à long terme",
  "about.value.5.body":
    "Nous bâtissons une infrastructure destinée à durer des générations. Notre travail se mesure non pas en trimestres, mais à l'aune de la résilience et de l'indépendance durables qu'il crée.",
  "about.value.6.title": "Excellence d'ingénierie",
  "about.value.6.body":
    "La souveraineté ne vaut que par la solidité des systèmes qui la sous-tendent. Nous nous imposons les plus hauts standards de sécurité, de performance et de fiabilité dans tout ce que nous livrons.",
  "about.cta.eyebrow": "Travailler avec nous",
  "about.cta.title": "Rejoignez-nous pour bâtir un avenir souverain",
  "about.cta.body":
    "Que vous soyez un gouvernement, une entreprise ou un partenaire qui partage notre mission, nous serions ravis de travailler avec vous. Explorez la plateforme ou demandez un pilote pour voir l'IA souveraine en action.",

  // Pilot
  "pilot.hero.eyebrow": "Commencer",
  "pilot.hero.title": "Commencez par un cas d'usage délimité.",
  "pilot.hero.subcopy":
    "Prouvez la qualité, la souveraineté, le coût, la gouvernance et les preuves avant de passer à l'échelle. Notre équipe répond sous 2 jours ouvrés.",
  "pilot.form.iconTitle": "Demande de pilote sécurisée et vérifiée",
  "pilot.success.title": "Demande reçue",
  "pilot.success.bodyPrefix": "Merci,",
  "pilot.success.bodyFallbackName": "à vous",
  "pilot.success.bodyMid1": "Votre demande de pilote pour",
  "pilot.success.bodyFallbackOrg": "votre organisation",
  "pilot.success.bodyMid2":
    "a bien été reçue. Un membre de notre équipe d'IA souveraine vous contactera à",
  "pilot.success.bodyFallbackEmail": "vous",
  "pilot.success.bodySuffix":
    "sous deux jours ouvrés afin de cadrer votre pilote et les prochaines étapes.",
  "pilot.success.submitAnother": "Envoyer une autre demande",
  "pilot.field.organization": "Organisation",
  "pilot.field.country": "Pays / juridiction",
  "pilot.field.industry": "Secteur",
  "pilot.field.useCase": "Cas d'usage principal",
  "pilot.field.workload": "Utilisateurs / charge de travail approximatifs",
  "pilot.field.sensitiveData": "Données sensibles ou réglementées ?",
  "pilot.field.localDeployment": "Déploiement local dans le pays requis ?",
  "pilot.field.gpuCapacity": "Centre de données ou capacité GPU existants ?",
  "pilot.field.timing": "Calendrier souhaité pour le pilote",
  "pilot.field.fullName": "Nom complet",
  "pilot.field.role": "Rôle / fonction",
  "pilot.field.email": "E-mail professionnel",
  "pilot.field.phone": "Téléphone (facultatif)",
  "pilot.placeholder.industry": "Sélectionnez un secteur",
  "pilot.placeholder.workload": "Sélectionnez une plage",
  "pilot.placeholder.timing": "Sélectionnez un délai",
  "pilot.industry.government": "Secteur public",
  "pilot.industry.finance": "Banque et finance",
  "pilot.industry.healthcare": "Santé",
  "pilot.industry.telecom": "Télécommunications",
  "pilot.industry.education": "Éducation",
  "pilot.industry.agriculture": "Agriculture",
  "pilot.industry.enterprise": "Entreprise",
  "pilot.industry.sme": "PME",
  "pilot.industry.other": "Autre",
  "pilot.workload.under50": "Moins de 50",
  "pilot.workload.50to500": "50–500",
  "pilot.workload.500to5000": "500–5 000",
  "pilot.workload.over5000": "Plus de 5 000",
  "pilot.timing.within1": "Sous 1 mois",
  "pilot.timing.1to3": "1–3 mois",
  "pilot.timing.3to6": "3–6 mois",
  "pilot.timing.flexible": "Flexible",
  "pilot.yesNoUnsure.yes": "Oui",
  "pilot.yesNoUnsure.no": "Non",
  "pilot.yesNoUnsure.unsure": "Je ne sais pas",
  "pilot.submit": "Envoyer la demande de pilote",
  "pilot.processLine":
    "Après l'envoi : Découverte → Évaluation des exigences → Conception du pilote → Pilote contrôlé → Rapport de preuves → Décision de production.",

  // Privacy
  "privacy.hero.eyebrow": "Mentions légales",
  "privacy.hero.title":
    "Politique de confidentialité et conditions d'utilisation",
  "privacy.hero.subcopy":
    "SAAAS opère sous la politique de confidentialité et les conditions d'utilisation de TMU.",
  "privacy.readPolicy": "Lire la politique de confidentialité",
  "privacy.readTerms": "Lire les conditions d'utilisation",
};

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en,
  fr,
};
