/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/views/dashboard/dashboard1/Dark.jsx",
    "./src/app/views/dashboard/dashboard1/Light.jsx",
    "./src/app/views/dashboard/dashboard1/OnlyDark.jsx",],
  theme: {
    extend: {
      width: {
        '3/7': '42.8571428571%',
        '2/7': '28.5714285714%',
      },
    },
  },
  plugins: [],
}

