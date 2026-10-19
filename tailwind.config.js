/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        porcelain: '#FAF9F4',
        paper: '#F5F4EF',
        stonecard: '#EAE7DF',
        ink: '#151515',
        inklight: '#232323',
        electric: '#C7F236',
        warmgray: '#8C887B',
        softborder: '#E3DFD5',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Newsreader', 'serif'],
      },
      boxShadow: {
        subtle: '0 4px 20px -2px rgba(21, 21, 21, 0.05)',
        card: '0 10px 30px -4px rgba(21, 21, 21, 0.06)',
      },
    },
  },
  plugins: [],
};
