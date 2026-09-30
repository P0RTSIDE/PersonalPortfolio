# Sol Abrian

Portfolio site for interactive web applications and data tools. The page lists selected projects, a short skills line, and a contact address.

## Projects on the site

| Project | What it is | Live |
| --- | --- | --- |
| Forest Clearing & Permit Map | Sentinel-2 vegetation loss in southern Pará, joined to public mining and logging permits | [illegal-deforestation-detector.vercel.app](https://illegal-deforestation-detector.vercel.app/) |
| FILERANK | Small and micro-cap ranking from SEC filing fundamentals. Research display, not financial advice | [penny-stock-tracker.vercel.app](https://penny-stock-tracker.vercel.app/) |
| Ripple | Pond simulation whose impacts also drive procedural sound, plus a rain-on-glass rhythm studio | [ripplefish.xyz](https://ripplefish.xyz/) |
| Globe of Earthquakes | USGS events on a 3D globe. Spike height is frequency, color is average magnitude | [globe-of-earthquakes.vercel.app](https://globe-of-earthquakes.vercel.app/) |
| Blindspot Tracker | Coverage gaps across the political spectrum, plus per-article lean scoring | [political-bias-analysis.vercel.app](https://political-bias-analysis.vercel.app/analyze) |
| Toes Down | Heads Up style recall game with study packs and phone tilt | [toes-down-deployed.vercel.app](https://toes-down-deployed.vercel.app/) |

Contact on the page: sol@abrianiii.com.

## Stack

React 18, TypeScript, and Vite. The hero background uses [particles.js](https://github.com/VincentGarreau/particles.js) (Vincent Garreau, MIT), vendored at `public/vendor/particles.js`. Project copy and links live in `src/projects.ts`.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```
