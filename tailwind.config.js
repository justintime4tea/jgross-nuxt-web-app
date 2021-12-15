module.exports = {
  mode: "jit",
  purge: [
    "./assets/**/*.{css}",
    "./layouts/*.vue",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      'display': ['Roboto', 'ui-sans-serif', 'system-ui'],
      'body': ['Roboto', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      keyframes: {
        waggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)'
          },
          '50%': {
            transform: 'rotate(3deg)'
          },
        }
      },
      animation: {
        waggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
