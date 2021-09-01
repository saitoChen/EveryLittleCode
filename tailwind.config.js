module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
       }
    },
    backgroundColor: {
      'block': '#DFEBF6'
    },
    textColor: {
      'highlight': '#4433ff',
      'grey': 'rgb(102,102,102)',
      'base': '#2A2A2A',
      'title': '#E60067',
      'notes-title': '#21232c',
      'notes': '#0a0c10',
      'notes-grey': '#636363'
    },
    width: {
      '1024px': '1024px',
      '200px': '200px',
      '100%': '100%',
      '90%': '90%',
      '240px': '240px'
    },
    lineHeight: {
      '12': '3rem',
      '6': '1.5rem'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
