export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Youtube NuxtJS Layouts',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.css'],

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-transition
  // https://nuxtjs.org/docs/2.x/features/transitions
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
