// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Canonical decisions: docs/explorations/0008 (M0 — same-repo GitHub Pages).
export default defineConfig({
  site: "https://crs48.github.io",
  base: "/nervous-system-healing",
  trailingSlash: "always",
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
