module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class' // @TODO make a system that lets the user automagically switch or let them choose to toggle it themselves
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
