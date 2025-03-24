/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'primary-500': '#877EFF',
        'primary-600': '#5D5FEF',
        'secondary-500': '#FFB620',
        'off-white': '#D0DFFF',
        red: '#FF5A5A',
        'dark-1': '#000000',
        'dark-2': '#09090A',
        'dark-3': '#101012',
        'dark-4': '#1F1F22',
        'light-1': '#FFFFFF',
        'light-2': '#EFEFEF',
        'light-3': '#7878A3',
        'light-4': '#5C5C7B',
      },
      screens: {
        xs: '480px',
      },
      width: {
        420: '420px',
        465: '465px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
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
    },
  },
  plugins: [
    require('tailwindcss-animate'),

    // Add this plugin for custom scrollbar
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        // Typography
        '.h1-bold': {
          fontSize: '36px',
          fontWeight: '700',
          lineHeight: '140%',
          letterSpacing: '-0.05em',
        },
        '.h1-semibold': {
          fontSize: '36px',
          fontWeight: '600',
          lineHeight: '140%',
          letterSpacing: '-0.05em',
        },
        '.h2-bold': {
          fontSize: '30px',
          fontWeight: '700',
          lineHeight: '140%',
          letterSpacing: '-0.05em',
        },
        '.h3-bold': {
          fontSize: '24px',
          fontWeight: '700',
          lineHeight: '140%',
          letterSpacing: '-0.05em',
        },
        '.base-semibold': {
          fontSize: '16px',
          fontWeight: '600',
          lineHeight: '140%',
          letterSpacing: '-0.05em',
        },
        '.base-medium': {
          fontSize: '16px',
          fontWeight: '500',
          lineHeight: '140%',
        },
        '.base-regular': {
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '140%',
        },
        '.body-bold': {
          fontSize: '18px',
          fontWeight: '700',
          lineHeight: '140%',
        },
        '.body-medium': {
          fontSize: '18px',
          fontWeight: '500',
          lineHeight: '140%',
        },
        '.small-semibold': {
          fontSize: '14px',
          fontWeight: '600',
          lineHeight: '140%',
          letterSpacing: '-0.05em',
        },
        '.small-medium': {
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '140%',
        },
        '.small-regular': {
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '140%',
        },
        '.subtle-semibold': {
          fontSize: '12px',
          fontWeight: '600',
          lineHeight: '140%',
        },
        '.tiny-medium': {
          fontSize: '10px',
          fontWeight: '500',
          lineHeight: '140%',
        },

        // Utility classes
        '.invert-white': {
          filter: 'invert(1) brightness(0)',
          transition: 'all 0.3s ease',
        },
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.flex-between': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        '.flex-start': {
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        },

        // Scrollbar
        '.custom-scrollbar::-webkit-scrollbar': {
          width: '3px',
          height: '3px',
          borderRadius: '2px',
        },
        '.custom-scrollbar::-webkit-scrollbar-track': { background: '#09090a' },
        '.custom-scrollbar::-webkit-scrollbar-thumb': {
          background: '#5c5c7b',
          borderRadius: '50px',
        },
        '.custom-scrollbar::-webkit-scrollbar-thumb:hover': {
          background: '#7878a3',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
