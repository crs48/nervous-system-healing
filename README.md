# Nervous System Healing

A free, evidence-honest, trauma-informed website about nervous system healing
and somatic regulation — short practices, an honest directory of modalities,
and plain-language explainers. No accounts, no tracking, no money changes
hands.

**Live site:** https://crs48.github.io/nervous-system-healing/

## Stack

- [Astro 7](https://astro.build/) (static output) + [Tailwind CSS v4](https://tailwindcss.com/)
- Content lives in Markdown content collections; interactivity is small vanilla islands
- Deploys to GitHub Pages via GitHub Actions on push to `main`

Requires **Node 22+**.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # serve the built site
```

The site is served under the base path `/nervous-system-healing/`, so prefix
internal links with it (or use the `url()` helper in `src/lib/`).

## Content

Three content collections, defined in [`src/content.config.ts`](src/content.config.ts):

- **`practices`** — short somatic exercises (settle / remobilize / build-capacity).
- **`modalities`** — an honestly-graded directory of approaches, with real costs
  and evidence tiers.
- **`garden`** — plain-language explainers and field guides (surfaced under
  `/learn/`).

The voice and editorial rules every page follows live in
[`CONTENT_GUIDELINES.md`](CONTENT_GUIDELINES.md). Design decisions and the
project's direction are recorded as numbered explorations in
[`docs/explorations/`](docs/explorations/).

## Disclaimer

Educational content, not medical advice. If you're in crisis in the US: call or
text **988**, or text **HOME** to **741741**.
