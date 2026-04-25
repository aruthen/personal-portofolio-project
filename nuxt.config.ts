export default defineNuxtConfig({
  compatibilityDate: '2025-02-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'LinkHub Portfolio',
      meta: [
        {
          name: 'description',
          content:
            'A modern link-in-bio portfolio with useful AI and utility tools, built with Nuxt 3.'
        },
        { name: 'theme-color', content: '#0a0a0a' }
      ]
    }
  },
  nitro: {
    preset: 'vercel',
    routeRules: {
      '/api/**': { cors: true }
    }
  }
})
