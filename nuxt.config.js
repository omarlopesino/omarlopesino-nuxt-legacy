/* nuxt.config.js */

var config = {
  plugins: ['~plugins/vue-lazyload'],
  /**
   * Environment variables
   */
  env: {
    // your JSON API server URL :
    jsonApiServer: 'https://api.omarlopesino.me',
    jsonApiPrefix: 'api',
    portfolioUserUid: 'b36ae6be-e963-4bd0-b0c5-d4fe24b4cc2b'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Omar Lopesino',
    meta: [
      { charset: 'utf-8' },
      { name: 'google-site-verification', content: 'UaVWjk2BxbeZor5BO5tOUFlPcahmz5f94sgQOCBViMY'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: "Omar lopesino"},
      { hid: 'description', name: 'description', content: 'Drupal developer, Backend developer, PHP development, Game developer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/circle-filled.png' },
      { rel: 'preload', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700', as: 'style', onload: "this.rel='stylesheet'"}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'waterwheel', 'jsonapi-parse'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      // disable uglify, does not support ES6 -_-
      config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin')

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://omarlopesino.me',
    cacheTime: 1000 * 60 * 15,
    generate: process.env.DEPLOY_ENV === 'GH_PAGES', // Enable me when using nuxt generate
    exclude: [],
    routes: []
  },
  modules: [
    ['@nuxtjs/google-tag-manager', { id: 'GTM-NKJQRR2' }],
    '@nuxtjs/font-awesome',
    '@nuxtjs/sitemap'
  ],
  /*
   ** CSS assets. 
   */
  css: [
    '@/node_modules/bulma/bulma.sass',
    // SCSS file in the project
    '@/assets/css/main.scss'
  ]
}

module.exports = config;