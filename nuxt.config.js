
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '指间礼物',  //process.env.npm_package_name || ''
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,maximum-scale=1, user-scalable=no' },
      {
        name: "keywords",
        content: "礼品方案服务商、服务商务礼赠、职场福利、社交送礼"
      },
      {
        name: "description ",
        content:
          "指间礼物是中国领先的场景礼品方案服务商，主要服务商务礼赠、职场福利、社交送礼等场景。指间礼物提供全套礼品方案，支持文字、语音、视频等多种祝福送礼方式。"
      },
      {
        name: 'hhh',
        content: '指间礼物|指间礼物'
      }, {
        name: "renderer",
        content:"webkit"
      },{
        "http-equiv":"X-UA-Compatible",
        content:"IE=11"
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [,
    '~/assets/css/resets.css',
    { src: "swiper/css/swiper.css" },
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~/plugins/vue-swiper.js", ssr: false }
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  // script: [
  //   {src:'~assets/js/swiper.animate1.0.3.min.js'}
  // ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'qs','swiper'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    transpile: [
      'swiper',
      "dom7"
    ],
  },
  
}
