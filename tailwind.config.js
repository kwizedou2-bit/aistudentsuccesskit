/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#14213D',
          light: '#1E2E52',
          soft: '#2B2D3E',
        },
        paper: {
          DEFAULT: '#F1F3F6',
          card: '#FFFFFF',
        },
        marker: {
          lime: '#D6F24C',
          pink: '#FF6F91',
          sky: '#5BC8FF',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(rgba(20,33,61,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(20,33,61,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        highlight: {
          '0%': { backgroundSize: '0% 100%' },
          '100%': { backgroundSize: '100% 100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(var(--tilt, 0deg))' },
          '50%': { transform: 'translateY(-6px) rotate(var(--tilt, 0deg))' },
        },
      },
      animation: {
        highlight: 'highlight 0.8s ease-out forwards',
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
