/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'rgb(113, 232, 63)',
        'secondary': 'rgb(222, 253, 113)',
      },
    },
  },
  plugins: [
    daisyui,
  ],
}

