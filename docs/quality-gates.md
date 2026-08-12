# 品質ゲート

## 全体構成

```
git commit  →  pre-commit   Prettier, ESLint（ステージングファイルのみ）
               ↓
PR 作成     →  CI           lint / audit / test
               ↓
定期        →  CodeQL       月次 SAST スキャン
```

---

## ローカル

### pre-commit（husky + lint-staged）

| チェック          | 対象                 |
| ----------------- | -------------------- |
| Prettier 自動修正 | ステージングファイル |
| ESLint 自動修正   | ステージングファイル |

### AI 完了ゲート（`pnpm check`）

AI が実装完了を報告する前に実行する自己検証コマンド。`/done` スラッシュコマンドから呼び出される。

| チェック     | 内容                                                                                  |
| ------------ | ------------------------------------------------------------------------------------- |
| Prettier     | フォーマット確認                                                                      |
| ESLint       | Lint エラー確認                                                                       |
| tsc --noEmit | 型エラー確認                                                                          |
| knip         | 未使用コード・依存確認                                                                |
| Gate A       | CLAUDE.md 記載コマンドが `package.json` に存在するか                                  |
| Gate B       | registry コンポーネントに stories・registry.json エントリ・`public/r/` が揃っているか |

---

## CI（GitHub Actions）

PR 作成・更新時に並列実行。ドラフト PR は除外。

| ジョブ | 内容                                                                                |
| ------ | ----------------------------------------------------------------------------------- |
| lint   | ESLint・Prettier・tsc・Knip                                                         |
| audit  | 依存脆弱性スキャン（high 以上。修正不可 CVE は `scripts/audit.mjs` で明示的に許可） |
| test   | Storybook / Vitest / Playwright                                                     |

---

## 定期スキャン

| ツール     | 頻度 | 内容                         |
| ---------- | ---- | ---------------------------- |
| CodeQL     | 月次 | SAST（静的セキュリティ解析） |
| Dependabot | 月次 | 依存関係の自動更新 PR        |
