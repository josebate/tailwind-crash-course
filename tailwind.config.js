/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: { // Set the breakpoints for small, medium, large, xl screens
      sm: '480px', // With this you can do for example sm:flex, and this means "apply flex for screens up to 480px"
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{ // Set custom colors here
        brightRed: 'hsl(12, 88%, 59%)', // Set the color of "brightRed"
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13 ,100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)'
        // Now that we have set all of this, we will have classes for us available like bg-brightRed (which will set the background to the color we configured in brightRed)
      }
    },
  },
  plugins: [],
}

