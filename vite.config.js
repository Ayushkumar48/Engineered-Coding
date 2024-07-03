import { defineConfig } from "vite";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [enhancedImages(), svelte()],
});
