// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",   // garante que vai pegar seus componentes
    "./app/**/*.{js,ts,jsx,tsx}",   // se usar pasta app
    "./pages/**/*.{js,ts,jsx,tsx}"  // se usar pasta pages
  ],
  theme: {
    extend: {
      width: {
        '358': '358px',
        '512': '512px',
      },
       screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    },
  },
  corePlugins: {
    preflight: false, // desativa o reset
  },
  plugins: [import('@shadcn/ui')],
}
