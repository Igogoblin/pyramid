import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/pyramid/",
  plugins: [react()],
  // build: {
  //   minify: false,
  //   sourcemap: true,
  //   imagePath: "/pyramid/src/assets/",
  // },
});
