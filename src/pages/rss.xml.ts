import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const garden = await getCollection("garden");
  return rss({
    title: "Nervous System Healing",
    description:
      "A calm, honest place to understand and work with your nervous system.",
    site: context.site ?? "https://crs48.github.io/nervous-system-healing",
    items: garden
      .sort(
        (a, b) =>
          (b.data.lastTended ?? b.data.planted).getTime() -
          (a.data.lastTended ?? a.data.planted).getTime(),
      )
      .map((entry) => ({
        title: entry.data.title,
        description: entry.data.description,
        pubDate: entry.data.planted,
        link: `/learn/${entry.id}/`,
      })),
  });
}
