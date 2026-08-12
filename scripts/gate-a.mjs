import { readFileSync } from "node:fs";

const claudeMd = readFileSync("CLAUDE.md", "utf8");
const { scripts = {} } = JSON.parse(readFileSync("package.json", "utf8"));

const match = claudeMd.match(/## Commands\s+```bash\n([\s\S]+?)```/);
if (!match) {
  console.error(
    "[Gate A] CLAUDE.md に ## Commands bash ブロックが見つかりません",
  );
  process.exit(1);
}

const errors = [];

for (const line of match[1].trim().split("\n")) {
  const trimmed = line.trim();
  if (!trimmed.startsWith("pnpm ")) continue;
  // pnpm dlx / pnpm exec はパッケージスクリプトではないためスキップ
  if (trimmed.startsWith("pnpm dlx") || trimmed.startsWith("pnpm exec"))
    continue;

  const scriptName = trimmed.slice(5).split(/[\s#]/)[0];
  if (!scripts[scriptName]) {
    errors.push(
      `"pnpm ${scriptName}" が CLAUDE.md に記載されているが package.json scripts に存在しない`,
    );
  }
}

if (errors.length > 0) {
  console.error("[Gate A] CLAUDE.md 整合性チェック: NG");
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}

console.log("[Gate A] CLAUDE.md 整合性チェック: OK");
