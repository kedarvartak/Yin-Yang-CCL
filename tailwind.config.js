/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'leading-custom': '42.72px',
      },
    },
  },
  plugins: [],
}