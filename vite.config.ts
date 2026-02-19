import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Use repo base path only in production (GitHub Pages). In dev we want root (/).
  base: mode === "production" ? "/Portfolio/" : "/",
  server: { host: "::", port: 8080 },
  build: { outDir: "dist", emptyOutDir: true },   // deploy from dist
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
}));
