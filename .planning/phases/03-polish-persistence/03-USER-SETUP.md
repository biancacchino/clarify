# Phase 3: User Setup Required

**Generated:** 2026-01-17
**Phase:** 03-polish-persistence
**Status:** Incomplete

## Environment Variables

| Status | Variable | Source | Add to |
|--------|----------|--------|--------|
| [ ] | `MONGODB_URI` | MongoDB Atlas or local MongoDB - connection string like `mongodb://localhost:27017/formbridge` | `backend/.env` |

## MongoDB Setup Options

### Option A: Local MongoDB (Development)

1. Install MongoDB Community Server:
   - macOS: `brew install mongodb-community`
   - Start: `brew services start mongodb-community`

2. Add to `backend/.env`:
   ```
   MONGODB_URI=mongodb://localhost:27017/formbridge
   ```

### Option B: MongoDB Atlas (Production/Cloud)

1. Create account at https://cloud.mongodb.com
2. Create a free cluster
3. Get connection string from "Connect" > "Connect your application"
4. Add to `backend/.env`:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/formbridge
   ```

## Verification

After setting up MongoDB, verify connection:

```bash
cd backend && npm run dev
```

Should see: `Connected to MongoDB`

Test session endpoint:

```bash
# Create session
curl -X POST http://localhost:5001/session \
  -H "Content-Type: application/json" \
  -d '{"answers":{"test":"value"}}'

# Should return: {"sessionId":"<uuid>","message":"Session created"}
```

---
**Once all items complete:** Mark status as "Complete"
