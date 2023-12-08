/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      gridTemplateAreas: {
        'anime-main-xl': [
          'image details',
          'image trailer',
          'image gallery',
          'info gallery',
          'info sneekp',
          'info chars',
          'reviews chars',
          'reviews staffs',
          'reviews .',
          'reviews .',
        ],
        'anime-main-lg': [
          'image details',
          'image trailer',
          'info trailer',
          'info gallery',
          'sneekp sneekp',
          'chars staffs',
          'reviews reviews',
        ],
        'anime-main-md': [
          'image details',
          'info trailer',
          'info gallery',
          'sneekp sneekp',
          'chars staffs',
          'reviews reviews',
        ],
        'anime-main-sm': [
          'image details',
          'info details',
          'info trailer',
          'info trailer',
          'info gallery',
          'sneekp gallery',
          'chars staffs',
          'reviews reviews',
        ],
      },
      gridTemplateColumns: {
        'anime-main-template-cols': '1fr 1fr',
        'anime-main-md': '343px 1fr',
        'anime-main-xl': '400px 1fr',
      },
      gridTemplateRows: {
        // 'anime-main-sm': '.2fr .2fr .1fr 0.3fr .1fr .1fr .1fr',
        'anime-main-sm': 'repeat(auto-fill, minmax(100px, 1fr));',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
};
