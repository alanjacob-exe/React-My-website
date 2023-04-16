/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        Jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
