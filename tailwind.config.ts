import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'main-color': '#f6ca79',
        'bg-color': '#34353a',
        'secondary-color': '#e7e7e7',
        'linedin-color': '#0a66c2',
        'whatsapp-color': '#00a884',
        'github-color': '#6766e9',
      },
      height: {
        'main-section-height': 'calc(100vh - 6rem)',
      },
    },
  },
  plugins: [],
};
export default config;
