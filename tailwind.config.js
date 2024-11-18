const config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        nav: "hsl(31, 26%, 55%)",
        maintext: "hsl(275, 45%, 29%)",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        splitX: {
          '0%': { width: '0', transform: 'translate(-50%, 0)' },
          '33%': { width: '100%', transform: 'translate(-50%, 0)' },
          '66%': { width: '100%', transform: 'translate(-50%, 24px)' },
          '100%': { width: '0', transform: 'translate(-50%, 24px)' },
        },
        moveY: {
          '0%, 33%': { transform: 'translateY(0)' },
          '66%, 100%': { transform: 'translateY(-24px)' },
        },
      },
      animation: {
        splitX: 'splitX 1s linear infinite alternate',
        moveY: 'moveY 1s linear infinite alternate',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

module.exports = config;
