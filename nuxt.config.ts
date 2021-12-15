import { defineNuxtConfig } from 'nuxt3'
import polyfillNode from 'rollup-plugin-polyfill-node'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  dev: process.env.NODE_ENV !== 'production',
  devtools: true,
  head: {
    script: [
      { hid: 'font-awesome-icons', src: 'https://kit.fontawesome.com/33df964384.js', defer: true },
      { hid: 'calendly', src: 'https://assets.calendly.com/assets/external/widget.js' },
    ]
  },
  ssr: true,
  buildModules: [
    'nuxt-windicss',
    '@nuxtjs/pwa',
    '@pinia/nuxt'
  ],
  css: [
    '@/assets/css/product-sans.css',
    'virtual:windi-base.css',
    '@/assets/css/base.css',
    'virtual:windi-components.css',
    'virtual:windi-utilities.css',
    '@/assets/css/fontawesome.all.min.css'
  ],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
    extend(config, { isDev }) {
     // Sets webpack's mode to development if `isDev` is true.
      if (isDev) {
        config.mode = 'development'
        config.devtools = true
        if (!!config.node) {
          config.node.Buffer = false
        } else {
          config.node = { Buffer: false }
        }
      }

      // const mjsModules = {
      //   test: /\.mjs$/i,
      //   resolve: { byDependency: { esm: { fullySpecified: false } } }
      // }
      // config.module.rules.push(mjsModules);
        // config.externals = NodeExternals({whitelist: []})
        // config.module.rules.push(
        //   {
        //       test: /\.(clean-css|uglify-js|aws-sdk|glsl|vs|fs|vert|frag)$/,
        //       exclude: /node_modules/,
        //       use: 'raw-loader'
        //   }
        // )
    }
  },
  vue: {
    compilerOptions: {
      directiveTransforms: {
        'click-outside': () => ({
          props: [],
          needRuntime: true
        })
      }
    }
  },
  vite: {
    plugins: [ polyfillNode() ]
  },
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      download: true,
      base64: true,
      inject: true,
      overwriteing: true
    }
  },
  manifest: {
    name: 'Justin Gross PWA',
    short_name: 'JGross PWA',
    lang: 'en',
    display: 'standalone',
  },
})
