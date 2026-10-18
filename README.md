# Portfolio — Dhairya Thakker

Personal portfolio site: projects, work experience, writing, skills and contact details.

**Live:** _not deployed yet — replace this line with the Vercel URL once it is._

## Stack

- **React 18** + **TypeScript**, built with **Vite 5**
- **IBM Plex Sans** + **IBM Plex Mono**, a pair designed for technical documentation
- **react-icons** / **lucide-react** for iconography
- **react-type-animation** for the role line in the hero
- Plain CSS with custom properties — no CSS framework, no animation library

## Design

The page is laid out as a technical spec sheet rather than a stack of cards:
numbered sections, hairline rules, a left meta column carrying indices and dates,
and figures from the work (`~32%`, `22 GB → 15 GB`, `17+ document types`) set in
mono accent so they read as data.

Two themes, `dark` (default) and `light`, are blocks of custom properties in
[`src/index.css`](src/index.css) selected by `data-theme` on `<html>`. Components
never hardcode a colour — they read `--bg`, `--text`, `--text-2`, `--rule` and
`--accent` — so a theme is a variable block and nothing else.

The choice persists to `localStorage` and otherwise follows `prefers-color-scheme`.
An inline script in [`index.html`](index.html) applies it before first paint,
without which the page flashes dark before React mounts.

Both themes are verified against WCAG AA: every text token clears 4.5:1 on its own
background, and so does the label on the primary button.

## Running locally

```bash
npm install
npm run dev
```

Vite serves on http://localhost:5173 by default.

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with HMR |
| `npm run build` | Type-check (`tsc -b`) then build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint over the project |

## Project structure

```
public/            Static assets served as-is (profile image, favicon, resume PDF)
src/
  App.tsx          Layout and section order
  index.css        Design tokens, both themes, type scale, base styles
  hooks/           useReducedMotion
  components/      One .tsx + .css pair per section, plus SectionHeading
```

`src/main.tsx` imports `index.css` **before** `App` on purpose: `App` pulls in every
component stylesheet, and if those land first the base `.mono-label` colour wins every
equal-specificity tie and greys out accents the components set deliberately.

Sections render in the order set in [`src/App.tsx`](src/App.tsx):
Hero → Projects → Experience → Writing → Skills → Education.

Content lives in arrays at the top of each component rather than in markup:

- **Projects** — the `projects` array in
  [`src/components/Projects.tsx`](src/components/Projects.tsx). A project without a
  `demo` URL renders its `status` text instead of a demo button, so unfinished work can
  sit on the page honestly rather than linking somewhere broken.
- **Writing** — the `posts` array in
  [`src/components/Writing.tsx`](src/components/Writing.tsx), mirroring
  [medium.com/@dhairyathakker76](https://medium.com/@dhairyathakker76). Kept static
  deliberately: Medium's RSS feed sends no CORS headers, so fetching it from the browser
  would fail.
- **Experience**, **Skills**, **Education** — likewise, arrays at the top of each file.

## Accessibility and motion

The hero's cycling role text is `aria-hidden` with a visually-hidden static
alternative behind it, so a screen reader is not re-announced on every character.
The page grain is decorative and `aria-hidden`.

The site honours `prefers-reduced-motion: reduce`: the grain is removed, the hero
stops cycling roles, and animation and transition durations collapse to near-zero.

Lighthouse on the production build: **99 / 100 / 100 / 100**
(performance, accessibility, best practices, SEO).

## Deploying

A static Vite build, so any static host works. For Vercel, import the repository and
keep the detected defaults (build `npm run build`, output `dist`).

Before the first deploy, replace the `REPLACE_WITH_DEPLOYED_URL` placeholders in
[`index.html`](index.html) with the real origin so the canonical and Open Graph tags
resolve, and add `public/og-image.png` (1200×630) for link previews.

## Known gaps

- No collapsible mobile menu — the navbar links scroll horizontally instead.
- The profile image is JPEG, not WebP/AVIF — worth converting when tooling allows.
- `index.html` carries `REPLACE_WITH_DEPLOYED_URL` placeholders until the first
  deploy; until they are swapped for the real origin, link previews will not resolve.

The link-preview card at `public/og-image.png` is generated from
[`tools/og-image.html`](tools/og-image.html) — that file documents the one-line
Chrome command that regenerates it.

## License

All rights reserved.
