import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const projects = defineCollection({
  loader: glob({
    base: "./src/features/projects/content",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    links: z
      .array(
        z.object({
          type: z.enum(["github", "website"]),
          href: z.string().url(),
        }),
      )
      .default([]),
  }),
});

const blog = defineCollection({
  loader: glob({
    base: "./src/features/blog/content",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { projects, blog };
