
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fromBelow: {
          '0%': { transform: 'translateY(30%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fromTop: {
          '0%': { transform: 'translateY(-10%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'from-below': 'fromBelow 1s ease-in-out',
        'from-top': 'fromTop 1s ease-in-out',
      },
    
      screens: {
        'el': '1726px', 
        'xs': '370px',
      },
      colors: {
        "background": "#fdf7ff",
        "primary": "#9524ff",
        "primary1": "#CA92FF",
        "primary2": "#DCB6FF",
        "primary3": "#340066",
        "primary4": "#b86dff",
        "secondary": "#5C00B3",
        "secondary1": "#75687E",
        "border": "#121212",
        "seed": "#6750A4",
        "gray": "#8E8E93",
        "variant": "#A649FF",
        "variant1": "#4C4452",
        "variant2": "#eddbff",
        "variant3": "#605668",
        "variant4": "#ebe9ed",
        "border2": "#3C3641",
    },
    boxShadow: {
      'double-shadow': '0px 4px 4px -4px rgba(12, 12, 13, 0.05), 0px 16px 32px -4px rgba(12, 12, 13, 0.1)',
    },
    },
  },
  plugins: [],
}

