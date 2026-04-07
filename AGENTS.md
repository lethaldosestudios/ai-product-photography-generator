# AGENTS.md — AI Product Photography Generator

## Project Overview
Turns basic product photos into studio-quality AI-generated images. E-commerce-focused. Built by porterlaforce.

## Architecture
- **Frontend**: React 19 + Vite 6 + TypeScript + Tailwind CDN
- **Backend**: Express 4 + multer + @google/genai
- **Image Model**: `gemini-2.5-flash-image-preview`
- **Output**: Multi-image gallery with variation history

## Key Files
| File | Purpose |
|------|---------|
| `App.tsx` | Root component, state management, image generation flow |
| `services/apiService.ts` | Frontend API client — calls backend `/api/generate` |
| `api/server.js` | Express backend — handles Gemini API calls server-side |
| `components/OutputDisplay.tsx` | Gallery view with thumbnail strip + download |
| `constants.ts` | Lighting/background/mockup/aspect ratio options |
| `vite.config.ts` | Build config — VITE_API_URL injected at build time |

## Environment Variables
### Frontend (.env)
```
VITE_API_URL=http://localhost:3001
```

### Backend (api/.env)
```
GEMINI_API_KEY=<your Gemini API key>
PORT=3001
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.zo.computer
```

## Deployment
See `DEPLOYMENT.md` for full Zo Computer deployment steps.

TL;DR:
1. Deploy `api/server.js` as a **Zo Service** (port 3001, entry: `node api/server.js`)
2. Deploy `dist/` as a **Zo Site** (build: `npm run build`, output: `dist`)
3. Set `VITE_API_URL` on frontend to the backend service URL
4. Set `GEMINI_API_KEY` on backend service

## Commands
```bash
# Install
npm install && cd api && npm install && cd ..

# Dev (both services)
npm run dev:all

# Frontend only
npm run dev

# Backend only
npm run dev:api

# TypeScript check
npm run lint

# Production build
npm run build
```

## Important Notes
- **API key stays server-side** — never exposed to client
- Backend exits immediately if `GEMINI_API_KEY` is not set
- The `@google/genai` importmap in `index.html` is dead weight (Vite bundles it) — safe to remove
- `index.css` is minimal — Tailwind is loaded via CDN at runtime
