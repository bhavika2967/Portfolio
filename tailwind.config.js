/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#070a0e',
          900: '#0d1117', // Primary deep matte carbon background
          850: '#12171f',
          800: '#161f26',
          700: '#212b36',
        },
        cyber: {
          emerald: '#10b981',
          lime: '#a3e635',
          neon: '#00ff9d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
        'radar-ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.65', transform: 'scale(1.08)' },
        }
      },
      boxShadow: {
        'cyber-sm': '0 0 15px rgba(16, 185, 129, 0.15)',
        'cyber-md': '0 0 25px rgba(16, 185, 129, 0.35)',
        'cyber-lg': '0 0 45px rgba(16, 185, 129, 0.55)',
      }
    },
  },
  plugins: [],
}

