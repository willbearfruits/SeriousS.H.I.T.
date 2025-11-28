/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'void': '#000000',
        'blood': '#8a0000',
        'neon-red': '#ff0000',
        'off-white': '#f0f0f0',
        'overlay': 'rgba(255, 0, 0, 0.1)',
      },
      fontFamily: {
        mono: ['"Courier New"', 'Courier', 'monospace'],
        display: ['"Arial Black"', 'Impact', 'sans-serif'],
      },
      animation: {
        'glitch-1': 'glitch-1 2.5s infinite linear alternate-reverse',
        'glitch-2': 'glitch-2 3s infinite linear alternate-reverse',
        'shake': 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
        'pulse-fast': 'pulse 0.1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glitch-1': {
          '0%': { clipPath: 'inset(20% 0 80% 0)' },
          '20%': { clipPath: 'inset(60% 0 10% 0)' },
          '40%': { clipPath: 'inset(40% 0 50% 0)' },
          '60%': { clipPath: 'inset(80% 0 5% 0)' },
          '80%': { clipPath: 'inset(10% 0 60% 0)' },
          '100%': { clipPath: 'inset(30% 0 30% 0)' },
        },
        'glitch-2': {
          '0%': { clipPath: 'inset(10% 0 60% 0)' },
          '20%': { clipPath: 'inset(30% 0 20% 0)' },
          '40%': { clipPath: 'inset(70% 0 10% 0)' },
          '60%': { clipPath: 'inset(20% 0 50% 0)' },
          '80%': { clipPath: 'inset(50% 0 30% 0)' },
          '100%': { clipPath: 'inset(0% 0 80% 0)' },
        },
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")",
      }
    },
  },
  plugins: [],
}
