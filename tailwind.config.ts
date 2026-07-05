import type { Config } from 'tailwindcss'

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
        surface: '#F9FAFB',
        'surface-container': '#FFFFFF',
        outline: '#E5E7EB',
        'outline-variant': '#F3F4F6',
        primary: {
          DEFAULT: '#4F46E5',
          container: '#EEF2FF',
          foreground: '#4338CA',
        },
        secondary: {
          DEFAULT: '#10B981',
        },
        on: {
          surface: '#111827',
          'surface-variant': '#4B5563',
        },
        accent: {
          DEFAULT: '#F59E0B',
          container: '#FEF3C7',
        },
        // Shadcn defaults to map to our tokens
        background: '#F9FAFB',
        foreground: '#111827',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#111827',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#111827',
        },
        muted: {
          DEFAULT: '#F3F4F6',
          foreground: '#4B5563',
        },
        border: '#E5E7EB',
        input: '#E5E7EB',
        ring: '#4F46E5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
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
  plugins: [require('tailwindcss-animate')],
} satisfies Config
