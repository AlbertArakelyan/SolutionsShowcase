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

        'muted': 'var(--muted)',
      },
      boxShadow: {
        'primary-filled-button-shadow': 'var(--primary-filled-button-shadow)',
        'input-box-shadow': 'var(--input-box-shadow)',
      },
      dropShadow: {
        'secondary-button-drop-shadow': 'var(--secondary-button-drop-shadow)',
      },
    },
  },
  plugins: [],
};

export default config;
