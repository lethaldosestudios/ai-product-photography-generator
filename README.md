<div align="center">
<img width="1200" height="475" alt="GHBanner" src="[[Image 1: embedded image/png]]" />
</div>

# AI Product Photography Generator

An AI-powered tool to transform your basic product photos into studio-quality, professional images suitable for e-commerce, marketing, and advertising.

**Architecture**: Frontend (React/Vite) + Backend API (Express/Node.js) for secure API key handling.

## Prerequisites

- Node.js (v18 or higher recommended)
- A Gemini API key from [Google AI Studio](https://ai.google.dev/)

## Quick Start

### 1. Install Frontend Dependencies

```bash
npm install
```

### 2. Install Backend Dependencies

```bash
cd api
npm install
cd ..
```

### 3. Set Up Environment Variables

Create `.env` file in the project root:

```bash
# Frontend
VITE_API_URL=http://localhost:3001
```

Create `.env` file in the `api/` directory:

```bash
# Backend
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3001
NODE_ENV=development
```

*Tip: Copy `.env.example` files as templates*

### 4. Run Both Services

Start the backend API:
```bash
cd api
npm start
```

Start the frontend (in a new terminal):
```bash
npm run dev
```

The app will be available at http://localhost:3000

## Development

### Frontend

- `npm run dev` - Start development server (port 3000)
- `npm run lint` - Run TypeScript type checking
- `npm run type-check` - Alias for lint
- `npm run build` - Build for production

### Backend API

- `cd api && npm start` - Start API server (port 3001)
- `cd api && npm run dev` - Start with auto-reload

### API Endpoints

- `GET /health` - Health check
- `POST /api/generate` - Generate product image (requires `image` and `prompt` fields)

## Building for Production

### 1. Build Frontend

```bash
npm run build
```

Creates an optimized production build in the `dist/` directory.

### 2. Deploy Backend API

The backend API needs to be deployed as a serverless function, container, or hosted service. Configure the following environment variables:

| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | Yes | Your Gemini API key (server-side only) |
| `PORT` | No | Server port (default: 3001) |
| `NODE_ENV` | No | Environment (default: development) |
| `FRONTEND_URL` | No | CORS allowed origin (default: *) |

### 3. Deploy Frontend

Deploy the `dist/` folder to any static hosting service:

- **Netlify**: Deploy the `dist/` folder
- **Vercel**: Set build output directory to `dist/`
- **GitHub Pages**: Configure to deploy from `dist/`
- **Zo Sites**: Register this directory as a Zo Site

## Deployment Checklist

### Before deploying:

- [ ] Install frontend and backend dependencies
- [ ] Set `GEMINI_API_KEY` in backend environment variables
- [ ] Set `VITE_API_URL` in frontend environment variables
- [ ] Run `npm run lint` to verify no TypeScript errors
- [ ] Test locally with both services running
- [ ] Build frontend with `npm run build`
- [ ] Verify API health endpoint works

### Environment Variables

**Frontend (.env)**:
| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_API_URL` | Yes | Backend API URL |

**Backend (api/.env)**:
| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | Yes | Your Gemini API key |
| `PORT` | No | Server port (default: 3001) |
| `FRONTEND_URL` | No | CORS origin (default: *) |

## Project Structure

```
.
├── api/                    # Backend API service
│   ├── server.js           # Express server with Gemini integration
│   └── package.json        # Backend dependencies
├── components/             # React components
│   ├── icons/             # SVG icon components
│   ├── ControlPanel.tsx
│   ├── Header.tsx
│   ├── ImageUploader.tsx
│   ├── OutputDisplay.tsx
│   ├── PromptPreview.tsx
│   └── Toast.tsx
├── services/              # API client
│   └── apiService.ts      # Frontend API client
├── App.tsx                # Main app component
├── index.tsx              # Entry point
├── vite.config.ts         # Vite configuration
└── tsconfig.json          # TypeScript configuration
```

## Security Notes

✅ **Secure**: API key is never exposed to the client
- Frontend calls your backend API
- Backend API calls Gemini with your key
- Key stays server-side

## License

This project is private and confidential.

## Support

For issues or questions, please contact the development team.

### Deploying to Zo Sites

For complete deployment instructions on Zo Computer, see [DEPLOYMENT.md](./DEPLOYMENT.md).

**Quick Summary:**

1. Deploy backend API as a Zo Service at [Services](/?t=sites&s=services)
2. Deploy frontend as a Zo Site at [Sites](/?t=sites&s=sites)
3. Configure `VITE_API_URL` to point to your backend service
4. Set `GEMINI_API_KEY` in the backend service environment variables

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed step-by-step instructions, environment variables, and troubleshooting.