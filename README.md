# lbk-website

A single-page personal website for Danish scientist **Lotte Bjerre Knudsen**,
Chief Scientific Advisor at Novo Nordisk and a pioneer of GLP-1 medicines.

Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev      # start the dev server at localhost:4321
npm run build    # build the production site to ./dist
npm run preview  # preview the production build locally
```

## Configuration

The site is served from the root of its custom domain,
[lottebjerreknudsen.com](https://lottebjerreknudsen.com), so `astro.config.mjs`
sets `site` to that domain and has no `base`. Canonical links, hreflang, Open
Graph URLs and the sitemap are all derived from it.

The custom domain itself is configured in the repo's **Settings → Pages**
(deploys go through GitHub Actions, so no `CNAME` file is needed).

## Deployment

Pushes to `main` trigger the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds the site and publishes it to
GitHub Pages.

If the site does not appear, enable Pages manually under
**Settings → Pages → Source: GitHub Actions**.

## Project structure

```
├── .github/workflows/deploy.yml   # GitHub Pages deploy workflow
├── public/                        # static assets (favicon, robots.txt, .nojekyll)
├── src/
│   ├── components/                # Nav (with language toggle), Footer, PageContent, Entry, Mentoring
│   ├── data/                      # content.ts — all copy + links for both languages
│   │                              # sections.ts — which sections are switched on
│   ├── layouts/                   # BaseLayout
│   ├── pages/                     # index.astro (English), da.astro (Danish)
│   └── styles/                    # global.css
├── astro.config.mjs
└── package.json
```

## Content & languages

The site is bilingual: English at `/` and Danish at `/da/`, switched via the
`EN / DA` toggle in the top-right of the nav. All copy and links live in
[`src/data/content.ts`](src/data/content.ts) as a single `content` record keyed
by locale — edit the text there and both the page and its translation update.
`PageContent.astro` renders every section from that data, so the two pages stay
structurally identical.

## Held-back sections

The site launched in September 2026 in a stripped-back form. The mission
statement, the "Invite Lotte to Speak" block and the major/minor split of the
awards list are all still written and still type-checked — they are switched off
in [`src/data/sections.ts`](src/data/sections.ts). Flip those flags to `true` to
bring the full site back; no copy needs rewriting.

The tag `full-site-v1` is a snapshot of the markup as it rendered before those
edits: `git show full-site-v1:src/components/PageContent.astro`.

## Design

- **Type:** Hanken Grotesk (display + body + labels), via Google Fonts
- **Palette:** pink accent `#FF2F81`, soft pink section background `#FFF0F8`,
  ink `#18171A`, muted grey `#6F6C70`, hairline rule `#E9E6EA`, white `#FFFFFF`
- **Layout:** a Swiss-style label/body grid, a diagonal pink wordmark hero, and
  a large editorial footer.
