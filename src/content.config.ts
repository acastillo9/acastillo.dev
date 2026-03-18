import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    readTime: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    locale: z.enum(["en", "es"]).default("en"),
  }),
});

export const collections = { blog };
