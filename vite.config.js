import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import requireSupport from "vite-plugin-require-support";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    requireSupport({
      filters: /.ts$|.js$|.tsx$|.vue$/,
    }),
  ],
});
