import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#08080b',
        surface: '#0f0f14',
        'surface-2': '#15151c',
        border: '#22222b',
        muted: '#8f8f9d',
        accent: '#22d3ee',
        'accent-dim': '#0891b2',
        'accent-2': '#818cf8',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        soft: '0 24px 60px -24px rgba(0, 0, 0, 0.8)',
        'glow-sm': '0 0 30px -8px rgba(34, 211, 238, 0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out both',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        float: 'float 7s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 5s ease-in-out infinite',
        blink: 'blink 1.1s steps(1) infinite',
        marquee: 'marquee 42s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.7' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
