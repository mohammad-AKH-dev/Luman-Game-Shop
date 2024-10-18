/** @type {import('tailwindcss').Config} */
export default {
  important: true ,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      primary: ['Yekan-Regular']
    },
    extend: {
      container:{
        center:true,
        
      },
      screens: {
        'sm': '870px',
        // => @media (min-width: 640px) { ... }
  
        'md': '950px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1246px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1400px',
        // => @media (min-width: 1536px) { ... }
      },
      colors:{
        'primary': '#070e1c',
        'secondary': '#151B2D',
        'purple': '#a04cff',
        'pink': '#FF6BBB'
      },
      placeholderColor: '#777'
    },
  },
  plugins: [],
}