/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' })

    // Or with a custom prefix:
    // require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
}
