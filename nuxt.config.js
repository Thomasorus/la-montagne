// import axios from "axios"

// const dynamicRoutes = async () => {
//   const resForAnnonces = await axios.get('http://localhost:3001/annonces')
//   const routesForAnnonces = resForAnnonces.data.map((annonce) => {
//     return {
//       route: `/annonce?slug=${annonce.slug}`,
//       payload: annonce
//     }
//   })
//   return routesForAnnonces
// }

export default {
  components: true,
    css: [
      '~/assets/css/reset.css', '~/assets/css/global.css'
    ],
    modules: [
      '@nuxtjs/proxy', '@nuxtjs/axios'
    ],
    proxy: {
      '/geo/': { target: 'https://api-adresse.data.gouv.fr/search/', pathRewrite: {'^/geo/': ''}, changeOrigin: true }  
    },
    buildDir: 'dist',
    build: {
      parallel: false,
      cache: false,
      hardSource: false,
    },
    // generate: {
    //   routes:dynamicRoutes
    // }
  }