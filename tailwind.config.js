const plugin = require('tailwindcss/plugin')


/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false
  },
  content: ["./docs/index.html"],
  theme: {
    // container: {
    //   center: true,
    //   screens: {
    //     sm: '540px',
    //     md: '720px',
    //     lg: '960px',
    //     xl: '1140px',
    //     '2xl': '1320px',
    //   },
    // },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.container': {
          '--bs-gutter-x': '2.5rem',
          '--bs-gutter-y': '0',
          maxWidth: '100%',
          marginRight: 'auto',
          marginLeft: 'auto',
          paddingLeft: 'calc(var(--bs-gutter-x) * 0.5)',
          paddingRight: 'calc(var(--bs-gutter-x) * 0.5)',
          width: '100%',
          '@screen sm': { maxWidth: '540px', },
          '@screen md': { maxWidth: '720px', },
          '@screen lg': { maxWidth: '960px', },
          '@screen xl': { maxWidth: '1140px', },
          '@screen 2xl': { maxWidth: '1320px', },
        },
      })
    })
  ],
}

