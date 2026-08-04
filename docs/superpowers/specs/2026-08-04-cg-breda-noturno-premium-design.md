# CG Breda Noturno Premium Design

## Context

The CG Breda site is a Next.js App Router project with a single landing page at `src/app/page.tsx`, global styling in `src/app/globals.css`, and the brand logo available at `public/cg-breda-logo.png`.

The current page already contains the working site content: hero copy, authority proof points, service cards, segment list, method timeline, compliance panel, FAQ, and contact block. The redesign should preserve that content and structure while changing the visual system to match the attached brand reference and the approved direction: **Noturno premium**.

## Goal

Make the site feel more sophisticated, intimate, serious, and authoritative. The page should look like a premium accounting advisory brand, not a generic corporate template.

The redesign should:

- Replace the current green-led palette with a deep navy, warm ivory, aged gold, and dark bronze palette.
- Use the provided CG Breda logo in a way that works on a dark premium interface.
- Keep the existing page sections and business content.
- Add modern visual effects with restraint: glass panels, soft light sweeps, subtle texture, refined hover states, and depth.
- Preserve readability, responsive behavior, and reduced-motion support.

## Visual Direction

The approved direction is **Noturno premium**:

- Mood: low light, high contrast, warm highlights, executive seriousness.
- Surface language: dark glass, fine borders, controlled reflections, deep shadows.
- Editorial influence: large serif typography, disciplined spacing, restrained gold emphasis.
- Intimacy: warm ivory text and subtle photographic lighting instead of cold blue-white technology styling.

The design should avoid a futuristic fintech look. It should feel modern, but anchored in trust, discretion, and senior professional judgment.

## Palette

Use these colors as the core tokens:

- `--night`: `#050914` for the deepest page background.
- `--navy`: `#0f1726` for major dark sections and panels.
- `--navy-soft`: `#172033` for layered dark surfaces.
- `--ivory`: `#f4efe7` for warm high-contrast text and light areas.
- `--warm-text`: `#d8ccb8` for secondary text on dark backgrounds.
- `--gold`: `#c6a15b` for primary accents and CTAs.
- `--bronze`: `#8f6f3f` for quieter accent lines and eyebrows.
- `--line-dark`: `rgba(244, 239, 231, 0.16)` for dark hairlines.
- `--line-light`: `rgba(15, 23, 38, 0.14)` for light-section hairlines.

Ivory sections should be used as deliberate breathing room, not as the default page background. Most of the experience should read as premium dark.

## Typography

Keep implementation simple and stable by using system-available fonts:

- Display: Georgia / Times-style serif for hero and major section headings.
- Body: Aptos / Segoe UI / Arial system stack for readable Portuguese copy.
- Utility: the body stack in smaller uppercase labels for navigation, tags, and metadata.

Typography should be more editorial than dashboard-like:

- Hero heading should stay large, serif, and tight.
- Section headings should have strong scale but enough line height to avoid crowding on mobile.
- Labels should use uppercase sparingly and track authority through spacing, not decorative excess.

## Logo Adaptation

Use `public/cg-breda-logo.png` as the brand asset.

The logo must be placed on dark surfaces with enough contrast. If the raster logo has dark marks that disappear on navy, CSS should provide one of these treatments:

- A small warm ivory glass plaque behind the logo.
- A subtle filter only if it preserves recognizability.
- A dark topbar with enough logo background separation.

Do not recreate the logo manually in CSS or SVG.

## Section Design

### Topbar

Make the fixed topbar darker, slimmer, and more premium:

- Dark glass background with blur.
- Fine ivory border.
- Gold CTA.
- Logo treated for contrast.
- Navigation text in warm secondary ivory with gold hover accents.

### Hero

The hero should be the strongest premium moment:

- Dark overlay over the existing office/accounting photo.
- Deep navy base with warm radial highlights.
- Large serif headline in ivory.
- Gold emphasis used sparingly.
- Metrics in dark glass panels rather than pale cards.
- The right-side authority panel should feel like a premium ledger/control panel.

### Authority And Proof

Move authority sections toward a high-contrast editorial layout:

- Mostly dark or ivory-dark alternating bands.
- Large proof numbers in serif gold or ivory.
- Hairline rules inspired by accounting ledgers.
- Avoid heavy card stacking.

### Services

Service cards should become premium dark cards:

- Dark navy surfaces.
- Fine borders and hover lift.
- Gold service codes.
- Warm text.
- Subtle shine or top border animation on hover.

### Sectors

Keep sector chips, but make them feel less generic:

- Dark section with translucent tags.
- Gold/bronze hover or border accents.
- Strong heading hierarchy.

### Method

Timeline should feel precise and procedural:

- Ledger-like connected rhythm.
- Gold step markers.
- Dark glass or ivory cards depending on surrounding section contrast.

### Insight / Compliance Board

This is the signature modern element:

- Keep the compliance board.
- Increase depth and polish through dark glass, animated gold side rail, and soft internal highlights.
- Animation should be subtle and disabled under reduced motion.

### FAQ And Contact

FAQ should remain easy to scan:

- Dark or ivory section depending on visual rhythm.
- Clear contrast.
- No excessive motion.

Contact should close with authority:

- Dark premium background or heavily darkened image.
- Contact panel with glass/ivory contrast.
- Form inputs styled for the palette.
- CTA in aged gold with dark text.

## Motion And Effects

Use effects that support the brand:

- Soft light sweep on selected premium panels.
- Hover lift on service cards and buttons.
- Fine animated gold rail in the compliance board.
- Subtle background texture using CSS gradients or noise-like pattern.
- Smooth transitions under 250ms.

Respect `prefers-reduced-motion` by disabling animation and reducing transition duration.

Avoid:

- Bright neon glows.
- Purple/blue gradients.
- Decorative blobs or orbs.
- Excessive parallax.
- Effects that reduce text contrast.

## Implementation Scope

Expected files:

- `src/app/globals.css`: primary visual-system update.
- `src/app/page.tsx`: small markup adjustments only where needed for logo treatment, premium emphasis spans, or section-specific hooks.
- `src/app/layout.tsx`: metadata copy can be refined if useful, but no structural routing changes are needed.

No new dependencies are required.

## Responsive Requirements

The redesign must work at desktop and mobile sizes:

- Fixed topbar cannot overlap hero text.
- Hero heading must wrap cleanly on mobile.
- Metrics must remain readable in narrow layouts.
- Service cards and timeline collapse to one column.
- Buttons and form controls must not overflow.
- Text inside cards and chips must not overlap or clip.

## Testing And Validation

Run:

- `npm run lint`
- `npm run build`

If a dev server is used for visual validation, inspect the page in desktop and mobile viewports. Validate:

- Logo contrast on the new dark topbar.
- Hero readability.
- No overlapping text.
- No horizontal scroll.
- Reduced-motion media query remains present.

## Out Of Scope

This pass does not rewrite the full brand narrative, add backend form submission, replace the logo file, or add new site sections. It is a premium visual redesign of the existing landing page content and structure.
