/** @type {import('tailwindcss').Config} */
const defaultConfig = require("tailwindcss/defaultConfig")

module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    ...defaultConfig.theme,
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Updated color palette inspired by the AI tech illustration
        cream: "#f8fafc",
        indigo: "#6366f1",
        purple: "#8b5cf6",
        blue: "#3b82f6",
        cyan: "#06b6d4",
        darkBlue: "#1e293b",
        lightBlue: "#e0f2fe",
        softPurple: "#f3f4f6",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        // ...existing animations...
        'blob-slow': 'blob 25s infinite cubic-bezier(0.4, 0.1, 0.3, 1)',
        'float': 'float 12s infinite ease-in-out',
        'pulse-slow': 'pulse-slow 8s infinite ease-in-out',
      },
      keyframes: {
        // ...existing keyframes...
        'blob-slow': {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -30px) scale(1.05)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.98)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        'float': {
          '0%': {
            transform: 'translateY(0px) translateX(0px)',
          },
          '50%': {
            transform: 'translateY(-15px) translateX(10px)',
          },
          '100%': {
            transform: 'translateY(0px) translateX(0px)',
          },
        },
        'pulse-slow': {
          '0%': {
            opacity: 0.2,
          },
          '50%': {
            opacity: 0.4,
          },
          '100%': {
            opacity: 0.2,
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }) {
      const newUtilities = {
        // ...existing utilities...
        '.animation-delay-5000': {
          'animation-delay': '5s',
        },
        '.bg-noise': {
          'background-image': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }
      };
      addUtilities(newUtilities);
    },
  ],
}
