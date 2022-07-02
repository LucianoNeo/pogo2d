/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    screens: {
      sm: '680px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage:{
        blur: 'url(/src/assets/blur.png)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        green: {
          100: '#4cabad',
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
    
  },
  keyframes: {
    walk: {
      '0%': { left: '0' },
      '100%': { left: '-256px' },
    },
    fadein: {
      '0%': { opacity: '0' },
      '100%': { opacity: '100' },
    },
  },
  animation: {
    'walking': 'walk 1s infinite steps(4)',
    'fadein': 'fadein 2s ease-out',
  },
 
},
  plugins: [],
}

