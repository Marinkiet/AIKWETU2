import { defineConfig } from "vite";

export default defineConfig({
  base: "./aikwetu",
  build: {
    minify: "terser",
  },
});
