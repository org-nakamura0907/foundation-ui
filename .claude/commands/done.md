# Definition of Done

Run the following steps in order before reporting implementation complete to the user.

## Step 1: Automated checks

Run `pnpm check`.

- If it fails, fix the cause and re-run until it passes.
- Proceed only after all checks pass.

## Step 2: Manual checks

Verify the following:

- If a registry component was added or updated, has `pnpm dlx shadcn build` been run to regenerate `public/r/`?
- Does the implementation follow the design tokens in `DESIGN.md` (colors, typography, border-radius)?
- Have unnecessary comments been avoided? (Only comment when the WHY is non-obvious.)
- Does the implementation stay within the scope requested? (No unnecessary abstractions or unasked-for features.)

## Step 3: Report

Once Step 1 and Step 2 pass, report the implementation to the user.
