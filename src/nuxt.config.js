const parseArgs = require('minimist')
const path = require('path')
const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: 'hostname',
    p: 'port',
  },
  string: ['H'],
  unknown: parameter => false,
})

const port = argv.port || process.env.PORT || process.env.npm_package_config_nuxt_port || '3000'
const host = argv.hostname || process.env.HOST || process.env.npm_package_config_nuxt_host || 'localhost'
// return;
module.exports = {
  target: 'static',
  router: {
    // base: '/mahal-doc/',
  },
  srcDir: path.join(__dirname),
  dir: {
    static: path.join(__dirname, '../static'),
  },
  render: {
    static: {
      setHeaders(res) {
        res.setHeader('X-Frame-Options', 'ALLOWALL')
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET')
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
      },
    },
  },
  env: {
    baseUrl: process.env.BASE_URL || `http://${host}:${port}`,
  },
  generate: {
    dir: './build',
  },
  head: {
    title: 'Mahal - Event based modern web application framework for UI development.',
    meta: [
      {
        name: 'theme-color',
        content: '#ffffff',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'author',
        content: 'Ujjwal Gupta',
      },
      {
        name: 'Rating',
        content: 'General',
      },
      {
        name: 'Revisit-After',
        content: '1 days',
      },
      {
        charset: 'utf-8',
      },
      {
        name: 'msapplication-TileColor',
        content: '#da532c',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
      },
      {
        name: 'twitter:creator',
        content: '@ujjwal_kr_gupta',
      },
      {
        property: "og:title",
        content: "Mahal - Event based modern web application framework for UI development."
      }, {
        property: "og:type",
        content: "website"
      }, {
        property: "og:url",
        content: "https://mahaljs.com/"
      }, {
        property: "og:site_name",
        content: "Mahal documentation"
      }, {
        property: "og:description",
        content: "Mahal is a javascript framework for UI development. It uses event based architecture and works without virtual DOM."
      },
      {
        property: "og:image",
        content: "/img/logo_background_1200_630.png"
        // content: "/img/JsStore_1200_630.png"
      },
      {
        property: "og:image",
        // content: "/img/jsStore_500_500.png"
        content: "/img/logo_background_500_500.png"

      },
      {
        name: "twitter:title",
        content: "Mahal - Event based modern web application framework for UI development."
      }, {
        name: "twitter:description",
        content: "Mahal is a javascript framework for UI development. It uses event based architecture and works without virtual DOM."
      },
      {
        name: "twitter:image",
        // content: "http://jsstore.net/img/JsStore_1200_630.png"
        content: "/img/logo_background_1200_630.png"
      },
      {
        name: "twitter:image:src",
        // content: "http://jsstore.net/img/JsStore_1200_630.png"
        content: "/img/logo_background_1200_630.png"
      }
    ],
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito&display=swap',
      },
      // {
      //   rel: 'stylesheet',
      //   href: 'https://fonts.googleapis.com/css2?family=Jost:wght@700&display=swap',
      // },
      {
        rel: 'stylesheet',
        href: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/default.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css',
        integrity: 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU',
        crossorigin: 'anonymous',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
      {
        href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons',
        rel: 'stylesheet',
      },
    ],
    script: [
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#3B8070',
  },
  /*
   ** Build configuration
   */
  // plugins: ['~plugins/vuetify.js'],
  css: [
    // {
    //     src: ('styles/index.scss'),
    //     lang: 'scss'
    // }
  ],
  build: {
    extend(config, { isDev, isClient }) {
      // // ..
      // config.module.rules.push({
      //     test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      //     loader: 'file-loader'
      // })
      // // Sets webpack's mode to development if `isDev` is true.
      // if (isDev) {
      //     config.mode = 'development'
      // }
      config.resolve.alias['@'] = path.resolve(__dirname)
      config.resolve.alias['~'] = path.resolve(__dirname, '..')
    },
  },
  modules: [
    // "@nuxtjs/axios",
    // "~/modules/typescript.js",
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GA_ID,
      },
    ],
  ],
  axios: {},
}
