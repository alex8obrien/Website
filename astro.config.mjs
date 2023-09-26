import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from "@astrojs/cloudflare";
import { VitePWA } from 'vite-plugin-pwa'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.alex8obrien.com',
  integrations: [mdx(), sitemap()],
  output: "server",
  adapter: cloudflare(),
  plugins: [
    VitePWA({ registerType: 'autoUpdate' })
  ]
});