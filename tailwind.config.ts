import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        eudoxus: ['Eudoxus Sans', 'sans-serif'],
      },
      colors:{
        chadBlue30:'rgb(150, 202, 247)'
      },
      backgroundColor:{
        darkBlue20:'rgb(19, 66, 103)',
        chadBlue30:'rgb(150, 202, 247)'
      }
    },
  },
  plugins: [],
};
export default config;
