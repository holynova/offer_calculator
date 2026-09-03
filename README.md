# offer_calculator

## Build

Install dependencies with `pnpm install`, then run `pnpm run build`.

The Cloudflare Workers Static Assets deployment reads the generated `dist/` directory. GitHub Pages uses `pnpm run build:pages`, which writes the repository-prefixed artifact to `build/`.
