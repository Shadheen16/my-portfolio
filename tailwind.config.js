module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "robo" : ['Roboto', 'sans-serif'],
        "mont" : ['Montserrat', 'sans-serif'],
      },
      colors: {
        'clr-primary': '#E6F4F1',
        'clr-secondary': '#AADCEC',
        'clr-accent': '#9284B3',
        'clr-dark': "#334A52"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
