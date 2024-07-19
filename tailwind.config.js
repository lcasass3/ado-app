/** @type {import('tailwindcss').Config} */
export default {
  content: ['./resources/**/*.{edge,js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        text: '#2b2b2b',
        background: '#f0f0f0',
        primary: {
          default: '#1d4f8b',
          dark: '#163c69',
        },
        secondary: {
          default: '#f7c6a1',
          dark: '#f5b88a',
        },
        accent: {
          default: '#ff6e61',
          dark: '#ff4433',
        },
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
