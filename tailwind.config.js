/** @type {import('tailwindcss').Config} */
export default {
  important: true ,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      primary: ['Yekan-Regular'],
      secondary: ['Rokh-Regular'],
      secondaryBold: ['Rokh-Bold']
    },
    extend: {
      container:{
        center:true,
        padding:'1rem'
        
      },
      boxShadow:{
        box: '1px 1px 10px #9b51e0',
        boxHover: '1px 2px 13px #9547edb3'
      },
      screens: {
        'xs': '678px',

        'xs2': '768px',

        'sm': '870px',
        // => @media (min-width: 640px) { ... }
  
        'md': '950px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1200px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1400px',
        // => @media (min-width: 1536px) { ... }
      },
      colors:{
        'primary': '#070e1c',
        'secondary': '#151B2D',
        'purple': '#a04cff',
        'pink': '#FF6BBB',
        'ffffff': '#ffffff'
      },
      backgroundImage:{
        box: 'linear-gradient(90deg, rgba(160,76,255,1) 0%, rgba(86,103,255,1) 50%, rgba(255,107,187,1) 100%)',
        category: 'url(/images/categories-bg.jpg)'
      },
      placeholderColor: '#777'
    },
  },
  plugins: [],
}