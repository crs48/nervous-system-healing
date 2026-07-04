import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Final merged schema — docs/explorations/0008 (merges 0002/0003/0004/0005).

const practices = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/practices" }),
  schema: z.object({
    title: z.string(),
    states: z.array(
      z.enum(["settle", "remobilize", "build-capacity", "freeze-blend"]),
    ),
    durationMinutes: z.number().min(1).max(10),
    sequenceTier: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    posture: z.enum(["lying", "seated", "standing", "walking", "any"]),
    modality: z.enum(["movement", "stillness", "touch", "sound", "breath"]),
    anchor: z.enum(["external", "mixed", "internal"]),
    stimPositive: z.boolean().default(true),
    soundContent: z.enum(["none", "voice", "chimes"]).default("none"),
    whyItWorks: z.string(),
    source: z.string(),
    lastReviewed: z.coerce.date(),
  }),
});

const modalities = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/modalities" }),
  schema: z.object({
    name: z.string(),
    category: z.enum([
      "therapy",
      "bodywork",
      "movement",
      "breath",
      "medical",
      "framework",
    ]),
    evidenceTier: z.enum([
      "strong",
      "moderate",
      "preliminary",
      "practitioner-reported",
      "contested",
    ]),
    evidenceNote: z.string(),
    credentialGate: z.enum([
      "licensed",
      "certified-unlicensed",
      "unregulated",
    ]),
    costAccess: z.string(),
    whoItTendsToFit: z.string(),
    whoItMayNotFit: z.string(),
    directoryUrl: z.string().url().optional(),
    archivedDirectoryUrl: z.string().url().optional(),
    founderExperience: z.string().optional(),
    freeFirstSteps: z.array(z.string()).default([]),
    lastReviewed: z.coerce.date(),
  }),
});

const garden = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/garden" }),
  schema: z.object({
    title: z.string(),
    type: z.enum(["note", "essay", "guide", "field-guide"]).default("note"),
    stage: z.enum(["seedling", "budding", "evergreen"]).default("seedling"),
    series: z.string().optional(),
    order: z.number().optional(),
    practiceStage: z.enum(["notice", "connect", "act"]).default("notice"),
    demo: z
      .enum(["none", "tone-probe", "percept-poll", "illusion"])
      .default("none"),
    description: z.string(),
    planted: z.coerce.date(),
    lastTended: z.coerce.date().optional(),
    lastReviewed: z.coerce.date(),
    sources: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .default([]),
  }),
});

export const collections = { practices, modalities, garden };
