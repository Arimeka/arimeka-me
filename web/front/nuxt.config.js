const TITLE = 'Navi Arimeka';
const DESCRIPTION = 'Backend developer';
const IMAGE = 'https://arimeka.me/fb-sharing.png';

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: DESCRIPTION },
      { hid: 'og:title', property: 'og:title', content: TITLE },
      { hid: 'og:description', property: 'og:description', content: DESCRIPTION },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Arimeka.me' },
      { hid: 'og:url', property: 'og:url', content: 'https://arimeka.me/' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: TITLE },
      { hid: 'og:image', property: 'og:image', content: IMAGE },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1080' },
      { hid: 'og:image:height', property: 'og:image:height', content: '669' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'Gopher stared at the ruby.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icon-180x.png' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icon-16x.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icon-32x.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '64x64',
        href: '/icon-64x.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/application.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/vue-cookie-law.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/font-awesome'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options : {
            fix : true
          }
        })
      }
    }
  }
}
