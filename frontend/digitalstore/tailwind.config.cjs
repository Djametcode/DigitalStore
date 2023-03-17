/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quick: ["Quicksand", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      backgroundImage: {
        dummy: "url('./images/images.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
