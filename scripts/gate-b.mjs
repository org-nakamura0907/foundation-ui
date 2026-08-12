import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const { items } = JSON.parse(readFileSync("registry.json", "utf8"));
const registryNames = new Set(items.map((i) => i.name));

const dirs = readdirSync("src/registry", { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

const errors = [];

for (const name of dirs) {
  if (!existsSync(join("src/registry", name, `${name}.tsx`))) continue;

  if (!existsSync(join("src/registry", name, `${name}.stories.tsx`))) {
    errors.push(
      `${name}: src/registry/${name}/${name}.stories.tsx が存在しない`,
    );
  }
  if (!registryNames.has(name)) {
    errors.push(`${name}: registry.json にエントリがない`);
  }
  if (!existsSync(join("public/r", `${name}.json`))) {
    errors.push(
      `${name}: public/r/${name}.json が存在しない（pnpm dlx shadcn build が必要な可能性あり）`,
    );
  }
}

if (errors.length > 0) {
  console.error("[Gate B] コンポーネント完全性チェック: NG");
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}

console.log("[Gate B] コンポーネント完全性チェック: OK");
