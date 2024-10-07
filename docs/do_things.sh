git add -A
git commit -m "more changes"
git push origin main
NODE_OPTIONS=--openssl-legacy-provider npm run build
NODE_OPTIONS=--openssl-legacy-provider npm run deploy
