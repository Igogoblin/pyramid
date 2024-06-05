import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/,
export default defineConfig({
  base: "/pyramid/",
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/**/*",
          dest: "src/assets",
        },
      ],
    }),
  ],
  build: {
    minify: false,
    sourcemap: true,
    assetsInlineLimit: 0,
  },
});
