import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: 'var(--font-inter)',
        gruppo: 'var(--font-gruppo)',
      },
      boxShadow: {
        custom:
          '10px 10px 20px 0px rgba(0, 0, 0, 0.3), -5px -5px 15px 0px rgba(225, 225, 225, 0.2), inset 0 3px 4px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
export default config;
