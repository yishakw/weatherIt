/** @type {import('tailwindcss').Config} */
// tailwind.config.js
// module.exports = {
//   darkMode: "media",
//   // ...
// };
//
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { Roboto: ["Roboto"] },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
