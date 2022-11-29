import { defineConfig } from 'astro/config'

// https://astro.build/config
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'
import sitemap from '@astrojs/sitemap'
import prefetch from '@astrojs/prefetch'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  site: 'https://mozart409.github.io',
  base: '/astro-demo',
  integrations: [tailwind(), sitemap(), robotsTxt(), image(), prefetch()]
})
