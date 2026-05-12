import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FBF7EE',
          100: '#F4ECD9',
          200: '#E7D8B6',
          300: '#D6BE8B',
          400: '#C2A063',
          500: '#A88646',
        },
        lagoon: {
          50: '#EAF3F6',
          100: '#CFE1E8',
          200: '#A2C5D2',
          300: '#6FA3B6',
          400: '#3F829B',
          500: '#1F6584',
          600: '#194E66',
          700: '#143D50',
          800: '#0F2E3D',
        },
        rust: {
          400: '#D17A48',
          500: '#B86A3A',
          600: '#9A562D',
        },
        ink: {
          900: '#11171C',
          800: '#1B2329',
          700: '#283139',
          500: '#4A5560',
          400: '#6E7984',
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'ui-serif', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wider2: '0.18em',
        widest2: '0.32em',
      },
      maxWidth: {
        prose2: '68ch',
      },
      animation: {
        'marquee-x': 'marquee-x 38s linear infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
      },
      keyframes: {
        'marquee-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
