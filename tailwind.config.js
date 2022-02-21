module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    
    extend: {
      colors:{
        'primary' : '#F97316',
        'secondary' :{
          'dark': '#E4E4E7',
          'light': '#FAFAFA'
        },
        'OffRed': '#EF4444'
      },
    },
    
  },
  plugins: [],
}