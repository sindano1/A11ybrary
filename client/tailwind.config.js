module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  safelist: [
    {
      pattern: /./
    },
  ],
  theme: {
    extend: {},
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
    require('daisyui')
  ],
}
