#!/usr/bin/env zsh
set -euo pipefail

# start_local_server.sh
# Installs dependencies (if needed) and starts the Next.js dev server.
# Usage: ./start_local_server.sh

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT_DIR"

echo "[start_local_server] Working directory: $ROOT_DIR"

# Install dependencies if node_modules missing
if [ ! -d "node_modules" ]; then
  echo "[start_local_server] node_modules not found — installing dependencies..."
  npm install
else
  echo "[start_local_server] node_modules exists — skipping install. To force reinstall, delete node_modules and re-run."
fi

echo "[start_local_server] Starting Next.js dev server (npm run dev)..."
# Run dev server in foreground so logs show in the terminal
npm run dev
