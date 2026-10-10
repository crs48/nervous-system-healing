# Nervous System Healing

A free, evidence-honest, trauma-informed website about nervous system healing
and somatic regulation — short practices, an honest directory of modalities,
and plain-language explainers. No accounts, no tracking, no money changes
hands.

**Live site:** https://crs48.github.io/nervous-system-healing/

**Public repository:** [crs48/nervous-system-healing](https://github.com/crs48/nervous-system-healing)

A community resource by **Christopher Smothers**, released under the
[MIT license](LICENSE). You're welcome to use, adapt, and improve it.
See [CONTRIBUTING.md](CONTRIBUTING.md) for corrections, research updates,
accessibility improvements, and pull requests.

## Design exploration

The homepage uses the **A little more room** design: an illustrated welcome,
optional starting invitations, a quiet view, and annotated people and research.
The original [design concept](docs/concepts/a-little-more-room/README.md) remains
as a standalone reference, with screenshots and links to the research and
broader overhaul brief.

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

## License and third-party material

Original project code, documentation, and illustrations are available under
the [MIT license](LICENSE), copyright © 2026 Christopher Smothers.

Bundled fonts retain their SIL Open Font License notices:
[Fraunces](docs/concepts/a-little-more-room/assets/FRAUNCES-LICENSE.txt) and
[Atkinson Hyperlegible Next](docs/concepts/a-little-more-room/assets/ATKINSON-LICENSE.txt).
Dependencies retain their own licenses. Linked papers, books, and other
external resources are not relicensed by this project.
