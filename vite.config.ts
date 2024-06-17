import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@global": path.resolve(__dirname, "src/global"),
      "@routing": path.resolve(__dirname, "src/routing"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@networking": path.resolve(__dirname, "src/networking"),
      "@features": path.resolve(__dirname, "src/features"),
    },
  },
});
