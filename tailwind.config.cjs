/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        mainColor: '#0a192f',
        secondaryColor: '#112240',
        blackOverlay: 'rgba(0, 0 ,0 ,0.7)',
        
      },
      colors: {
        'mainColor': '#0a192f',
        'accentColor': '#fe8cfd ',
        'accentOpac': '#fe8cfd14',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '1040px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
}
