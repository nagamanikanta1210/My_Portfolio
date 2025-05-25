/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5E3B76',
        secondary: '#2C2C6C',
        accent: '#4DB5FF',
        background: '#13111C',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(94, 59, 118, 0.3)',
        'glow-lg': '0 0 30px rgba(94, 59, 118, 0.5)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}