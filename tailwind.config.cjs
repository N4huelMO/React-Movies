/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["index.html", "./src/**/*.jsx"],

  theme: {
    fontFamily: {
      kaushan: ["Kaushan Script", "cursive"],
      robotoCondensed: ["Roboto Condensed", "sans-serif"],
    },
    flex: {
      5: "5",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
