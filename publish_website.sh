#!/usr/bin/env zsh
set -euo pipefail

# publish_website.sh
# Builds, exports (static) the Next.js site and publishes to GitHub Pages using gh-pages.
# Usage: ./publish_website.sh

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT_DIR"

echo "[publish_website] Working directory: $ROOT_DIR"

# Install dependencies
echo "[publish_website] Installing dependencies..."
npm install

# Build the Next.js site
echo "[publish_website] Building site (next build)..."
npm run build

# Export static HTML (explicit) to out/
# Some Next versions require `next export`; running explicitly is safe.
echo "[publish_website] Exporting static site to out/ (npx next export)..."
npx next export

OUT_DIR="out"
DEPLOY_DIR="deploy-gh-pages"

# Prepare deploy directory
if [ -d "$DEPLOY_DIR" ]; then
  echo "[publish_website] Removing existing $DEPLOY_DIR"
  rm -rf "$DEPLOY_DIR"
fi

if [ ! -d "$OUT_DIR" ]; then
  echo "[publish_website] ERROR: expected $OUT_DIR to exist after export. Aborting."
  exit 1
fi

mv "$OUT_DIR" "$DEPLOY_DIR"
# Prevent GitHub Pages from treating files as Jekyll
touch "$DEPLOY_DIR/.nojekyll"

# Publish using gh-pages
echo "[publish_website] Publishing $DEPLOY_DIR with gh-pages..."
npx gh-pages -d "$DEPLOY_DIR" --dotfiles

echo "[publish_website] Done."
