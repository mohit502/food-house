/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'logo-color': '#FD9C0D',
      'logo-color-lite': '#15803d'
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        nunito: ["Nunito"],
        lobster: ["Lobster"],
        lobsterTwo: ["Lobster Two"]
      },
    },
  },
  plugins: [],
};
