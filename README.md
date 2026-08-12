## セットアップ

### 前提条件

このプロジェクトを動かすには、以下のツールがインストールされている必要があります。

- Nix
- direnv

### 環境の起動

ターミナルでプロジェクトルートに移動して、以下のコマンドを実行する。

```bash
echo "use flake" >> .envrc
direnv allow

pnpm install
```

