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
        darkBg: "#050814",
        navyDeep: "#090d20",
        cardBg: "rgba(13, 20, 39, 0.7)",
        cardBorder: "rgba(99, 102, 241, 0.18)",
        cardBorderHover: "rgba(168, 85, 247, 0.45)",
        neonPurple: "#a855f7",
        neonViolet: "#8b5cf6",
        electricBlue: "#3b82f6",
        cyberCyan: "#06b6d4",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #06b6d4 100%)',
        'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #a855f7 0deg, #3b82f6 120deg, #06b6d4 240deg, #a855f7 360deg)',
      },
      boxShadow: {
        'neon-purple': '0 0 25px rgba(168, 85, 247, 0.35)',
        'neon-blue': '0 0 25px rgba(59, 130, 246, 0.35)',
        'neon-cyan': '0 0 25px rgba(6, 182, 212, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}

