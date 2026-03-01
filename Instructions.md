# Instructions for DSA Instructor Project

## Prerequisites

- **Node.js** v16+ (LTS recommended)
- **npm** (bundled with Node.js)
- **Google GenAI API key** (get from [ai.google.dev](https://ai.google.dev))

## Setup

### 1. Clone/Download the Project

```bash
cd /path/to/project
```

### 2. Install Dependencies

```bash
npm install
```

This installs:
- `express` — web server framework
- `@google/genai` — Google's GenAI SDK
- `dotenv` — environment variable loader
- `cors` — cross-origin request handling

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```
API_KEY=your_google_genai_api_key_here
PORT=3000
```

**Note:** The `.env` file is not versioned (listed in `.gitignore`) for security.

## Running the App

### Start the Server

```bash
npm start
```

Expected output:
```
Server is running on http://localhost:3000
```

### Access the App

Open your browser and visit:
- **Desktop interface**: `http://localhost:3000/pc.html`
- **Mobile interface**: `http://localhost:3000/mobile.html`
- **Default/Index**: `http://localhost:3000`

## Development Guide

### Backend (Node.js/Express)

**File:** `server.js`

- Define API routes (e.g., `POST /api/ask`)
- Initialize Google GenAI client
- Set system instructions for the DSA Instructor personality
- Handle CORS and middleware

**To modify:**
1. Edit `server.js`
2. Save and restart server (Ctrl+C, then `npm start`)
3. Test in browser

### Frontend (Desktop)

**Layout Files:**
- `pc.html` — HTML structure (desktop layout)
- `style.css` — Styling, animations, two-pane workspace
- `script.js` — User interaction, API calls, message handling

**To modify:**
1. Edit HTML/CSS/JS files
2. Refresh browser (no restart needed)
3. Check browser console for errors (F12)

### Frontend (Mobile)

**Layout Files:**
- `mobile.html` — HTML structure (mobile-optimized)
- `mobile.css` — Mobile-specific styles and responsive design
- `mobile.js` — Mobile-specific client logic

**To test mobile layout:**
- Use browser DevTools (F12 → Toggle device toolbar)
- Or visit from a real mobile device: `http://<your-computer-ip>:3000/mobile.html`

### Additional Files

- `new.css`, `new.js` — Experimental styles/scripts (optional)
- `favicon.png` — Browser tab icon (self-served by Express)
- `index.html` — Default landing page
- `vercel.json` — Configuration for Vercel deployment

## Common Tasks

### Change the Server Port

1. Update `.env`: `PORT=8080`
2. Restart server
3. Visit `http://localhost:8080`

### Modify the DSA Instructor Personality

1. Open `server.js`
2. Find the system instruction in the GenAI client setup
3. Edit the instruction text
4. Restart server and test

### Add a New API Endpoint

1. Open `server.js`
2. Add a new route:
   ```javascript
   app.post('/api/new-endpoint', async (req, res) => {
     // Your logic here
   });
   ```
3. Restart server
4. Call from frontend using `fetch('/api/new-endpoint', { method: 'POST', ... })`

### Debug Client-Side Issues

1. Open Browser DevTools (F12)
2. Check **Console** tab for JavaScript errors
3. Check **Network** tab to inspect API requests/responses
4. Use `console.log()` in `script.js` or `mobile.js` for debugging

## Troubleshooting

### "Port 3000 is already in use"

- Change `PORT` in `.env` file
- Or find and stop the process using port 3000:
  - **Windows (PowerShell)**: `netstat -ano | findstr :3000`
  - **Mac/Linux**: `lsof -i :3000`

### "API_KEY not found" or API failures

- Verify `.env` exists in project root
- Check API key is valid and has quota
- Restart server after updating `.env`

### Mobile site looks broken

- Clear browser cache (Ctrl+Shift+Del)
- Check `mobile.css` for media query issues
- Test with DevTools device emulation (F12)

### Changes not appearing

- **Backend**: Always restart server after changes
- **Frontend**: Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

## Deployment

### Deploy to Vercel

1. Ensure `vercel.json` is in project root
2. Push to GitHub
3. Connect repo to [Vercel](https://vercel.com)
4. Configure environment variables in Vercel dashboard
5. Deploy

## Next Steps

- **UI improvements**: Edit `pc.html`, `mobile.html`, `style.css`, `mobile.css`
- **New features**: Add routes in `server.js` and corresponding frontend calls
- **Testing**: Use browser DevTools Console and Network tabs
- **Performance**: Monitor API response times and optimize queries
- **Deployment**: See Vercel setup above

