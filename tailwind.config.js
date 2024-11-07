/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'slide-up': "AnimateSlideUp 1.1s ease-out forwards",
        'slide-down': "AnimateSlideDown 1.1s ease-out forwards",
        'slide-right': "AnimateSlideRight 1.1s ease-out forwards",
        'slide-title': "AnimateTitle 1.1s ease-out forwards",
      }
    },
    keyframes:{
      AnimateTitle:{
        '0%':{opacity: '0', transform: 'translate(-50%, -30%)'},
        '100%':{opacity: '1', transform: 'translate(-50%, -50%)'},
      },
      AnimateSlideUp:{
        '0%':{opacity: '0', transform: 'translateY(20px)'},
        '100%':{opacity: '1', transform: 'translateY(0)'},
      },
      AnimateSlideDown:{
        '0%':{opacity: '0', transform: 'translateY(-40px)'},
        '100%':{opacity: '1', transform: 'translateY(0)'},
      },
      AnimateSlideRight:{
        '0%':{opacity: '0', transform: 'translateX(-40px)'},
        '100%':{opacity: '1', transform: 'translateX(0)'},
      },
    },
  },
  plugins: [],
}