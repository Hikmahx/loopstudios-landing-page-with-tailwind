module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily:{
      Alata:['Alata', 'sans-serif'], 
      JosefinSans: ['"Josefin Sans"', 'sans-serif']
    },
    gridTemplateRows: {
      '2' : 'repeat(2, 50%)',
      '3' : '10% 45% 45%'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
