/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'dark-gray': '#1b1b1b',
      'less-dark-gray': '#232323',
      'purple': '#8F00FF',
    },
    extend: {
      backgroundImage: {
        'header-gradient': 'linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 49.8%, rgba(0, 0, 0, 0.50) 100%)',
      },
      boxShadow: {
        'about-shadow': 'drop-shadow(0px 17px 37px rgba(143, 3, 254, 0.05)) drop-shadow(0px 67px 67px rgba(143, 3, 254, 0.04)) drop-shadow(0px 151px 91px rgba(143, 3, 254, 0.03)) drop-shadow(0px 269px 108px rgba(143, 3, 254, 0.01)) drop-shadow(0px 420px 118px rgba(143, 3, 254, 0.00));'
      },
    },
  },
  plugins: [],
}

