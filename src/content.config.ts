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
          type: z.enum(["website", "github"]),
          href: z.url(),
        }),
      )
      .default([]),
    technologies: z.array(z.string()).default([]),
    images: z.array(z.string()).default([]),
    order: z.number().default(99),
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
