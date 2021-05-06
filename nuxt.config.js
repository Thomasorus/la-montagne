export default {
  components: true,
    css: [
      '~/assets/css/reset.css', '~/assets/css/global.css'
    ],
    modules: [
      '@nuxtjs/proxy'
    ],
    proxy: {
      '/geo/': { target: 'https://api-adresse.data.gouv.fr/search/', pathRewrite: {'^/geo/': ''}, changeOrigin: true }  
    },
    buildModules: [
      'nuxt-vite'
    ],
    target: 'static',
    build: {
      parallel: false,
      cache: false,
      hardSource: false,
    }
  }