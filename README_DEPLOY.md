# OkanKurt.co — Ready to Host

This is a self-contained React/Vite export of the portfolio site.

## Local development

Requirements: Node.js 22+ and pnpm 11.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Production build

```bash
pnpm build
```

The deployable output is written to `out/`.

For a future manual/direct upload, `okankurt.co-deploy.zip` contains the already-built contents of `out/`. Rebuild it after any source-code change.

## Static hosting settings

- Build command: `pnpm build`
- Output directory: `out`
- SPA fallback: supplied by `public/_redirects`
- Production domain: `https://okankurt.co`

All portfolio images, Google fonts, and Remix Icon fonts are stored locally under `public/`. The contact form opens the visitor's email application and does not depend on a hosted form backend.
