# Build receipt

Built 7–8 September 2026 for John Gordon’s Peritus session.

## What the audience can inspect

| Asset | Source brain | Reusable skill | Actual output |
| --- | --- | --- | --- |
| Interactive learning dashboard | learning-brain/ | skills/build-learning-board/ | output/better-one-to-ones.excalidraw, launch-ready/, app-source/components/learning-board.tsx |
| Click-through presentation | second-brain/01-session/, method and brand notes | skills/build-web-presentation/ | app-source/components/teaching-story.tsx, offline-presentation.html |
| Source browser and audience app | Both public brains | skills/build-audience-app/ | app-source/app/, components/brain-browser.tsx |
| Additional learning activity | second-brain/03-examples/ | skills/build-learning-asset/ | examples/ and the optional /lab exercise |
| Download and launch kit | Public source collection and final user direction | skills/build-take-home-kit/ | This repository, START-HERE.md, REBUILD.md, USER-MANUAL.md |
| Review and maintenance | Brief, sources and feedback | skills/check-session/, skills/update-second-brain/ | Tests, refinement note, this receipt and CHANGELOG |

## The source-to-output path

The public source notes were gathered from the session brief, John’s Second Brain Blueprint course and stream teaching, plus Finer Vision brand guidance. The private email and workspace brains remain outside this repository. The illustrative manager lesson was authored into a separate small learning brain.

`learning-brain/board.json` holds the structured lesson and source references. `scripts/sync-content.mjs` copies the public source text, lesson and timed session into the app. `app-source/scripts/build-board.mjs` generates the real editable Excalidraw elements. The app uses those elements and the same lesson data for the guided learning experience. The picture in the presentation is a native SVG export of that board.

The saved build skills guided AI-assisted authoring, browser review and refinement. The build includes human direction and iterative editing; it is not a one-click generation or a live model call. The first-draft and refined examples are deliberately authored versions showing the design decision. A learner effectiveness pilot has not been run.

The original generated artwork uses the saved prompt in `output/artwork-prompt.txt`. John’s actual portrait comes from the primary Mediazoo source recorded in the source register. The source includes both assets. Third-party software and embedded font notices are preserved.

## Verification

- TypeScript check and application lint passed.
- 16 unit tests passed. Model-only coverage: 100% lines and functions, 93.93% branches; this is not a claim of 100% coverage of the full app.
- Browser suite: 123 passed, 29 intentionally skipped. Desktop Chromium, desktop Firefox, mobile Chromium (Pixel 7 viewport) and mobile WebKit (iPhone 13 viewport).
- All 16 scenes fit inside the window without scene or page overflow at 1280×720, 1440×900, 1920×1080, 1024×768 and 900×600.
- The browser suite checks guided stops, actual canvas clicks, editing and Excalidraw export, SVG export, scenario feedback, rehearsal/action export, source files, the three QR links, keyboard/drawing controls, presenter synchronisation, the optional lab and storage failure recovery.
- Axe WCAG 2 A/AA and 2.1 AA checks passed on the board overview, decision, practice, brain and principal app routes. Automated checks do not establish complete accessibility conformance.
- The launch-ready board and offline presentation were opened from file URLs with networking disabled, including source viewing and board interaction.
- All three rendered QR images were independently decoded to their intended board, brain and GitHub URLs.
- A separate installation of the public app-source passed npm ci, typecheck, 16 unit tests, board generation, standalone build and full static build.
- npm audit reported zero vulnerabilities with the committed lockfile.
- All seven SKILL.md files passed the skill validator. The optional learning-asset recipe includes authored complete, missing-input and second-brief references; these are not claimed as cross-model benchmark results.

Platform skips are intentional: projector fit runs once across five sizes in Chromium; file-download fallback and presenter workstation controls do not run on emulated phones. Device entries describe automated browser configurations, not physical-device testing.

## What remains a real-world check

Rehearse the timing in your own voice. Test the venue projector and Wi-Fi, scan the QRs on a physical phone, and ask a subject owner and learner to review an adaptation. Netlify instructions follow its documented upload flow; no attendee Netlify account was created or deployment performed. The public workshop itself is hosted at the links in README.md.

See REBUILD.md to repeat the checks. The manual explains what stays in a tab, what is saved on the device, and what must be downloaded.
