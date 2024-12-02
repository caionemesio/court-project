/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#FFF964',
          light: '#EEEEF6',
          dark: '#083965',
          contrastText: '#EEEEF6',
        },
        secondary: {
          main: '#E4572E',
          light: '#F9F9F9',
          dark: '#E4572E',
          contrastText: '#F9F9F9',
        },
        base: {
          50: '#FFFFFF',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
        },
        success: {
          50: '#DCFCE7',
          100: '#BBF7D0',
          200: '#86EFAC',
          300: '#4ADE80',
          400: '#22C55E',
          500: '#16A34A',
          600: '#15803D',
        },
        error: {
          50: '#FEE2E2',
          100: '#FECACA',
          200: '#FCA5A5',
          300: '#F87171',
          400: '#EF4444',
          500: '#DC2626',
          600: '#B91C1C',
        },
        warning: {
          50: '#FEF9C3',
          100: '#FEF08A',
          200: '#FDE047',
          300: '#FACC15',
          400: '#EAB308',
          500: '#CA8A04',
          600: '#A16207',
        },
      },
    },
  },
  plugins: [],
}

