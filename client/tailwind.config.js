/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primary: '#E34234',
        primaryVariant:"#FF7F50",
        darkBg:'#222',
        lightGrey:'#F4F4F4',
        // secondary: '#FF7900',
      }
    },
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
    // ...
  ],
};
