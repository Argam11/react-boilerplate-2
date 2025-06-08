import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { ViteUserConfig } from "vitest/config";
import { visualizer } from "rollup-plugin-visualizer";

const vitestConfig: ViteUserConfig = {
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [visualizer(), react()],
  test: vitestConfig.test,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@api": path.resolve(__dirname, "src/api"),
    },
  },
});
