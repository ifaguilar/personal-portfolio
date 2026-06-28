import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ifaguilar-personal-portfolio.netlify.app",
  integrations: [react(), sitemap(), mdx()],
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },
});
