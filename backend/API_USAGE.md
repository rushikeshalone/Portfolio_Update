# Portfolio API - API Key Documentation

## Overview
All sensitive endpoints (admin operations) now require API key authentication via the `x-api-key` header.

## API Key
- **Key**: `portfolio_admin_key_2024_secure`
- **Location**: Header `x-api-key`
- **Environment Variable**: `API_KEY` (in `.env`)

## Protected Endpoints

### Admin Endpoints (Require API Key)

#### Get All Contact Messages
```
GET /api/contact
Headers: x-api-key: portfolio_admin_key_2024_secure
```

#### Update About Information
```
PUT /api/about/:id
Headers: x-api-key: portfolio_admin_key_2024_secure
```

## Public Endpoints (No API Key Required)

- `POST /api/contact` - Submit contact form
- `GET /api/about` - Get about information
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/skills` - Get skills grouped by category
- `GET /api/skills/flat` - Get all skills as flat array
- `GET /api/experience` - Get work experience
- `GET /api/health` - Health check

## Usage Example

```javascript
// Using fetch
const response = await fetch('http://localhost:5000/api/contact', {
  method: 'GET',
  headers: {
    'x-api-key': 'portfolio_admin_key_2024_secure',
    'Content-Type': 'application/json'
  }
});

// Using curl
curl -H "x-api-key: portfolio_admin_key_2024_secure" http://localhost:5000/api/contact
```

## Error Responses

- **401 Unauthorized**: Missing API key
  ```json
  { "error": "API key is required. Use header: x-api-key" }
  ```

- **403 Forbidden**: Invalid API key
  ```json
  { "error": "Invalid API key" }
  ```
