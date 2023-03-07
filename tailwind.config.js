module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '2md': '992px',
      },
      width: {
        '960': '960px',
        '760': '760px',
        '182': '182px',
        '20c': '20px',
      },
      maxHeight: {
        '20c': '20px',
        '300': '300px',
      },
      colors: {
        'p': "#943579",
        'p-': "#522555",
      },
      fontSize: {
        'bigger': ['5rem', '6rem']
      },
      fontFamily: {
        'Helvetica': '"Helvetica Neue",Helvetica,Arial,sans-serif',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
