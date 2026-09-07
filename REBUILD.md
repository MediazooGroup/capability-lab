# Rebuild or adapt the working example

For an AI coding assistant or someone comfortable with a terminal. Attendees can launch the supplied `launch-ready` folder without these steps.

Use Node.js 22.13 or later (Node 24 is a good choice) and npm. Keep the lockfile. From this repository root:

```sh
node scripts/sync-content.mjs
cd app-source
npm ci
npm run build:board
npm run dev
```

Open the local URL printed by the dev command. `/board` is the learning asset; `/brain` reads the real source files; `/present` is the click-through presentation. Stop dev with Ctrl+C before doing a clean build if you need to reuse its port.

## Change the teaching

Read `skills/build-learning-board/SKILL.md`. Update `learning-brain/` and its `board.json` together. The brief, audience, framework, scenario and quality notes remain the source of truth. The structured JSON feeds both the generated Excalidraw scene and the learning panel.

From the repository root, sync again with `node scripts/sync-content.mjs`. In `app-source`, run `npm run build:board` and preview the board. This creates `lib/board-scene.json` and `public/downloads/better-one-to-ones.excalidraw`. Use the board’s SVG download to refresh `public/board-preview.svg` after changing the diagram, so the presentation image matches the output.

The diagram file alone does not contain the web application’s feedback, timer or action-note form. The web application and structured lesson create those interactions.

## Build the shareable versions

In `app-source`:

```sh
npm run build:launch
npm run build:offline
npm run build
```

- `launch-ready/` contains the standalone learning board. Open `index.html` directly, or publish the whole folder with static hosting. Copy this freshly rebuilt folder to the repository’s root `launch-ready/` when preparing a new take-home kit.
- `public/offline-presentation.html` contains the self-contained presentation. Copy it to the repository root when refreshing the kit.
- `dist/client/` contains the full static site. The host should serve extensionless paths from their `.html` files (for example `/board` → `board.html`).

Preview the full static build with:

```sh
PORT=4186 node scripts/serve-static.mjs
```

Then open `http://localhost:4186`. No backend, API key, database or participant account is required. The app does not call a live model.

## Update your public links

Change `SITE_URL` and `REPO_URL` in `app-source/lib/model.ts` for your deployment. Update the `site` constant in `scripts/build-board.mjs`. Regenerate the board and QR images with `node scripts/make-qr.mjs <your-https-site-origin>`, then rebuild. The standalone copy still links to this original kit until you change those destinations.

## Verify the change

```sh
npm run typecheck
npm run lint
npm run test:coverage
npx playwright install chromium firefox webkit
```

Build the static site, leave the static preview server running, then in another terminal:

```sh
TEST_BASE_URL=http://localhost:4186 npm run test:e2e
```

The tests cover the lesson, sources, exports, learner feedback, presentation controls, all-scene viewport fit, accessibility and the original optional lab. The offline tests require `build:launch` and `build:offline` first. Browser dependencies may need installation on Linux; follow Playwright’s printed instructions.

## Edit the talk

Change the session brief and `second-brain/01-session/session.json`. The 16 scenes total 1,800 seconds. Sync the content, then use `skills/build-web-presentation/SKILL.md` to adapt `components/teaching-story.tsx`. Keep the learning board, the three QR destinations and the closing reveal aligned. `/present?view=speaker` reads the same canonical notes and timings.

`app-source/.openai/hosting.json` in this public kit is intentionally unregistered. Bring your own hosting; never copy private credentials into this repository.
