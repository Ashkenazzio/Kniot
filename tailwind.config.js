/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-open-sans)', 'sans-serif'],
        cursive: ['var(--font-gveretLevin)', 'cursive'],
        display: ['var(--font-indie-flower)', 'display'],
      },
      colors: {
        bg: '#fdecc9',
        accent: 'hsl(35, 90%, 62%)',
        light: 'hsl(0, 100%, 98%)',
        body: 'hsl(0, 0%, 20%)',
        hod: '#c084fc',
        daniel: '#fb7185',
        maayan: '#818cf8',
        omri: '#34d399',
      },
      gridTemplateColumns: {
        table: '1.5fr 1.5fr 1fr 1fr',
      },
      keyframes: {
        'slide-down': {
          from: { transform: 'translateY(-25%)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(10deg)',
          },
          '50%': {
            transform: 'rotate(-10deg)',
          },
        },
        bump: {
          '0% ,100%': {
            transform: 'scale(1)',
          },
          '10%': {
            transform: 'scale(0.9)',
          },
          '30%': {
            transform: 'scale(1.1)',
          },
          '50%': {
            transform: 'scale(1.15)',
          },
        },
      },
      animation: {
        'slide-down': 'slide-down 200ms linear',
        wiggle: 'wiggle 250ms infinite step-end',
        bump: 'bump 200ms ease-out',
      },
      dropShadow: {
        participant: '0px 4px 22px currentColor',
      },
    },
  },
  plugins: [],
};
