Simple Node.js + static frontend project for experimenting with GenAI examples.

Quick start
1. Install dependencies:

	npm install

2. Start the server:

	GenAI — Day 1

	Overview
	 - Small Node.js project with a static frontend that demonstrates integration with a GenAI model (via the `@google/genai` SDK). The server exposes a single API endpoint used by the frontend to send prompts to the model and return generated text.

	Features
	 - Express server serving static frontend files and a simple `/api/ask` endpoint.
	 - Example frontend (`index.html`, `script.js`, `style.css`) to interact with the API.
	 - Uses `dotenv` to load `API_KEY` from a `.env` file for the GenAI SDK.

	Quick start
	1. Install dependencies:

	```bash
	npm install
	```

	2. Start the server:

	```bash
	npm start
	```

	3. Open your browser at `http://localhost:3000` (default). If you set a custom `PORT` in `.env`, use that port.

	API
	- POST `/api/ask`
	  - Request JSON: `{ "question": "<the question>" }`
	  - Response JSON: `{ "text": "<model response>" }`

	Environment variables
	- `API_KEY` — required: API key for the GenAI provider (set in `.env`).
	- `PORT` — optional: port for the Express server (defaults to `3000`).

	Files of interest
	- `server.js` — Express server and GenAI integration.
	- `index.html`, `script.js`, `style.css` — frontend UI and client behavior.
	- `package.json` — project metadata and `start` script.

	Security & behavior note
	- The server configures a system instruction (in `server.js`) that changes the assistant's behavior. Review and sanitize any system instructions before sharing or deploying the app — they may instruct the model to respond offensively or otherwise inappropriately.

	License
	- ISC

