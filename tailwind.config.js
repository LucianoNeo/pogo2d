/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './src/**/*.jsx'
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
      '100%': { opacity: '100'},
    },
    fadeinout: {
      '0%': { opacity: '0' },
      '50%': { opacity: '100'},
      '90%': { opacity: '100'},
      '100%': { opacity: '0'},
    },
    fadeinScale: {
      '0%': { opacity: '0' ,transform: 'scale(1)'},
      '100%': { opacity: '100', transform: 'scale(1.5)' },
    },
    shake: {
      '0%': { bottom: '40px' },
      '75%': { bottom: '50px' },
      '100%': { bottom: '40px' },
    },
    load: {
      '0%': {width: '1%' },
      '100%': {width: '90%' },      
    },
    throw: {
      '0%': { bottom: '30px', width: '80px'  },
      '50%': { bottom: '250px',transform: 'rotate(-45deg)' },
      '60%': { bottom: '300px',transform: 'rotate(-45deg)' },
      '50%': { bottom: '400px',transform: 'rotate(-45deg)' },
      '75%': { bottom: '350px',width: '40px',transform: 'rotate(-50deg)' },
      
      '100%': { bottom: '300px',width: '40px',transform: 'rotate(-10deg)' },
    },
  },
  animation: {
    'walking': 'walk 1s infinite steps(4)',
    'fadein': 'fadein 2s ease-out',
    'fadein-out': 'fadeinout 3s ease-out',
    'fadeinscale': 'fadeinScale 2s ease-out',
    'fadeinmenu': 'fadeinScale 1s',
    'pokeball-shake': 'shake 1s infinite ease-in-out',
    'pokeball-throw': 'throw 2s infinite ease-out',
    'loading': 'load 5s infinite ease-in-out ',
  },
 
},
  plugins: [],
}

