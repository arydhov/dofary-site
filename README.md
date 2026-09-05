# Dofary Site — Refactor V3

Reconstructed React/Vite source for the existing Dofary portfolio site.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Configuration

Copy `.env.example` to `.env` and set `VITE_BACKEND_URL` if the Google Apps Script deployment changes.

The backend URL is public browser configuration; do not put secrets in `VITE_*` variables.

## Architecture

- `src/components/sections/` — page sections
- `src/components/common/` — reusable UI primitives
- `src/components/VideoCard.jsx` — portfolio video rendering/playback
- `src/hooks/` — stateful behavior and data loading
- `src/data/portfolio.js` — fallback portfolio content
- `src/config.js` — runtime configuration

## Important security note

The legacy admin PIN is currently client-side because this project was reconstructed from a static production bundle. A client-side PIN is not real authentication. Before exposing sensitive admin capabilities, move authentication and authorization to a server-side system.
