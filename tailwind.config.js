/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'custom': '42.72px', // Changed key from 'leading-custom' to 'custom'
      },
      keyframes: {
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        scrollLeft: 'scrollLeft 20s linear infinite',
        scrollRight: 'scrollRight 20s linear infinite',
      },
    }, // Removed the extra closing brace here
  },
  plugins: [],
}
