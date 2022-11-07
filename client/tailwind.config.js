const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        },
        colors:{
          azul: {
              default: '#0B4F7C',
          },
          gris: {
            default: '#F3F5F6',
          },
          celeste:{
            default: '#33D9E2'
          }
        }
    }
  },
  plugins: [],
}
