// Runs pnpm audit and fails only on high/critical advisories that have no upstream fix.
// Add GHSA IDs here only when the advisory has no patched version available.
import { execSync } from "node:child_process";

const IGNORED = new Set([
  "GHSA-w3rx-r6r6-pgpr", // image-size: ICNS parser DoS — no patch (vite-plugin-storybook-nextjs)
  "GHSA-5p2g-fcmc-qvqq", // image-size: JXL/HEIF parser DoS — no patch (vite-plugin-storybook-nextjs)
]);

const HIGH_PLUS = new Set(["high", "critical"]);

let stdout;
try {
  stdout = execSync("pnpm audit --json", {
    encoding: "utf8",
    stdio: ["inherit", "pipe", "inherit"],
  });
} catch (err) {
  stdout = err.stdout;
}

const { advisories = {} } = JSON.parse(stdout);
const all = Object.values(advisories);

const failures = all.filter(
  (a) => HIGH_PLUS.has(a.severity) && !IGNORED.has(a.github_advisory_id),
);

if (failures.length > 0) {
  console.error("Unignored high/critical vulnerabilities found:");
  for (const f of failures) {
    console.error(`  [${f.github_advisory_id}] ${f.title} (${f.severity})`);
  }
  process.exit(1);
}

const ignored = all.filter(
  (a) => HIGH_PLUS.has(a.severity) && IGNORED.has(a.github_advisory_id),
);
if (ignored.length > 0) {
  console.log("Ignored (no upstream fix available):");
  for (const f of ignored) {
    console.log(`  [${f.github_advisory_id}] ${f.title} (${f.severity})`);
  }
}

console.log("Audit passed.");
