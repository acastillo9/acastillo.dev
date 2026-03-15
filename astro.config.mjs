import { defineConfig, passthroughImageService } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  integrations: [react()]
});
