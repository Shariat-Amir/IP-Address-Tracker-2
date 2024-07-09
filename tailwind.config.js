/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'topBg':"url('/images/pattern-bg-mobile.png')"
      },
      colors:{
       "Very-Dark-Gray": "hsl(0, 0%, 17%)",
       "Dark-Gray": "hsl(0, 0%, 59%)"
      },
      fontFamily:{
        Rubik:'Rubik'
      }
    },
    screens:{
      'mobile': '375px',
      'desktop': '1440px',
    }
  },
  
  plugins: [],
}

