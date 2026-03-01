# GenAI — Day 1: DSA Instructor

A responsive Node.js + Express project with GenAI integration to build an interactive DSA (Data Structures & Algorithms) instructor chatbot. Features desktop and mobile-optimized interfaces.

## Overview

Small Node.js project with dual frontend interfaces demonstrating integration with a GenAI model (via the `@google/genai` SDK). The server exposes a simple `/api/ask` endpoint for both desktop and mobile clients to send prompts and receive AI-generated responses.

## Features

- **Express server** serving static frontend files and `/api/ask` API endpoint
- **Responsive design** with separate layouts for desktop and mobile devices
- **Dual interfaces**:
  - Desktop version: `pc.html` with `style.css` and `script.js`
  - Mobile version: `mobile.html` with `mobile.css` and `mobile.js`
- **GenAI integration** using `@google/genai` SDK for intelligent responses
- **Environment configuration** via `.env` file for API keys and settings
- **Vercel deployment ready** with `vercel.json` configuration

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file and add your API key:
```
API_KEY=<your-google-genai-api-key>
PORT=3000
```

3. Start the server:
```bash
npm start
```

4. Open your browser:
   - Desktop: `http://localhost:3000/pc.html`
   - Mobile: `http://localhost:3000/mobile.html`
   - Default: `http://localhost:3000` (serves `index.html`)

## API

- **POST** `/api/ask`
  - Request JSON: `{ "question": "<the question>" }`
  - Response JSON: `{ "text": "<model response>" }`

## Environment Variables

- `API_KEY` — **required**: API key for Google GenAI (set in `.env`)
- `PORT` — **optional**: Express server port (defaults to `3000`)

## File Structure

### Backend
- `server.js` — Express server, GenAI integration, and API routes
- `package.json` — Dependencies and project metadata
- `vercel.json` — Vercel deployment configuration

### Frontend (Desktop)
- `pc.html` — Desktop interface with two-pane layout
- `style.css` — Desktop styling and animations
- `script.js` — Desktop client-side logic

### Frontend (Mobile)
- `mobile.html` — Mobile-optimized interface
- `mobile.css` — Mobile styling and responsive design
- `mobile.js` — Mobile client-side logic

### Additional
- `index.html` — Default entry point
- `new.css`, `new.js` — Additional styles and scripts (experimental)
- `favicon.png` — App icon for browser tabs
- `.env` — Environment variables (not versioned)

## Security Note

The server includes system instructions that shape the assistant's behavior. Review `server.js` and customize instructions before deployment to ensure appropriate responses.

## License

ISC

