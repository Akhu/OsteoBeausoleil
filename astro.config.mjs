import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./src/scripts/remark-reading-time.mjs";
import compressor from "astro-compressor";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
  output: "static",
  outDir: "dist",
  // Replace with your production domain
  site: process.env.SITE ?? "https://osteo-beausoleil.fr",
  trailingSlash: "always",
  server: { port: 3003 },
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "prepend" }],
    ],
  },
  integrations: [
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    compressor(),
  ],
});
