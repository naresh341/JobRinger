/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-125': 'linear-gradient(125deg, #27dadb 0%, #001b85 100%)',
      },
      animation: {
        'gradient-text': 'gradientText 3s ease-in-out infinite',  
      },
      keyframes: {
        gradientText: {
          '0%': {
            backgroundPosition: '200% 0',
          },
          '100%': {
            backgroundPosition: '0% 0',   
          },
        },
      },
      backgroundSize: {
        '200%': '200%',  
      },
     
    },
  },
  plugins: [],
}
