/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}', 
  ], 
  theme: {
    container: {
      center: true, 
      padding: '20px'
    },
    extend: {
      fontFamily: {
        sans: 'Poppins',
      },
      clipPath: {
        'lg-y': 'polygon(0 15%, 100% 0, 100% 85%, 0% 100%)',
        'lg-t': 'polygon(0 15%, 100% 0, 100% 100%, 0% 100%)',
        'y': 'polygon(0 5%, 100% 0, 100% 95%, 0% 100%)',
        't': 'polygon(0 5%, 100% 0, 100% 100%, 0% 100%)',
      }
    },
  }, 
  plugins: [
    require('tailwind-clip-path'),
  ],
} 