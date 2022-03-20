module.exports = {
  theme: {
    colors: {
      primary: 'hsl(193, 38%, 86%)',
      secondary: 'hsl(150, 100%, 66%)',
      'grayish-blue': 'hsl(217, 19%, 38%)',
      'dark-grayish-blue': 'hsl(217, 19%, 24%)',
      'dark-blue': 'hsl(218, 23%, 16%)',
    },
    extend: {
      screens: {
        mobile: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        desktop: '1440px',
      },

      fontSize: {
        default: '26px',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        bold: 800,
      },
    },
  },

  plugins: [],
}
