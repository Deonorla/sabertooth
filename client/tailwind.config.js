/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crimson': '#BC2F2C',
        'coral': '#D03632',
        'ember': '#490D0C',
        'obsidian': '#0A090D',
        'ratata' : 'rgb(208,54,50)',

      },
      fontFamily: {
        'pirulen': ['pirulen', 'sans-serif'],
        'ishimura': ['ishimura', 'sans-serif'],
        'nuraga' : ['nuraga', 'sans-serif'],
        'public' : ['public' , 'sans-serif']
      },
      backgroundImage: {
        "myGradient" : 'linear-gradient(90deg, rgba(208,54,50,1) 0%, rgba(73,13,12,1) 100%);',
        "reverseGradient" : 'linear-gradient(90deg, rgba(73,13,12,1) 0%, rgba(208,54,50,1) 100%)'
      },
      listStyleImage: {
        claws: 'url("./src/assets/game-icons_circle-claws.png")',
      },
    },
  },
  plugins: [

  ],
}

