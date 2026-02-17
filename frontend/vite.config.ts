import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";
import tailwindcss from '@tailwindcss/vite';
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "src/popup/popup.html"),
      },
    },
  },
  plugins: [react(), tailwindcss(), crx({ manifest })],
})
