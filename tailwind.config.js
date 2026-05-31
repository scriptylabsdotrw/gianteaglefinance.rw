/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          black: '#050505',
          charcoal: '#111111',
          soft: '#1A1A1A',
        },
        gold: {
          DEFAULT: '#757500',
          bright: '#8f8f1a',
        },
        ivory: '#F8F5EC',
        muted: '#6B7280',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Flat theme — no shadows.
        luxe: 'none',
        gold: 'none',
        card: 'none',
      },
      backgroundImage: {
        // Flat solid gold (kept as a "gradient" token so existing utility usages stay gold, no visible gradient).
        'gold-gradient': 'linear-gradient(0deg, #757500, #757500)',
        'dark-radial': 'none',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        shimmer: 'shimmer 6s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
