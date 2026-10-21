# Project Guidance

## User Preferences

- Surgical, minimal edits: change only what is requested and leave everything else untouched
- Match exact requested colors, borders, radii, padding and font weights for new UI elements
- Professional, natural, native-quality French for government and enterprise readers, with consistent terminology across pages
- Keep brand and product names, technical terms, decision labels, email addresses and URLs in English in the French version
- The French version must keep the same design, layout, colors, fonts and images, with navigation links on one line

## Accepted Requirements

- EN | FR language switcher in the navigation bar between the nav links and the two CTA buttons
- Active language in #00C8FF, inactive in #CBD5E1
- Instant whole-site language switch without page reload
- Language choice saved in the browser and kept across navigation and return visits
- Default language English
- Full French translation of all visible text on every page, present and future
- Professional native-quality French for government and enterprise readers with consistent terminology
- Brand names, technical terms, decision labels and emails/URLs kept in English
- Control Room labels, scenario buttons and descriptive text translated; X/Y/Z and DriftShield kept in English
- Identical design, layout, colors, fonts and images in the French version
- Navigation links stay on one line

## Verified Commands

- **typecheck**: `pnpm typecheck`
- **fix**: `pnpm fix`
- **build**: `pnpm build`

## Learnings

- The app is frontend-only (no backend wasm); the tester's PocketIC backend lane skips with no_backend_wasm
- Nav items are data-driven from navLinks/resourcesDropdown in src/frontend/src/lib/routes.ts; the Resources item is a dropdown, not a direct link
- The Button component renders labels uppercase via CSS, so title-case source text displays as uppercase
- Radix dropdown items need explicit hover:/focus: classes for hover text color since inline styles cannot express pseudo-states
- The site is bilingual via src/frontend/src/i18n (types.ts, translations.ts, LanguageProvider.tsx, index.ts) exporting LanguageProvider, useLanguage, translations, TranslationKey, Language, LANGUAGES, DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY and isLanguage; the EN | FR toggle lives in src/frontend/src/components/LanguageSwitcher.tsx and is rendered in Navbar.tsx between the nav links and the CTA buttons on desktop and in the mobile menu
- useLanguage must return a default English context rather than throw, because tests render pages like ControlRoomPage standalone without a provider
- Characterization tests import footerColumns and read .title, so keep an English title field alongside titleKey when adding i18n keys to route config
- ControlRoomPage scenario labels and decision badges resolve via controlRoom.scenario.* and controlRoom.decision.* keys; the FR dictionary translates the scenario buttons while X/Y/Z and DriftShield stay English
- The tester's PocketIC backend lane skips with no_backend_wasm on this frontend-only app; the root test script is pnpm test and the frontend suite runs with vitest
- The FR nav CTA label lives at translations.ts nav.exploreControlRoom; the second CTA is nav.requestPilot
- Navbar CTA Buttons use size=sm (h-9 px-4 text-xs); to honor explicit padding/font overrides add h-auto px-[14px] py-[10px] text-[12px] via className
- Nav row overflow at 1280px is fixed with shrink-0 on the logo/language/CTA groups, min-w-0 on the center links group, gap-4 and px-4 on the container
- Footer.tsx renders the caffeine attribution prefix via t("footer.attributionPrefix") so the FR footer reads 'Créé avec passion grâce à caffeine.ai'
- The FR dictionary is typed as Record<TranslationKey,string>, so adding a key to en requires the matching fr entry or typecheck fails
- HomePage renders only through the finalCta band; home.value/capabilities/highlights/cta keys remain in translations but are unrendered
- Two pre-existing vitest suites time out at 5000ms (site.test.tsx route sweep and cookieConsentCharacterization.test.tsx route headings); they are not caused by content edits
