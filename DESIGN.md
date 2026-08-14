---
name: foundation-ui
colors:
  background: "oklch(0.994 0.001 255)"
  foreground: "oklch(0.21 0.012 255)"
  primary: "oklch(0.48 0.15 255)"
  primary-foreground: "oklch(0.985 0.002 255)"
  secondary: "oklch(0.965 0.004 255)"
  secondary-foreground: "oklch(0.25 0.012 255)"
  muted: "oklch(0.965 0.004 255)"
  muted-foreground: "oklch(0.50 0.015 255)"
  accent: "oklch(0.95 0.006 255)"
  accent-foreground: "oklch(0.25 0.012 255)"
  destructive: "oklch(0.55 0.205 27)"
  border: "oklch(0.91 0.004 255)"
  input: "oklch(0.91 0.004 255)"
  ring: "oklch(0.48 0.15 255)"
typography:
  h1:
    fontFamily: Geist Sans / Zen Kaku Gothic New
    fontSize: 2.5rem
    fontWeight: 700
  body:
    fontFamily: Geist Sans / Zen Kaku Gothic New
    fontSize: 1rem
    fontWeight: 400
rounded:
  sm: 6px
  md: 8px
  lg: 10px
  xl: 14px
  2xl: 18px
  3xl: 22px
  4xl: 26px
---

## Overview

foundation-ui is a shadcn/ui-compatible component registry built on a neutral, cool-tinted palette with a single swappable accent. The design is intentionally minimal — nearly all color tokens carry very low chroma (near-grayscale, hue 255), with `primary`/`ring` (and `chart-1`/`sidebar-primary`) as the sole hued "accent knob" and `destructive` as the one other chromatic token. All color values use the oklch color space for perceptual uniformity across light and dark themes. Dark mode is applied via the `.dark` class (not `prefers-color-scheme`).

**The accent knob:** swap `--primary` and `--ring` (and optionally `--chart-1` / `--sidebar-primary`) to reskin the whole product without touching any other token.

## Colors

The palette is entirely semantic. Tokens describe roles, not raw hues. Neutrals carry a whisper of cool tint (hue ≈ 255, chroma ≈ 0.005–0.015) so the base reads as intentional rather than dead gray.

- **background / foreground**: Page canvas and primary text. Near-white and near-black in light mode; inverted in dark mode.
- **primary / primary-foreground**: The accent. High-emphasis surfaces (primary buttons, focus ring) and their text. A confident blue (hue 255) in both themes; lighter in dark mode so it still reads on a dark canvas.
- **secondary / secondary-foreground**: Lower-emphasis surfaces. Very light gray-blue in light mode, dark gray-blue in dark mode.
- **muted / muted-foreground**: Subdued backgrounds and de-emphasized text (captions, placeholders). Shares values with secondary.
- **accent / accent-foreground**: Interactive highlight surfaces (hover states, selections).
- **destructive**: The other chromatic token. A warm red (`hue ≈ 27°`) used for error states and dangerous actions.
- **border / input**: Structural separators and form field outlines.
- **ring**: Focus indicator outline — tracks `--primary`.

Contrast pairs meet WCAG AA.

### Dark Mode

Dark mode swaps lightness while preserving semantic intent. Override values applied under the `.dark` class:

| Token                | Light                  | Dark                   |
| -------------------- | ---------------------- | ---------------------- |
| background           | oklch(0.994 0.001 255) | oklch(0.18 0.008 255)  |
| foreground           | oklch(0.21 0.012 255)  | oklch(0.965 0.003 255) |
| primary              | oklch(0.48 0.15 255)   | oklch(0.70 0.14 255)   |
| primary-foreground   | oklch(0.985 0.002 255) | oklch(0.18 0.02 255)   |
| secondary            | oklch(0.965 0.004 255) | oklch(0.27 0.008 255)  |
| secondary-foreground | oklch(0.25 0.012 255)  | oklch(0.965 0.003 255) |
| muted                | oklch(0.965 0.004 255) | oklch(0.27 0.008 255)  |
| muted-foreground     | oklch(0.50 0.015 255)  | oklch(0.71 0.012 255)  |
| accent               | oklch(0.95 0.006 255)  | oklch(0.30 0.01 255)   |
| accent-foreground    | oklch(0.25 0.012 255)  | oklch(0.965 0.003 255) |
| destructive          | oklch(0.55 0.205 27)   | oklch(0.70 0.185 22)   |
| border               | oklch(0.91 0.004 255)  | oklch(1 0 0 / 10%)     |
| input                | oklch(0.91 0.004 255)  | oklch(1 0 0 / 15%)     |
| ring                 | oklch(0.48 0.15 255)   | oklch(0.70 0.14 255)   |

## Typography

Latin glyphs render in **Geist Sans**, Japanese glyphs fall through to **Zen Kaku Gothic New** (both loaded via `next/font/google`); code renders in **Geist Mono**. Line-heights run wider than Latin norms to keep 和文 comfortable to read, with slight positive letter-spacing for kana/kanji legibility.

The `Typography` component (`src/registry/typography/typography.tsx`) currently defines these variants — each is a fixed size + line-height + tracking + weight group, not four independent guesses:

| Variant | Size            | Line-height | Tracking | Weight             | Use                          |
| ------- | --------------- | ----------- | -------- | ------------------ | ---------------------------- |
| `h1`    | 2.5rem (40px)   | 1.35        | 0.01em   | 700 (bold)         | Page title, one per view     |
| `h2`    | 2rem (32px)     | 1.4         | 0.01em   | 700 (bold)         | Major section heading        |
| `h3`    | 1.5rem (24px)   | 1.45        | 0.01em   | 700 (bold)         | Subsection heading           |
| `body`  | 1rem (16px)     | 1.8         | 0.02em   | 400 (normal)       | Default running text         |
| `lead`  | 1.25rem (20px)  | default     | default  | 400 (normal)       | Intro paragraph, muted color |
| `muted` | 0.875rem (14px) | 1.7         | 0.02em   | 400 (normal)       | Secondary text, dense UI     |
| `code`  | 0.875rem (14px) | 1.7         | 0        | 400 (normal, mono) | Inline code                  |

`h1`–`h3`/`body`/`muted` carry the redesigned metrics above. `lead` has no counterpart in the redesign yet and keeps its prior (Tailwind-default) metrics — flagged for a future pass once the component grows past its current variant set. The `Typography` component separates visual appearance (`variant`) from rendered HTML element (`as`), allowing semantic and visual roles to differ independently.

## Elevation & Borders

Rule of thumb: **border first, shadow only to signal float.**

- Flush / in-flow surfaces (cards resting on the page): `--border` only, no shadow.
- Floating surfaces (dropdown, popover, dialog): a shadow sized to how far the element sits above the page.

| Token            | Value (light)                                                                                | Use                                           |
| ---------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `--shadow-xs`    | `0 1px 2px 0 oklch(0.21 0.012 255 / 0.05)`                                                   | Barely-raised: input, resting button          |
| `--shadow-sm`    | `0 1px 3px 0 oklch(0.21 0.012 255 / 0.08), 0 1px 2px -1px oklch(0.21 0.012 255 / 0.06)`      | Cards that lift slightly, hover on flat items |
| `--shadow-md`    | `0 4px 12px -2px oklch(0.21 0.012 255 / 0.12), 0 2px 6px -2px oklch(0.21 0.012 255 / 0.08)`  | Dropdown, popover, menu, tooltip              |
| `--shadow-lg`    | `0 12px 32px -8px oklch(0.21 0.012 255 / 0.18), 0 4px 12px -4px oklch(0.21 0.012 255 / 0.1)` | Dialog, modal, command palette                |
| `--border-width` | `1px`                                                                                        | Hairline — the default everywhere             |

Dark mode leans on borders (shadows barely read on dark), so dark shadows are opaque-black and stronger rather than tinted.

## Motion

Duration and easing are functional signals, not decoration — no bounce/overshoot. Respect `prefers-reduced-motion` at the app level.

| Token             | Value                           | Use                             |
| ----------------- | ------------------------------- | ------------------------------- |
| `--duration-fast` | `120ms`                         | Hover, press, small shifts      |
| `--duration`      | `200ms`                         | Default UI transitions, toggles |
| `--duration-slow` | `320ms`                         | Dialog, drawer, popover enter   |
| `--ease`          | `cubic-bezier(0.2, 0, 0, 1)`    | Standard                        |
| `--ease-out`      | `cubic-bezier(0.16, 1, 0.3, 1)` | Enter / reveal                  |
| `--ease-in`       | `cubic-bezier(0.4, 0, 1, 1)`    | Exit / dismiss                  |

## Layout

No custom spacing tokens are defined at the project level — the Tailwind v4 default spacing scale (multiples of 0.25rem) already lines up with the design's 4px-based spacing rhythm, so components reach for standard Tailwind spacing utilities (`px-3`, `gap-2`, …) rather than bespoke tokens.

## Radius

One source of truth, `--radius` (0.625rem / 10px). `sm`/`md`/`lg`/`xl`/`2xl`/`3xl`/`4xl` all derive from it via `calc()`. Buttons and small controls use `md` (8px); cards and popovers use `lg` (10px, the base); modals and large panels use `xl` (14px).
