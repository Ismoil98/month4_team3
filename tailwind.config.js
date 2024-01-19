module.exports = {
  content: ['./*.html', './pages/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        colorFirst: '#1D3444',
        colorSecond: '#F58A07',
        colorThird: '#394149',
        colorFourth: '#5B5B5B',
      },
    },
    fontFamily: {
      roboto: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
