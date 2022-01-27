module.exports = {
  content: [
    './src/*.html|tsx',
    './src/components/*.tsx',
    './src/*.ts|tsx',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1536px',
      },
      fontSize: {
        tiny: ['0.5rem', { lineHeight: '0.75rem' }],
        '1/2xl': ['1.35rem', { lineHeight: '1rem' }],
      },
    },
    fontFamily: {
      Gilroy: ['Gilroy', 'sans-serif'],
    },
    colors: {
      white: '#FFFFFF',
      gray: '#9EA0A3',
      asphalt: '#3A3C3F',
      black: '#000000',
      teal: '#00A099',
      yellow: '#FEC609',
      purple: '#C7007E',
      lime: '#94C11A',
      blue: '#2874BB',
    },
  },
};
