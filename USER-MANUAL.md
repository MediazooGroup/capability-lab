# User manual

## Open the experience

- Learning board: https://peritus-capability-lab.john959475.chatgpt.site/board
- Read the brain: https://peritus-capability-lab.john959475.chatgpt.site/brain
- Presentation: https://peritus-capability-lab.john959475.chatgpt.site/present
- Download and adapt: https://peritus-capability-lab.john959475.chatgpt.site/resources

## Use the learning board

The board teaches a fictional first one-to-one using Ask, Listen, Agree. Start the walkthrough or select any of six stops. Drag the canvas to explore and use its zoom controls or a pinch gesture. Whole board returns to the overview. The same learning content is available in the readable panel, including on phones and with keyboard navigation.

Meet Sam has three choices. A weak choice gives explanatory feedback and a chance to try again. The stronger opening has a reason too. On Make it yours, start the three-minute rehearsal, check the behaviours you practised and write a next action. Download the action note before leaving the tab; this board does not store or transmit the note.

Every stop links to the source note behind it. Edit a copy enables Excalidraw editing; Save board downloads your current `.excalidraw` file. Save before leaving. SVG downloads a reusable image of the current diagram. Canvas edits are local and do not change the web lesson or public website.

The example is fictional; the framework is illustrative. Use your organisation’s own guidance for real situations and review adaptations with a subject owner.

## Read the brain

The brain page has two collections: the learning board’s brain and the session’s brain. Select a file to read it. Its arrow opens the exact file on GitHub. The download includes these source files plus the skill and the generated output.

## Download and get live

1. GitHub → Code → Download ZIP. Unzip it.
2. Open `launch-ready/index.html` to try the already-built board.
3. Sign in to Netlify Drop and upload the whole `launch-ready` folder. Check the URL on a phone before sharing it.

Read START-HERE.md for the reusable adaptation prompt. A chat can help write the brain; an AI coding tool with file and code access can build and preview the application. REBUILD.md contains the exact commands. Update public links and QRs when publishing your own version. Your first copied launch-ready folder links back to this original kit until you change them.

## Present the 30-minute session

Open `/present`. Every scene uses a 1600 × 900 design canvas that scales to the available window. Use a desktop browser for the projector. F requests full screen. The timer does not advance scenes automatically.

The introduction shows John’s real portrait. Click the picture of the board to open the live interactive learning experience in an overlay. Use its six stops, source links and practice interaction. Close the overlay to return to the same scene.

The monitor control opens speaker notes in a separate window. Keep notes on the laptop and project only the main presentation window. The two windows synchronise navigation in the same browser. If pop-ups are blocked, open `/present?view=speaker` in a second window. Follow RUN-OF-SHOW.md; 16 scenes total 30 minutes, including audience discussion and a closing question.

| Control | Action |
| --- | --- |
| Right arrow / Space / Page Down | Next scene |
| Left arrow / Page Up | Previous scene |
| Home / End | First / last scene |
| O | Open scene overview |
| M | Brain → skill → output pattern |
| F | Toggle full screen |
| D | Toggle drawing |
| C | Clear drawing |
| B | Blank / restore the screen |
| Escape | Close overlay / exit full screen |

Drawing captures clicks until turned off. Annotations clear when changing scenes. Shortcuts pause while typing or reading a dialog. In the board overlay, the board controls handle its interactions.

## Offline and venue fallback

Download `offline-presentation.html` in advance and open it in a browser. It includes the scene sequence, speaker notes, portrait, artwork, board picture and the interactive board. Public GitHub links and audience QR destinations need a network connection. The separate `launch-ready/index.html` is the learning board by itself.

Before the event, rehearse the talk, scan the three QRs with a phone, test venue Wi-Fi and the projector, and check which window is being shared. Automated tests do not verify the venue’s equipment or learner effectiveness. If phones are unavailable, let people follow the shared board and write their topic, audience, desired behaviour and source knowledge on paper.

## The optional original lab

`/lab` retains the source-to-activity preview, skill recipe builder and pilot planner as additional exercises. The source preview uses fixed rules and is labelled as such. It does not call a model. Recipe and pilot entries use local browser storage with a visible fallback if blocked; download them before clearing storage or switching device. The reset control asks before replacing them.

## Troubleshooting

- Board looks too close: choose Whole board or use zoom controls. On a phone, scroll to the readable learning panel.
- Slide does not fit: use the full-screen control; the whole scene should scale to the available area. Use the board page directly for readable phone learning.
- Buttons seem blocked: turn off drawing with D; close any open overlay.
- Presentation is blank: press B or click the blank screen.
- Changes disappeared: edits on the board stay in the tab until Save board; the action note must be downloaded. The optional lab has separate device-local storage.
- Copy is unavailable: use the download button or select the text.
- GitHub or a host is blocked at work: use your organisation’s approved route for public learning material.
- Notes appear on the projector: share only the presentation window and move speaker view to your laptop.

Read BUILD-RECEIPT.md for the tested configurations and remaining real-world checks.
