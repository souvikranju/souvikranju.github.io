# Souvik Pal — Portfolio

Personal portfolio of **Souvik Pal**, Lead Embedded Firmware Engineer specialising in
Common Criteria Certified secure firmware on Snapdragon SoCs.

**Live site:** [souvikranju.github.io](https://souvikranju.github.io)

---

## Build & Preview

### Option 1 — Standard npm (any machine with Node 18+)

```bash
cp env.example .env          # fill in REACT_APP_GITHUB_TOKEN and GITHUB_USERNAME
npm install
npm run build
```

### Option 2 — Docker

```bash
docker build -t portfolio:latest .
docker run -t -p 3000:3000 portfolio:latest
```

The container starts a dev server on `http://localhost:3000`.

### Option 3 — npm on a quota-constrained machine

If the home partition is near its disk quota. npm must be redirected to the
workspace volume so it does not write cache or logs to the full partition.

```bash
# 1. Activate Node via nvm
export NVM_DIR="/usr2/user/.nvm"
. "$NVM_DIR/nvm.sh"

# 2. Redirect npm I/O away from the full home partition
export HOME=/workspace/.npm-home
export npm_config_cache=/workspace/.npm-cache
mkdir -p "$HOME" "$npm_config_cache"

# 3. Install and build
cd /workspace/portfolio/souvikranju.github.io
npm install
npm run build
```

> Without the `HOME` and `npm_config_cache` redirects every npm command exits with
> `EDQUOT: disk quota exceeded`.

---

## Preview the production build

developerFolio is a React SPA — the HTML shell is nearly empty and all content is
JavaScript-rendered. Use Python's built-in HTTP server to serve the build folder, then
**grep the compiled JS bundle** to verify content (a plain `curl | grep` will always miss it).

```bash
cd /souvikranju.github.io/build
python3 -m http.server 3000 &
SERVER_PID=$!
sleep 2

# Verify the server is up
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000   # expect: 200

# Verify content is bundled correctly
grep -rl "Souvik" static/js/ && echo "NAME OK"

# Stop the server
kill $SERVER_PID
# or: pkill -f "http.server 3000"
```

---

## Deploy

Every push to `main` automatically builds and deploys to GitHub Pages via
`.github/workflows/deploy.yml`. No manual steps needed.

Required GitHub Secrets:

| Secret | Description |
|--------|-------------|
| `REACT_APP_GITHUB_TOKEN` | Classic PAT (no scopes needed) for GitHub API data |
| `PORTFOLIO_GITHUB_USERNAME` | Your GitHub username |
| `USE_GITHUB_DATA` | `"true"` to pull live GitHub stats, `"false"` to skip |
| `MEDIUM_USERNAME` | Medium username for blog section (leave blank if unused) |

---

## Customisation

All portfolio content lives in one file: `src/portfolio.js`.

Colors and theme are controlled by `src/_globalColor.scss`.

---

## Theme

Built on [developerFolio](https://github.com/saadpasta/developerFolio) — a clean, responsive React portfolio template.