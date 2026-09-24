# Joao Pereira · Portfolio

[joaopedromuller.me](https://joaopedromuller.me/)

My personal portfolio, inspired by Cisco Packet Tracer. Each device opens a part of my story: cybersecurity work, TutorTrack, tutoring, running, and competitive Valorant.

Built with HTML, CSS, and JavaScript. Includes light and dark themes and works on desktop and mobile. Hosted on GitHub Pages.

## Run locally

Open `index.html` in a browser, or start a local server:

```sh
python -m http.server 4173
```

Then visit http://localhost:4173.

## Editing

Portfolio content lives in `app.js`, layout in `index.html`, and styling in `styles.css`.

Automated checks run on pushes and pull requests. To run them locally:

```sh
node --test scripts/security.test.mjs
```
