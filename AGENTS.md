# Project Guidance

## User Preferences

- Surgical, minimal edits: change only what is requested and leave everything else untouched
- Match exact requested colors, borders, radii, padding and font weights for new UI elements

## Verified Commands

- **typecheck**: `mops check --fix`
- **build**: `mops build`

## Learnings

- The app is frontend-only (no backend wasm); the tester's PocketIC backend lane skips with no_backend_wasm
- Nav items are data-driven from navLinks/resourcesDropdown in src/frontend/src/lib/routes.ts; the Resources item is a dropdown, not a direct link
- The Button component renders labels uppercase via CSS, so title-case source text displays as uppercase
- Radix dropdown items need explicit hover:/focus: classes for hover text color since inline styles cannot express pseudo-states
