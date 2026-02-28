Instructions for this project

Prerequisites
- Node.js (v16+ recommended)
- npm (bundled with Node.js)

Setup
1. Install dependencies:

	npm install

2. Create a `.env` file (optional) and add environment variables used by `server.js`.

Run the app
1. Start the server:

	npm start

2. Open a browser and navigate to `http://localhost:3000` (or the port shown in `server.js`).

Development notes
- Server entry: `server.js` — edits here control the backend routes and API behavior.
- Frontend files: `index.html`, `script.js`, `style.css`.
- To add routes or middleware, update `server.js` and restart the server.

Troubleshooting
- If ports are in use, change the port in `server.js` or stop the conflicting service.
- If environment variables are missing, check `.env` and `dotenv` usage in `server.js`.

Where to look next
- Quick edits: modify `index.html` and `script.js` for UI/UX changes.
- Backend logic: modify `server.js` and use `console.log` during development.

