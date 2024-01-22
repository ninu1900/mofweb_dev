/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor:{
        'secondary-color': 'var(--secondary-color)',
      },
    },
  },
  daisyui: {
    themes: ["lofi"],
  },
  plugins: [require('daisyui')],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


// const withMT = require("@material-tailwind/react/utils/withMT");

// /** @type {import('tailwindcss').Config} */
// module.exports = withMT({
//   content: ["./index.html", "./src/**/*.{js,jsx}"],
//   mode: "jit",
//   theme: {
//     extend: {
//       colors: {
//         primary: "#00040f",
//         secondary: "#00f6ff",
//         dimWhite: "rgba(255, 255, 255, 0.7)",
//         dimBlue: "rgba(9, 151, 124, 0.1)",
//       },
//       fontFamily: {
//         sans: ["Open Sans", "sans-serif"],
//       },
//     },
//     screens: {
//       xs: "480px",
//       ss: "620px",
//       sm: "768px",
//       md: "1060px",
//       lg: "1200px",
//       xl: "1700px",
//     },
//   },
//   plugins: [],
// });