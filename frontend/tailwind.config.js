/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
      },
      colors: {
        bg: {
          primary: '#050510',
          secondary: '#0a0a1f',
          card: 'rgba(255,255,255,0.04)',
        },
        accent: {
          purple: '#6366f1',
          cyan: '#06b6d4',
          pink: '#ec4899',
          green: '#10b981',
        },
      },
      animation: {
        'blink': 'blink 1s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'scroll-pulse': 'scroll-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99,102,241,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(99,102,241,0.6)' },
        },
        'scroll-pulse': {
          '0%, 100%': { opacity: '0.3', transform: 'scaleY(1)' },
          '50%': { opacity: '1', transform: 'scaleY(1.2)' },
        },
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
        'gradient-hero': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
