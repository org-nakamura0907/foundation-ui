---
name: foundation-ui
colors:
  background: "oklch(1 0 0)"
  foreground: "oklch(0.145 0 0)"
  primary: "oklch(0.205 0 0)"
  primary-foreground: "oklch(0.985 0 0)"
  secondary: "oklch(0.97 0 0)"
  secondary-foreground: "oklch(0.205 0 0)"
  muted: "oklch(0.97 0 0)"
  muted-foreground: "oklch(0.556 0 0)"
  accent: "oklch(0.97 0 0)"
  accent-foreground: "oklch(0.205 0 0)"
  destructive: "oklch(0.577 0.245 27.325)"
  border: "oklch(0.922 0 0)"
  input: "oklch(0.922 0 0)"
  ring: "oklch(0.708 0 0)"
typography:
  h1:
    fontFamily: Geist Sans
    fontSize: 2.25rem
    fontWeight: 800
  body:
    fontFamily: Geist Sans
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

foundation-ui is a shadcn/ui-compatible component registry built on a neutral, achromatic palette. The design system is intentionally minimal — nearly all colors carry zero chroma (pure grayscale), with `destructive` as the sole chromatic exception. All color values use the oklch color space for perceptual uniformity across light and dark themes. Dark mode is applied via the `.dark` class (not `prefers-color-scheme`).

## Colors

The palette is entirely semantic. Tokens describe roles, not raw hues.

- **background / foreground**: Page canvas and primary text. Near-white and near-black in light mode; inverted in dark mode.
- **primary / primary-foreground**: High-emphasis surfaces and their text. Deep gray in light mode, near-white in dark mode.
- **secondary / secondary-foreground**: Lower-emphasis surfaces. Very light gray in light mode, dark gray in dark mode.
- **muted / muted-foreground**: Subdued backgrounds and de-emphasized text (captions, placeholders).
- **accent / accent-foreground**: Interactive highlight surfaces (hover states, selections). Shares values with secondary.
- **destructive**: The only chromatic token. A warm red (`hue ≈ 27°`) used for error states and dangerous actions.
- **border / input**: Structural separators and form field outlines.
- **ring**: Focus indicator outline.

All achromatic tokens have `chroma = 0`, meaning they are pure grays defined only by lightness.

### Dark Mode

Dark mode swaps lightness while preserving semantic intent. Override values applied under the `.dark` class:

| Token | Light | Dark |
|---|---|---|
| background | oklch(1 0 0) | oklch(0.145 0 0) |
| foreground | oklch(0.145 0 0) | oklch(0.985 0 0) |
| primary | oklch(0.205 0 0) | oklch(0.922 0 0) |
| primary-foreground | oklch(0.985 0 0) | oklch(0.205 0 0) |
| secondary | oklch(0.97 0 0) | oklch(0.269 0 0) |
| secondary-foreground | oklch(0.205 0 0) | oklch(0.985 0 0) |
| muted | oklch(0.97 0 0) | oklch(0.269 0 0) |
| muted-foreground | oklch(0.556 0 0) | oklch(0.708 0 0) |
| accent | oklch(0.97 0 0) | oklch(0.269 0 0) |
| accent-foreground | oklch(0.205 0 0) | oklch(0.985 0 0) |
| destructive | oklch(0.577 0.245 27.325) | oklch(0.704 0.191 22.216) |
| border | oklch(0.922 0 0) | oklch(1 0 0 / 10%) |
| input | oklch(0.922 0 0) | oklch(1 0 0 / 15%) |
| ring | oklch(0.708 0 0) | oklch(0.556 0 0) |

## Typography

All text uses **Geist Sans** (loaded via `next/font`). There are two defined variants:

- **h1**: Responsive heading. Base size is 2.25rem (`text-4xl`) at mobile, scaling up to 3rem at `sm`, 3.75rem at `md`, and 4.5rem at `lg`. Weight 800 (extrabold). Margin reset to 0.
- **body**: Default prose. 1rem (`text-base`), weight 400 (normal). Margin reset to 0.

The `Typography` component separates visual appearance (`variant`) from rendered HTML element (`as`), allowing semantic and visual roles to differ independently.

## Layout

No custom spacing tokens are defined at the project level. Use the Tailwind v4 default spacing scale (multiples of 0.25rem). Tailwind utility classes are the primary layout primitive.
