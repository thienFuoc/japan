/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateX(-25%)' },
          '50%': { transform: 'translateY(0%)' }
        }
      },
    },
  },
  plugins: [],
};
