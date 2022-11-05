/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-green": "#D2D6A0",
        "dark-green": "#53682d",
      },
      fontFamily: {
        asgardbold: ["AsgardBold", "sans-serif"],
        asgardnormal: ["AsgardNormal", "sans-serif"],
      },
      screens: {
        'dt': {'min': '1120px'},
      }
    },
  },
  plugins: [],
};
