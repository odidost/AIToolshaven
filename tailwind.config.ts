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
      colors: {
        surface: '#FFFFFF',
        'surface-secondary': '#F5F7FB',
        'surface-container': '#FFFFFF', // keep for compatibility if used
        outline: '#E8ECF3',
        'outline-variant': '#E8ECF3',
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
        '2xl': '1rem', // Buttons (16px)
        '3xl': '1.5rem', // Cards (24px)
        'input': '1.125rem', // Inputs (18px)
        full: '9999px', // Badges
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 10px 40px rgba(15, 23, 42, 0.06)',
        'md': '0 20px 60px rgba(15, 23, 42, 0.10)',
        'lg': '0 30px 80px rgba(15, 23, 42, 0.12)',
        'xl': '0 40px 100px rgba(15, 23, 42, 0.14)',
        '2xl': '0 50px 120px rgba(15, 23, 42, 0.16)',
        'glow': '0 0 20px rgba(124, 58, 237, 0.15)', // Soft primary glow
        'glow-primary': '0 0 20px rgba(124, 58, 237, 0.25)', // Primary glow
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config
