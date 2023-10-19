// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: true,

  pages: true,

  modules: ['nuxt-icons', '@pinia/nuxt'],

  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      'postcss-import': true,
      'tailwindcss/nesting': {}, 
      'postcss-nested': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },


  app:{
    head: {
      title: 'my-crypto-app',

      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
            hid: 'description',
            name: 'description',
            content: 'my website description'
        }
    ],

    script:[{ src:'https://cdn.jsdelivr.net/npm/apexcharts', body:true},]
    },
  }
  
})
