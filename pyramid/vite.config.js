import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   base: "/pyramid/",
//   plugins: [react()],
//   build: {
//     minify: false,
//     sourcemap: true,
//     imagePath: "/pyramid/src/assets/",
//     assetsInlineLimit: 0,
//   },
// });
export default defineConfig({
  base: "/pyramid/",
  plugins: [react()],
  build: {
    minify: false,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: "/path/to/main.js", // Указать путь к основному JS файлу,
      },
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").pop();
          if (extType === "css") {
            return "css/[name]-[hash][extname]";
          } else if (["png", "jpg", "jpeg", "gif", "svg"].includes(extType)) {
            return "images/[name]-[hash][extname]";
          } else {
            return "assets/[name]-[hash][extname]";
          }
        },
      },
    },
    publicDir: "public", // Убедиться, что эта директория существует и содержит наши изображения
    assetsInclude: [
      "**/*.png",
      "**/*.jpg",
      "**/*.jpeg",
      "**/*.svg",
      "**/*.gif",
    ],
    assetsInlineLimit: 0,
  },
});
