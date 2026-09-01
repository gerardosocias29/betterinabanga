import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        inabanga: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#086b3c',
          800: '#06542f',
          900: '#043e23', // Official "SHINE INABANGA" deep forest green
          950: '#022815',
        },
        shine: {
          yellow: '#fde047',
          gold: '#f59e0b',
          amber: '#d97706',
          orange: '#ea580c',
          glow: '#fbbf24',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0 0 25px -5px rgba(8, 107, 60, 0.3)',
        'glow-gold': '0 0 25px -5px rgba(245, 158, 11, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
