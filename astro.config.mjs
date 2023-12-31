import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import svgr from "vite-plugin-svgr"

import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  site: "https://joseavila.dev",
  integrations: [tailwind(), react(), svgr()],
})
