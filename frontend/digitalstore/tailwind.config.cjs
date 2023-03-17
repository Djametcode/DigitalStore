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
        user: "url('./images/user.png')",
        iphone: "url('./images/images (1).jpeg')",
        iphone2: "url(./images/1c666da9-dc1a-4442-90e9-d9c1e3d8c528.jpg)",
      },
    },
  },
  plugins: [require("daisyui")],
};
