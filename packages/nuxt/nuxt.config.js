import colors from 'vuetify/es5/util/colors'
const apolloConfig = require("./apollo/config.js");

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - key-hero',
    title: 'key-hero',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  plugins: [
    '~plugins/component-library.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/apollo",
  ],
  // Give apollo module options
  apollo: {
    tokenName: "yourApolloTokenName", // optional, default: apollo-token
    includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
    authenticationType: false, // optional, default: 'Bearer'
    // (Optional) Default 'apollo' definition
    defaultOptions: {
      // See 'apollo' definition
      // For example: default query options
      $query: {
        loadingKey: "loading",
        fetchPolicy: "no-cache"
      }
    },
    // required
    clientConfigs: {
      default: "@/apollo/config.js"
    }
  },
  prismic: {
    endpoint: "https://minutekey.prismic.io/api/v2",
    linkResolver: "@/plugins/link-resolver",
    htmlSerializer: "@/plugins/html-serializer",
    preview: false
  },
  vuetify: {
    treeShake: true,
    //icons: ['fa'],
    theme: {
      disabled: true,
      options: {
        customProperties: true
      },
      dark: false,
      themes: {
        dark: {
          background: "#304C89"
        },
        light: {
          accent: "#9EB7E5",
          primary: "#304C89",
          secondary: '#CDC392',
        }
      }
    }
  },
  styleResources: {
    scss: ["~assets/scss/main.scss"]
  },
  build: {
    extractCSS: 'true',
    minifyCSS: true,
    minifyJS: true,
    // analyze: {
    //   analyzerMode: 'static'
    // },
    extend(config, ctx) {
      config.resolve.alias["vue"] = "vue/dist/vue.common";
    },
    splitChunks: {
      layouts: true
    },
    transpile: [
      '@newmont/components',
    ],
  },
  performance: {
    gzip: true
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'font', 'style', 'link'].includes(type)
      },
      shouldPrefetch: (file, type) => {
        return ['script', 'font', 'style', 'link'].includes(type)
      }
    },
  },
}
