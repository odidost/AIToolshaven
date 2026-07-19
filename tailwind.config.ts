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
        surface: 'var(--card)',
        'surface-secondary': 'var(--muted)',
        'surface-section': 'var(--surface-section)',
        'surface-elevated': 'var(--surface-elevated)',
        'surface-container': 'var(--card)',
        outline: 'var(--border)',
        'outline-variant': 'var(--border)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        success: {
          DEFAULT: 'var(--success)',
          foreground: 'var(--success-foreground)',
        },
        warning: {
          DEFAULT: 'var(--warning)',
          foreground: 'var(--warning-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        on: {
          surface: 'var(--foreground)',
          'surface-variant': 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
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
        sans: ['var(--font-plus-jakarta)', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem', // Buttons
        '3xl': '1.25rem', // Cards (shrunk from 1.5rem for tighter feel)
        'input': '1rem', // Inputs
        full: '9999px', // Badges
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(15, 23, 42, 0.04)',
        'sm': '0 2px 4px rgba(15, 23, 42, 0.02), 0 4px 6px rgba(15, 23, 42, 0.02)',
        'md': '0 4px 6px rgba(15, 23, 42, 0.03), 0 8px 12px rgba(15, 23, 42, 0.02)',
        'lg': '0 8px 16px rgba(15, 23, 42, 0.04), 0 16px 24px rgba(15, 23, 42, 0.02)',
        'xl': '0 12px 24px rgba(15, 23, 42, 0.04), 0 24px 48px rgba(15, 23, 42, 0.02)',
        'hover': '0 16px 40px rgba(15, 23, 42, 0.06), 0 32px 80px rgba(15, 23, 42, 0.04)',
        '2xl': '0 20px 40px rgba(15, 23, 42, 0.06), 0 40px 80px rgba(15, 23, 42, 0.04)',
        'glow': '0 0 40px rgba(146, 71, 242, 0.15)',
        'glow-primary': '0 0 60px rgba(146, 71, 242, 0.25)',
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
