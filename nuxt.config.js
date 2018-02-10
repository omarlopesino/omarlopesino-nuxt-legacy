/* nuxt.config.js */

var config = {
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
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
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