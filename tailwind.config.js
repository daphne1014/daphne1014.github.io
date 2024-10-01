import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
 content: [
    './index.html', 
    './src/*.tsx',   
    './src/**/*.tsx', 
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx',
  ],
  theme: {
    container: {
      center: true,
    },
    animation: {
      fadein: 'fadeIn .5s ease-in-out',
    },

    keyframes: {
      fadeIn: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      }
    },
    extend: {
      colors: {
        'light-shadow-black': 'rgba(0, 0, 0, 0.1)',
        'dark-shadow-black': 'rgba(0, 0, 0, 0.7)'
      },
    },
  },
  plugins: [],
}

