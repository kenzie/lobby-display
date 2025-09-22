/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'xs': '0.875rem',   // 14px (was 12px) - 1.17x
      'sm': '1rem',       // 16px (was 14px) - 1.14x  
      'base': '1.25rem',  // 20px (was 16px) - 1.25x base increase
      'lg': '1.5rem',     // 24px (was 18px) - 1.33x
      'xl': '1.875rem',   // 30px (was 20px) - 1.5x
      '2xl': '2.25rem',   // 36px (was 24px) - 1.5x
      '3xl': '2.75rem',   // 44px (was 30px) - 1.47x
      '4xl': '3.5rem',    // 56px (was 36px) - 1.56x
      '5xl': '4.5rem',    // 72px (was 48px) - 1.5x
      '6xl': '5.5rem',    // 88px (was 60px) - 1.47x
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['CaskaydiaCove Nerd Font Mono', 'CaskaydiaCove NFM', 'monospace'],
      },
    },
  },
  plugins: [],
}