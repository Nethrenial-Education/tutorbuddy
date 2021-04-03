export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TutorBuddy | Best Friend Of Tutors | Home',
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
          "TutorBuddy let's you manage your students profiles easily.Being a tutor is now easier than ever!",
      },
      {
        property: 'og:title',
        content: 'TutorBuddy | Best Friend Of Tutors | Home',
      },
      {
        property: 'og:url',
        content: 'https://tutorbuddy.vercel.app',
      },
      {
        property: 'og:image',
        content: 'https://tutorbuddy.vercel.app/images/hero-optimized-min.jpg',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:description',
        content:
          "TutorBuddy let's you manage your students profiles easily.Being a tutor is now easier than ever!",
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/icon.png',
      },
      { rel: 'canonical', href: 'https://tutorbuddy.vercel.app' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

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
              'faBars',
            ],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['faFacebook', 'faTwitter', 'faGithub'],
          },
        ],
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],
  styleResources: {
    scss: ['./assets/scss/main.scss'],
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
