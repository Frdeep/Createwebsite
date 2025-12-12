import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: {
          pure: '#FFFFFF',
          soft: '#FAFAFA',
          muted: '#F5F5F7',
        },
        gray: {
          100: '#E8E8ED',
          200: '#D2D2D7',
          300: '#B0B0B5',
          400: '#86868B',
          500: '#6E6E73',
          600: '#1D1D1F',
        },
        black: {
          pure: '#000000',
          soft: '#0A0A0A',
        },
        glass: {
          white: 'rgba(255, 255, 255, 0.72)',
          border: 'rgba(255, 255, 255, 0.18)',
          shadow: 'rgba(0, 0, 0, 0.04)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(3.5rem, 8vw, 6rem)', { lineHeight: '1.05', fontWeight: '700', letterSpacing: '-0.03em' }],
        title: ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1', fontWeight: '600', letterSpacing: '-0.02em' }],
        subtitle: ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '-0.01em' }],
        body: ['1.0625rem', { lineHeight: '1.6', fontWeight: '400', letterSpacing: '0' }],
        small: ['0.875rem', { lineHeight: '1.5', fontWeight: '400', letterSpacing: '0.01em' }],
        caption: ['0.75rem', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.02em' }],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '96px',
        '5xl': '128px',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '32px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(0, 0, 0, 0.02)',
        sm: '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        md: '0 4px 16px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.02)',
        lg: '0 8px 32px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(0, 0, 0, 0.02)',
        xl: '0 16px 48px rgba(0, 0, 0, 0.10), 0 8px 16px rgba(0, 0, 0, 0.04)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
        bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        snappy: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      animation: {
        'breathe': 'breathe 3s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
