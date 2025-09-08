/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['CaskaydiaCove Nerd Font Mono', 'CaskaydiaCove NFM', 'CaskaydiaCove Nerd Font', 'CaskaydiaCove NF', 'monospace'],
        mono: ['CaskaydiaCove Nerd Font Mono', 'CaskaydiaCove NFM', 'monospace'],
      },
    },
  },
  plugins: [],
}