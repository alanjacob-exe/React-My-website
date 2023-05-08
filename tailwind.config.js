/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Jost: ["Jost", "sans-serif"],
      },
      colors: {
        primary: "#101727",
        secondary:"#9FA4AA",
        success:  "#13ad2d",
        error: "#ad0505",
        disabled: "#E4E7EC",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
