module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
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