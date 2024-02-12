export default defineNuxtConfig({
  // Extends the default Nuxt Docus theme
  extends: '@nuxt-themes/docus',
  devtools: { enabled: true },

  // Configuration for app, including the base URL
  app: {
    baseURL: 'kubernetesbootcamp.netlify.app',
    buildAssetsDir: 'assets'
  },

  // Modules configuration
  modules: [
    // Plausible Analytics module
    '@nuxtjs/plausible',
    // Nuxt Icon module
    'nuxt-icon'
  ]
})
