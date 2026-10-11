# Gently — Nervous System Healing

A free, evidence-honest, trauma-informed website about nervous system healing
and somatic regulation — short practices, an honest directory of modalities,
and plain-language explainers. No accounts, no tracking, no money changes
hands.

**Live site:** [gently.fyi](https://gently.fyi/)

**Public repository:** [crs48/nervous-system-healing](https://github.com/crs48/nervous-system-healing)

A community resource by **Christopher Smothers**, released under the
[MIT license](LICENSE). You're welcome to use, adapt, and improve it.
See [CONTRIBUTING.md](CONTRIBUTING.md) for corrections, research updates,
accessibility improvements, and pull requests.

## Design

The homepage starts with the original five-part introduction. The same reading
layout, typography, navigation, and restrained palette apply across the tour,
articles, practices, directories, and tools. Existing article content is preserved.
People and research references live under
[Understand](https://gently.fyi/learn/people-and-research/).

The [style guide](https://gently.fyi/style/) documents the shared components.
The earlier illustrated [design concept](docs/concepts/a-little-more-room/README.md)
is preserved as an archive, separate from the current website.

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

The site is served at the root of `https://gently.fyi/`. Use the `url()` helper
in `src/lib/` for template links and root-relative paths such as `/practices/`
in Markdown content.

The custom domain is configured in the repository's GitHub Pages settings.
The Actions deployment uses `astro.config.mjs` for canonical URLs, RSS, and
the sitemap; it does not require a `CNAME` file.

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
