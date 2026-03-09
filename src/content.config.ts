import { defineCollection, z } from "astro:content";

const jobs = defineCollection({
  schema: z.object({
    title: z.string(),
    department: z.string(),
    location: z.string(),
    type: z.string(),
  }),
});

export const collections = { jobs };
