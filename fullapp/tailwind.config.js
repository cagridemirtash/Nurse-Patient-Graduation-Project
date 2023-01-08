/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        nursolo: "url(../public/accuray-S34fEzWT6eE-unsplash.jpg)",
      },
    },
  },
  plugins: [],
};
