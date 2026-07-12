import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'
export default {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'fluid-h1': ['clamp(1.35rem, 4.5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'fluid-h2': ['clamp(1.125rem, 3.5vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'fluid-h3': ['clamp(1rem, 2.5vw, 1.75rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'fluid-base': ['clamp(0.875rem, 1.25vw, 1rem)', { lineHeight: '1.6' }],
      },
      colors: {
        surface: '#FFFFFF',
        'surface-secondary': '#F5F7FB',
        'surface-section': 'var(--surface-section)',
        'surface-elevated': 'var(--surface-elevated)',
        'surface-container': '#FFFFFF', // keep for compatibility if used
        outline: '#E5EAF2',
        'outline-variant': '#E5EAF2',
        primary: {
          DEFAULT: '#7C3AED',
          container: '#F3E8FF',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#A855F7',
          foreground: '#FFFFFF',
        },
        success: {
          DEFAULT: '#22C55E',
          foreground: '#FFFFFF',
        },
        warning: {
          DEFAULT: '#F59E0B',
          foreground: '#FFFFFF',
        },
        on: {
          surface: '#111827', // Headings
          'surface-variant': '#6B7280', // Body Text
        },
        accent: {
          cyan: '#22D3EE',
          indigo: '#6366F1',
          DEFAULT: '#14B8A6',
          container: '#CCFBF1',
          foreground: '#FFFFFF',
        },
        // Semantic tokens map to CSS variables for potential theming
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem', // Buttons
        '3xl': '1.25rem', // Cards (shrunk from 1.5rem for tighter feel)
        'input': '1rem', // Inputs
        full: '9999px', // Badges
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 2px 4px rgba(15, 23, 42, 0.04), 0 4px 6px rgba(15, 23, 42, 0.02)',
        'md': '0 4px 6px rgba(15, 23, 42, 0.04), 0 8px 12px rgba(15, 23, 42, 0.03)',
        'lg': '0 8px 16px rgba(15, 23, 42, 0.05), 0 16px 24px rgba(15, 23, 42, 0.03)',
        'xl': '0 12px 24px rgba(15, 23, 42, 0.06), 0 24px 48px rgba(15, 23, 42, 0.04)',
        'hover': '0 16px 32px rgba(15, 23, 42, 0.08), 0 32px 64px rgba(15, 23, 42, 0.05)',
        '2xl': '0 20px 40px rgba(15, 23, 42, 0.08), 0 40px 80px rgba(15, 23, 42, 0.06)',
        'glow': '0 0 20px rgba(124, 58, 237, 0.10)', // Soft primary glow
        'glow-primary': '0 0 20px rgba(124, 58, 237, 0.20)', // Primary glow
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config
