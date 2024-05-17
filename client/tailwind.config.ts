import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        black: 'var(--black)',
        white: 'var(--white)',
        gray: 'var(--gray)',
        'very-light-blue': 'var(--very-light-blue)',
        'alpha-black': 'var(--alpha-black)',

        'body-background': 'var(--body-background)',
        'header-background': 'var(--header-background)',

        'muted': 'var(--muted)',
      },
      boxShadow: {
        'primary-filled-button-shadow': 'var(--primary-filled-button-shadow)',
        'input-box-shadow': 'var(--input-box-shadow)',
        header: '0 -0.5rem 0.7rem 0.0625rem'
      },
      dropShadow: {
        'secondary-button-drop-shadow': 'var(--secondary-button-drop-shadow)',
        logo: '0 0 4px var(--primary)',
      },
      screens: {
        '-xs': { max: '375px' },
        '-sm': { max: '575px' },
        '-md': { max: '768px' },
        '-lg': { max: '992px' },
        '-xl': { max: '1200px' },
        '-xxl': { max: '1440px' },
      }
    },
  },
  plugins: [],
};

export default config;
