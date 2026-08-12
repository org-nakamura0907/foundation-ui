# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Next.js dev server (localhost:3000)
pnpm build            # Production build
pnpm lint             # ESLint
pnpm storybook        # Storybook dev server (localhost:6006)
pnpm build-storybook  # Build Storybook static site
pnpm test             # Run Storybook-based component tests via Vitest + Playwright (headless Chromium)
pnpm dlx shadcn build # Rebuild public/r/ from registry.json (run after adding/updating registry components)
```

## Architecture

This project is a **custom shadcn/ui-compatible component registry** — consumers install components from it via `npx shadcn add <url>`. The Next.js app itself is a demo/documentation host; the actual deliverable is the component registry exposed at `public/r/`.

### Two-tier component structure

**`src/shared/ui/`** — shadcn/ui base primitives (e.g., `button.tsx`). These are the raw building blocks, added via `npx shadcn add` and customized locally. They are referenced by registry components but not themselves published to the registry.

**`src/registry/<name>/`** — Registry components meant for external distribution. Each component lives in its own subdirectory alongside a `.stories.tsx` file. These are what gets listed in `registry.json` and served from `public/r/`.

### Registry publishing flow

1. Add a component to `src/registry/<name>/<name>.tsx`
2. Register it in `registry.json` (root) pointing to the source file
3. The built output goes to `public/r/<name>.json` and `public/r/registry.json`

### Path aliases (from `components.json` and `tsconfig.json`)

- `@/shared` → `src/shared/` (shadcn "components" alias)
- `@/shared/ui` → `src/shared/ui/` (shadcn "ui" alias)
- `@/shared/lib` → `src/shared/lib/`
- `@/shared/hooks` → `src/shared/hooks/`

### Styling

Tailwind CSS v4 with CSS custom properties for theming. Design tokens are defined as CSS variables in `src/app/globals.css` using oklch color space. Dark mode is applied via the `.dark` class (not `prefers-color-scheme`).

The `cn()` helper from `@/shared/lib/utils` combines `clsx` + `tailwind-merge` and should be used for all className composition.

Components use `class-variance-authority` (cva) for variant management.

### Testing

Tests are Storybook stories — there are no separate test files. The Vitest config (`vitest.config.ts`) runs stories as tests via `@storybook/addon-vitest` in a real Chromium browser using Playwright. Write stories in `src/registry/<name>/<name>.stories.tsx`; they double as both documentation and tests.
