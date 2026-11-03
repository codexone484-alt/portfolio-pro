/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#09090B',
        surface: '#111114',
        elevated: '#18181B',
        border: '#27272A',
        foreground: '#FAFAFA',
        muted: '#A1A1AA',
        primary: {
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        secondary: {
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        success: {
          400: '#34D399',
          500: '#10B981',
        },
        warning: {
          400: '#FBBF24',
          500: '#F59E0B',
        },
        error: {
          400: '#FB7185',
          500: '#F43F5E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '50%': { transform: 'translate3d(30px, -40px, 0) scale(1.08)' },
        },
        'blink-caret': {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        'float-slow': 'float-slow 18s ease-in-out infinite',
        'blink-caret': 'blink-caret 1.1s steps(1) infinite',
      },
    },
  },
  plugins: [],
};
