export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/ui'],

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  ui: {
    colors: {
      primary: 'red',
      neutral: 'slate',
    },
  },

  app: {
    head: {
      title: 'Honda Stuff',
      meta: [
        { name: 'description', content: 'Honda transmission ratios and resources' },
      ],
    },
  },

  nitro: {
    preset: 'cloudflare-pages',
  },
})
