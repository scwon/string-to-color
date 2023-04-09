import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/main.ts"),
      name: "string-to-color",
      fileName: "string-to-color",
    },
  },
});
