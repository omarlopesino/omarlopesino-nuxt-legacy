/* nuxt.config.js */

var config = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Omar Lopesino',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: "Omar lopesino"},
      { hid: 'description', name: 'description', content: 'Drupal developer, Backend developer, PHP development, Game developer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/circle-filled.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700' }
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
  modules: [
    '@nuxtjs/font-awesome'
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

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
if (process.env.DEPLOY_ENV === 'GH_PAGES') {
  config.router = {
    base: '/omarlopesino/'
  }
}

module.exports = config;