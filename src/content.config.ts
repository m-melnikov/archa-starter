import { defineCollection, z } from "astro:content";

const jobs = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().max(130),
    department: z.string(),
    location: z.string(),
    type: z.string(),
  }),
});

export const collections = { jobs };
