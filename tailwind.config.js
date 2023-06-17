/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C778DD',
        gray: '#abb2bf',
        background: '#282c33',
      },
      width: {
        lg: '80%',
        md: '85%',
        sm: '90%',
      },
    },
  },
  plugins: [],
}
