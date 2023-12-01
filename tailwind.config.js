/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      padding: ['responsive'],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

