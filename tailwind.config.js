/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C4A484', // Dourado elegante
          dark: '#8B7355',
          light: '#E5D3B3',
        },
        secondary: {
          DEFAULT: '#2C3E50', // Azul escuro sofisticado
          dark: '#1A252F',
          light: '#34495E',
        },
        accent: {
          DEFAULT: '#B8860B', // Dourado mais vibrante
          dark: '#8B6914',
          light: '#DAA520',
        },
      },
      fontFamily: {
        sans: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 