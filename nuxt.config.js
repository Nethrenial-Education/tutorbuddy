export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TutorBuddy',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "TutorBuddy let's you manage your students profiles easily.Managing Your income,costs and distributing resources to your students is now easier than ever!",
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/icon.png',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: [
              'faChalkboardTeacher',
              'faFolderOpen',
              'faHandHoldingUsd',
              'faBookReader',
              'faCoins',
              'faMobile',
            ],
          },
          { set: '@fortawesome/free-brands-svg-icons', icons: ['faGithub'] },
          {
            set: '@fortawesome/free-regular-svg-icons',
            icons: ['faLightbulb'],
          },
        ],
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
