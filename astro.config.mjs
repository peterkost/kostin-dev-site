// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  redirects: {
    "/on-devex": "/blog/on-developer-experience",
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },

    imageService: "cloudflare",
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
