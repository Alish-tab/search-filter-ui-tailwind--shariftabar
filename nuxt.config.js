export default {
  buildModules: [
    '@nuxt/postcss8',
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
    css: [
      './assets/style/main.css'
    ],

    plugins: [
    
    ],
  
    /*
    ** Nuxt.js modules
    */
    modules: [
      
    ]
  }