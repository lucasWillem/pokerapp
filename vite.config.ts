import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@authentication": path.resolve(__dirname, "src/authentication"),
      "@global": path.resolve(__dirname, "src/global"),
      "@networking": path.resolve(__dirname, "src/networking"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@routing": path.resolve(__dirname, "src/routing"),
    },
  },
});
