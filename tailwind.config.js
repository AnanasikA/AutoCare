// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInFooter: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInHeader: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInFooter: 'fadeInFooter 1s ease-in-out',
        fadeInHeader: 'fadeInHeader 1s ease-in forwards',
      },
      screens: {
        '2xl': '1450px',
        'xl': '1200px',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], 
      },
      colors: {
        'custom-gray-1': '#2c3e50',
        'custom-gray-2': '#34495e',
      },
    },
  },
  plugins: [],
};
