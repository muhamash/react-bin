/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridRow: {
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-7': 'span 7 / span 7',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
        'span-10': 'span 10 / span 10',
        'span-16': 'span 16 / span 16',
        'span-14': 'span 14 / span 14',
      },
      gridTemplateColumns:{
        16: 'repeat(16, minmax(0, 1fr))',
      },
  
      gridTemplateRows: {
        12: 'repeat(12, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
        7: 'repeat(7, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
      },
      gridRowStart: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
      },
      gridColumnStart:{
        14:"14"
      },
    
      backdropBlur: {
        none: "none",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "50px",
      },
          animation: {
        "gradient-x": "gradient-x 6s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%": {
       
            "background-position": "200% center",
          },
          "100%": {
            
            "background-position": "-200% center",
          },
          
        },
      },
      // screens
      screens: {
      'smaller': '320px',
      'medium': '720px',
        
      },
    },
  },
  plugins: [],
}