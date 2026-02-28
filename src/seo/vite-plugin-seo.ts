import type { Plugin } from "vite";
import { generateSitemap } from "./generate-sitemap";
import { generateRobots } from "./generate-robots";

export function seoPlugin(): Plugin {
  return {
    name: "vite-plugin-seo",
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: generateSitemap(),
      });
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: generateRobots(),
      });
    },
  };
}
