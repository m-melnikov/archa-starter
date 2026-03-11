import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const jobs = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/jobs",
    generateId: ({ entry }) => entry.toLowerCase().replace(/\.md$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(130),
    department: z.string(),
    location: z.string(),
    type: z.string(),
  }),
});

export const collections = { jobs };
