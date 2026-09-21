# Design Brief

## Direction

SAAAS — Sovereign AI as a Service. A dark, premium, sovereign-AI corporate site: electric-cyan accents on near-black navy, engineered for authority and control.

## Tone

Refined, technical, minimal — a control-plane aesthetic with sharp uppercase display type and cyan used sparingly for emphasis.

## Differentiation

The electric-cyan-on-near-black "control room" language — a sovereign AI brand that feels like mission control, not a generic SaaS landing.

## Color Palette

| Token      | OKLCH            | Role                              |
| ---------- | ---------------- | --------------------------------- |
| background | 0.035 0.005 255  | Page bg #07090F                   |
| muted      | 0.062 0.012 255  | Alt section bg #0D1120            |
| card       | 0.095 0.02 255   | Card bg #111827                   |
| primary    | 0.775 0.15 220   | Electric cyan #00C8FF accent/CTA  |
| secondary  | 0.25 0.085 255   | Deep blue #1A3A6B                  |
| foreground | 1 0 0            | Headline #FFFFFF                  |
| muted-foreground | 0.43 0.028 255 | Muted label #5A6A80            |
| border     | 0.17 0.02 255    | Card border #1E293B               |
| sidebar    | 0.037 0.005 255  | Nav bg #070910                    |
| sidebar-foreground | 0.82 0.018 255 | Nav links #CBD5E1             |
| success    | 0.72 0.16 150    | Green gauge #22C55E (Control Room)|
| warning    | 0.7 0.16 75      | Amber gauge #F59E0B (Control Room)|
| badge-allow | 0.28 0.09 150  | ALLOW badge bg #14532D            |
| badge-escalate | 0.25 0.09 55 | ESCALATE badge bg #451A03         |
| badge-block | 0.24 0.11 25   | BLOCK badge bg #450A0A            |

## Typography

- Display: Space Grotesk — headlines, weight 700-800, uppercase, 0.06em tracking (unchanged)
- Body: DM Sans — base/body 16px, weight 400, line-height 1.75, #A8B4C8
- Mono: JetBrains Mono — accent labels, axis names, badges, card number labels, uppercase
- Scale: hero `display-headline text-5xl md:text-7xl` (unchanged), section main headline `text-3xl md:text-5xl` (unchanged), section subheadline/description `.subheadline` 18px, nav links 15px, eyebrow `.eyebrow` 13px / 0.12em, card number labels `.accent-label` 14px, body 16px

## Elevation & Depth

Layered near-black surfaces (page → card → nav) separated by hairline slate borders and subtle drop shadows; no neon glow.

## Structural Zones

| Zone    | Background            | Border           | Notes                                     |
| ------- | --------------------- | ---------------- | ----------------------------------------- |
| Header  | #070910 (sidebar)     | border-b #1E293B | Fixed nav, cyan CTA buttons               |
| Content | #07090F (background)  | —                | Alternate sections to #0D1120 (muted)     |
| Cards   | #111827 (card)        | 1px #1E293B      | Hover border → #00C8FF                    |
| Footer  | #07090F (background)  | border-t #1E293B | Five columns, centered tagline #5A6A80    |

## Spacing & Rhythm

Section padding tiers: hero `.section-hero` 100px top/bottom, content `.section-content` 72px top/bottom, CTA band `.section-cta` 64px top/bottom. Card grids `gap-6`; generous whitespace for a premium, spacious feel.

## Component Patterns

- Buttons: primary solid #00C8FF with #07090F text; secondary outlined 1px #00C8FF with cyan text; both radius 4px
- Cards: radius 4px, #111827 bg, #1E293B border, hover border → cyan
- Badges: JetBrains Mono uppercase cyan accent labels

## Motion

- Entrance: `animate-fade-up` on hero and section content
- Hover: card border → cyan, nav link text → cyan (no bg change), 0.3s smooth
- Decorative: subtle ambient network/glow behind hero only

## Platform Page

| Zone       | Background   | Border              | Notes                                                        |
| ---------- | ------------ | ------------------- | ------------------------------------------------------------ |
| Hero       | #07090F      | —                   | Server-room bg image at 0.12 opacity, PLATFORM eyebrow #5A6A80, headline 'ONE GOVERNED GATEWAY. MULTIPLE AI RESOURCES.' white 800 uppercase, subheadline #A8B4C8 max-width 680px centered |
| Stack      | #0D1120      | —                   | Centered architecture diagram image, 8 horizontal layer rows alternating #111827/#0D1120 with 1px #1E293B bottom border, hover left accent 3px #00C8FF |
| CTA band   | #07090F      | —                   | Centered, padding 80px, headline 'EXPLORE HOW GOVERNANCE WORKS.', GO TO GOVERNANCE outline + REQUEST A PILOT solid cyan |

- Layer rows: number #5A6A80, layer name white 700 uppercase, role #A8B4C8, WHY IT MATTERS note #00C8FF small uppercase
- Diagram image: centered, max-width 680px, radius 12px, cyan glow `0 0 28px rgba(0,200,255,0.15)`

## Control Room Page

| Zone            | Background | Border              | Notes                                                              |
| --------------- | ---------- | ------------------- | ------------------------------------------------------------------ |
| Top disclaimer | #1A3A6B    | border-b 2px #00C8FF | Full-width, white text, 12px padding, centered                     |
| Page header     | #07090F    | —                   | Dark control-room/NOC bg image at 0.10 opacity, SAAAS GOVERNANCE eyebrow #5A6A80, headline 'ONE GLANCE. THE STATE OF YOUR AI OPERATION.' white 800 uppercase |
| Scenario selector | #0D1120  | border-b #1E293B    | 4 buttons, 12px gap, 20px padding; inactive border #1E293B text #A8B4C8 bg #111827 radius 4px; active border #00C8FF bg #00C8FF text #07090F weight 700 |
| Status bar      | #111827    | 1px #1E293B radius 8 | 4 stat boxes, 20px padding, 24px auto margin; labels #5A6A80 uppercase small, values white 700 large |
| Gauges & badge  | #07090F    | —                   | 3 circular arc gauges, labels #00C8FF uppercase below; decision badge radius 6px padding 12px 32px weight 700 uppercase letter-spacing 0.1em |
| Event timeline  | #111827    | 1px #1E293B radius 8 | Mono #A8B4C8 small, header #5A6A80 uppercase; ALLOW badge bg #14532D text #22C55E; ESCALATE badge bg #451A03 text #F59E0B; BLOCK bg #450A0A text #EF4444 (radius 4px padding 2px 8px) |
| Bottom disclaimer | #07090F  | —                   | Centered #5A6A80 small, 24px padding                              |

- Gauge arc colors: cyan #00C8FF (healthy), green #22C55E (allow), amber #F59E0B (escalate), red #EF4444 (block) — driven by the active scenario
- Self-contained page: reuses existing tokens for #07090F/#0D1120/#111827/#1E293B/#5A6A80/#A8B4C8/#00C8FF; adds success/warning/badge tokens only

## Country Nodes Page

| Zone           | Background | Border            | Notes                                                                  |
| -------------- | ---------- | ----------------- | ---------------------------------------------------------------------- |
| Hero           | #07090F    | —                 | Earth-at-night world-map bg image at 0.15 opacity, muted COUNTRY NODES eyebrow #5A6A80, headline 'ONE SAAAS STANDARD. MANY SOVEREIGN NATIONS.' white 800 uppercase, subheadline #A8B4C8 max-width 680px centered |
| Rwanda node    | #0D1120    | —                 | Split layout: left Kigali/data-center photo (dark-blue CSS filter + cyan glow border), right cyan badge + RWANDA name + status badge + description + 9-item numbered sequence with cyan numbers |
| Future nodes   | #07090F    | —                 | Globe icon + 4 prospective placeholder cards in a 2x2 grid             |
| CTA band       | #0D1120    | —                 | Centered, padding 80px, headline 'INTERESTED IN A COUNTRY NODE?', cyan CONTACT US solid button |

- Rwanda photo: radius 12px, dark-blue filter (deep blue overlay), cyan glow `0 0 28px rgba(0,200,255,0.15)` border
- Implementation sequence: 9 numbered rows, cyan JetBrains Mono numbers, white item titles, #A8B4C8 descriptions, 1px #1E293B dividers
- Future node cards: #111827 bg, 1px #1E293B border, radius 4px, hover border → cyan, muted country placeholder labels

## Pilot Page

| Zone     | Background | Border            | Notes                                                                  |
| -------- | ---------- | ----------------- | ---------------------------------------------------------------------- |
| Hero     | #07090F    | —                 | Dark business-meeting bg image at 0.10 opacity, muted GET STARTED eyebrow #5A6A80, headline 'START WITH ONE BOUNDED USE CASE.' white 800 uppercase, subheadline #A8B4C8 max-width 680px centered |
| Form     | #0D1120    | —                 | Small cyan document-with-checkmark-and-shield SVG icon, form container #111827 1px #1E293B border radius 12px padding 48px max-width 720px, 13 fields (text/select/textarea/radio/email), cyan-accented radios, full-width cyan SUBMIT PILOT REQUEST button, muted process-steps line below |

- Form container: radius 12px (distinct from 4px cards), max-width 720px, 48px padding, centered
- Inputs: bg-background #07090F, 1px #1E293B border, radius 4px, focus ring cyan; labels #5A6A80 uppercase small
- Radio buttons: cyan accent when selected; text #A8B4C8
- Submit: full-width primary solid #00C8FF with #07090F text, uppercase, weight 700
- Process steps line: 3-4 muted #5A6A80 steps below form, mono uppercase small

## Constraints

- Dark-only theme; tokens are the source of truth, no raw hex in components
- Never use pure black (#000000) — main #07090F, alternate #0D1120, cards #111827
- Use semantic Tailwind tokens only (bg-background, text-foreground, border-border)
- Cyan reserved for accents/CTAs/active nav states, never for large fills
- Active nav link = #00C8FF text only (no bg/box/underline); other links #CBD5E1; hover #00C8FF no bg change
- Do NOT build interactive control-room dashboard or localized/multilingual content
- Do NOT build live production governance metrics integration

## Signature Detail

The electric-cyan "control room" accent language — mission-control authority on near-black, with mono uppercase axis labels.
