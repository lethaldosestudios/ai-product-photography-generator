# Zo Computer Deployment Guide

This guide explains how to deploy the AI Product Photography Generator on Zo Computer.

## Architecture Overview

- **Frontend**: Static React/Vite app (served by Zo Sites)
- **Backend API**: Express server with Gemini integration (served by Zo Services)

## Step 1: Deploy Backend API as a Zo Service

1. Navigate to [Services](/?t=sites&s=services)
2. Click "Add Service" or "Create Service"
3. Configure:
   - **Label**: `ai-product-photography-api`
   - **Protocol**: `http`
   - **Local Port**: `3001`
   - **Entry Point**: `node api/server.js`
   - **Working Directory**: `/home/workspace/dev_projects/ai_product_photography_generator`
   - **Environment Variables**:
     ```
     GEMINI_API_KEY=your_actual_api_key_here
     NODE_ENV=production
     FRONTEND_URL=https://your-zo-site-url.zo.computer
     ```

4. Save the service

5. After creation, note the **public URL** (e.g., `https://some-hash.zo.computer`)

## Step 2: Deploy Frontend as a Zo Site

1. Navigate to [Sites](/?t=sites&s=sites)
2. Click "Add Site" or "Create Site"
3. Configure:
   - **Name**: `ai-product-photography-generator`
   - **Working Directory**: `/home/workspace/dev_projects/ai_product_photography_generator`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Environment Variables**:
     ```
     VITE_API_URL=https://your-api-service-url.zo.computer
     ```

4. Save the site

5. The site will automatically build and deploy

## Step 3: Test Your Deployment

1. Access your site at its public URL
2. Upload a product image
3. Try generating images
4. Verify API connectivity

## Environment Variables Reference

### Backend API (Service)
| Variable | Required | Description |
|----------|----------|-------------|
| `GEMINI_API_KEY` | Yes | Your Gemini API key |
| `PORT` | No | Server port (default: 3001) |
| `NODE_ENV` | No | Environment (set to `production`) |
| `FRONTEND_URL` | No | CORS allowed origin |

### Frontend (Site)
| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_API_URL` | Yes | Backend API URL from Step 1 |

## Troubleshooting

### API Key Not Working
- Verify the key is set in the Service environment variables
- Check the service logs at `/dev/shm/ai-product-photography-api.log`
- Ensure the key has proper permissions in Google Cloud Console

### CORS Errors
- Verify `FRONTEND_URL` is set correctly in backend
- Check that the frontend URL matches the deployed site URL

### Build Failures
- Check build logs at `/dev/shm/zosite-<port>.log`
- Verify `npm install` was run successfully
- Check TypeScript errors with `npm run lint`

### Images Not Generating
- Check API logs for Gemini errors
- Verify API key has sufficient quota
- Check network connectivity between frontend and backend

## Custom Domain (Optional)

For production, add a custom domain to both services:

1. Go to [Billing](/?t=billing) to upgrade to a paid plan
2. In the Service/Site details panel, use the **Custom Domains** section
3. Add your domain (e.g., `api.yourdomain.com` for backend, `app.yourdomain.com` for frontend)
4. Update `VITE_API_URL` to use your custom domain
5. Update `FRONTEND_URL` in backend to use your custom frontend domain

## Monitoring

View logs for both services:
```bash
# API logs
tail -f /dev/shm/ai-product-photography-api.log

# Frontend logs
tail -f /dev/shm/zosite-<port>.log
```

Use Loki for log aggregation:
```bash
curl -G "http://localhost:3100/loki/api/v1/query_range" \
  --data-urlencode 'query={filename="/dev/shm/ai-product-photography-api.log"}' \
  --data-urlencode "start=$(date -d '1 hour ago' +%s)000000000" \
  --data-urlencode "end=$(date +%s)000000000"
```