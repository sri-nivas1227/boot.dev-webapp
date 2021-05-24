const { colors: defaultColors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [ './index.html', './src/**/*.{vue,js,ts,jsx,tsx}' ],
  darkMode: false,
  theme: {
    extend: {},
    colors: {
      ...defaultColors,
      blue: {
        '200': '#C2C6E8',
        '300': '#9DA4DB',
        '400': '#7882CD',
        '500': '#5460C0',
        '600': '#3A469E',
        '700': '#2A3373',
        '800': '#1B2048'
      },
      gray: {
        '200': '#f0f0f0',
        '300': '#c2c2c2',
        '400': '#949494',
        '500': '#666666',
        '600': '#474747',
        '700': '#3c3c3c',
        '750': '#292929',
        '800': '#1d1d1d',
        '850': '#131313',
        '900': '#0a0a0a'
      },
      green: {
        '200': '#CBE8C2',
        '300': '#ADDB9D',
        '400': '#8ECD78',
        '500': '#6FBF54',
        '600': '#539E3A',
        '700': '#3D732A',
        '800': '#26481B'
      },
      gold: {
        '200': '#E8D7C2',
        '300': '#DBBF9D',
        '400': '#CDA778',
        '500': '#c08f54',
        '600': '#9E713A',
        '700': '#815D30',
        '800': '#48331B'
      },
      red: {
        '200': '#E8C2C6',
        '300': '#DB9DA4',
        '400': '#CD7882',
        '500': '#C05460',
        '600': '#9E3A46',
        '700': '#732A33',
        '800': '#481B20'
      }
    }
  },
  variants: {
    extend: {
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ]
};
