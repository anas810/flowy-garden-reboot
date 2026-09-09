# Rebuild the Central Bank site from GitHub, unchanged

Copy the public repo `anas810/flowy-garden-replica-6cd118c5` into this project exactly as it is — same page, same text, same visuals, no additions or edits.

## What the site is

A single interactive page explaining the Standard Reserve "central bank": one switch flips between Expansion (positive net flow) and Contraction (negative net flow), and five animated panels react to it — the bank canvas, issuance rate, fee routing, licenses, and exits.

## What gets copied

- The home page and its page title/description
- The five custom panels: BankCanvas, IssuanceRate, FeeRouting, Licenses, Exits
- The site-wide shell and the full color/typography styling
- Supporting UI building blocks and any fonts/config the page depends on

## Technical notes

- Source repo uses the identical TanStack Start template as this project, so files transfer byte-for-byte with no porting work.
- Files to bring over verbatim: `src/routes/index.tsx`, `src/routes/__root.tsx`, `src/styles.css`, `src/components/{BankCanvas,Exits,FeeRouting,IssuanceRate,Licenses}.tsx`, plus `src/components/ui/*`, `components.json`, and `public/robots.txt`.
- Match `package.json` dependencies from the source repo and install any missing ones (Radix set, recharts, sonner, cmdk, vaul, react-hook-form, zod, date-fns, embla, etc.).
- Leave generated files (`src/routeTree.gen.ts`) to regenerate; do not hand-edit.

## Verification

Build/typecheck clean, then open the page and toggle between the two states to confirm both variants render as in the original.
