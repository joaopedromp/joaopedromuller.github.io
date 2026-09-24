# Joao Pereira · Portfolio

A personal portfolio presented as an interactive network topology.

**[View the website](https://joaopedromuller.me/)**

Explore work experience, TutorTrack, education, tutoring, running, and competitive Valorant through connected devices. The contact cloud links to LinkedIn, GitHub, and a downloadable résumé.

## Design

A quiet full-screen canvas with light and dark themes, keyboard-accessible device dialogs, and a responsive layout. The conceptual network follows an ISP uplink → router → access switch → endpoint topology. Gigabit uplinks and separate FastEthernet access ports keep the diagram consistent; it is a navigation metaphor, not a live network or simulator.

## Local development

No dependencies, package installation, or compilation are required.

```sh
python -m http.server 4173
```

Open http://localhost:4173. You can also open `index.html` directly.

## Project structure

| File                        | Purpose                                              |
| --------------------------- | ---------------------------------------------------- |
| `index.html`                | Semantic page structure and network devices          |
| `styles.css`                | Themes, responsive layout, and device windows        |
| `app.js`                    | Portfolio content, dialogs, and connection rendering |
| `theme.js`                  | Restores the saved color preference before rendering |
| `joao-pereira-resume.pdf`   | Public résumé                                        |
| `CNAME`                     | GitHub Pages custom domain                           |
| `scripts/security.test.mjs` | Static security and integrity checks                 |

## Updating content

Edit the section data in `app.js`. Content is maintained in source; no visitor input is inserted into the page. Replace the public PDF to update the résumé. Use only information and assets intended for public viewing. TutorTrack screenshots will be added when real project assets are available.

## Verification

```sh
node --test scripts/security.test.mjs
```

The repository runs these checks on pushes and pull requests. Before release, also run a secret scan with Gitleaks:

```sh
gitleaks dir . --redact
gitleaks git . --redact
```

The site has no backend, authentication, analytics, forms, API keys, or third-party JavaScript. A restrictive Content Security Policy blocks inline scripts, external resources, and network requests from scripts. Only the theme preference is stored in the browser.

See [SECURITY.md](SECURITY.md) for scope and platform limitations.

## Hosting

Published using GitHub Pages from `main` at the repository root. `CNAME` preserves **joaopedromuller.me**. HTTPS is managed by GitHub Pages. Changes to `main` trigger the existing Pages deployment.

## Content sources

Professional details are maintained from my résumé and [LinkedIn](https://www.linkedin.com/in/joao-pereira-6960822a4/). Competitive results link to [VLR.gg](https://www.vlr.gg/player/5300/jayp). Running results and TutorTrack details are personal records.

## Change history

See [CHANGELOG.md](CHANGELOG.md) for documented updates. Contact links and the résumé open in a separate tab or window (depending on browser settings).
