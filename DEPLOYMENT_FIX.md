# Backend Crash Fix - Railway Deployment

## Issues Found & Fixed

### 1. **Environment Configuration** (.env)
- ❌ `NODE_ENV=development` → ✅ `NODE_ENV=production`
- ❌ `FRONTEND_URL=...vercel.app/` (trailing slash) → ✅ `FRONTEND_URL=...vercel.app`

### 2. **CORS Configuration** (server.js)
- ❌ Hardcoded localhost URLs mixed with Vercel URL
- ✅ Now dynamically uses Vercel URL in production, localhost in dev

### 3. **Error Handling** (server.js)
- ❌ No try-catch around server startup
- ✅ Added try-catch + process error handlers
- ✅ Graceful handling of unhandled rejections

---

## Files Modified
- ✅ `.env` — Updated NODE_ENV and FRONTEND_URL
- ✅ `server.js` — Enhanced CORS, error handling

---

## Deployment to Railway

### Step 1: Push to Git
```bash
cd c:/Users/rushikesha/Downloads/Portfolio
git add -A
git commit -m "fix: backend crash on Railway - CORS, env config, error handling"
git push origin main
```

### Step 2: Redeploy on Railway
1. Go to [Railway Dashboard](https://railway.app)
2. Select your Portfolio Backend project
3. Manual redeploy or wait for auto-deploy (if GitHub integration is active)
4. Check logs in Railway to confirm:
   - `✅ MySQL connected to Railway successfully`
   - `🚀 Portfolio API running on port 5000 in production mode`

### Step 3: Test
```bash
# Test health endpoint
curl https://YOUR_RAILWAY_URL/api/health
```

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2024-06-12T...",
  "message": "Portfolio API running 🚀"
}
```

---

## What Changed

| Issue | Before | After |
|-------|--------|-------|
| Node Env | development | production |
| Frontend URL | ...vercel.app/ | ...vercel.app |
| CORS Origin | All localhost | Vercel only (prod) |
| Server Error | Crash on fail | Graceful shutdown |

---

## Next Steps
1. ✅ Push changes to GitHub
2. ✅ Redeploy backend on Railway
3. ✅ Test health endpoint
4. ✅ Test contact form from frontend

