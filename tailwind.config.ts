import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "Courier New", "monospace"],
      },
      colors: {
        border: "rgba(13,13,13,0.08)",
        input: "rgba(13,13,13,0.14)",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        teal: "#0A7D7B",
        gold: "#0A7D7B",
        "bg-base": "#F5F5F0",
        "bg-elevated": "#FFFFFF",
        "bg-hover": "#ECECE6",
        "surface-3": "#E2E2DC",
        "body-text": "rgba(13,13,13,0.78)",
        "label-text": "rgba(13,13,13,0.62)",
        "dim-text": "rgba(13,13,13,0.42)",
        "error-red": "#A43131",
        "footer-bg": "#0D0D0D",
        "footer-text": "#F5F5F0",
        "footer-muted": "rgba(245,245,240,0.68)",
        "ardent-studio": "#0D0D0D",
        "ardent-charcoal": "#F5F5F0",
        "ardent-ink": "#0D0D0D",
        "ardent-paper": "#0D0D0D",
        "ardent-gold": "#0A7D7B",
        "ardent-gold-lt": "#0A7D7B",
        "ardent-lime": "#C3F73A",
        "ardent-cyan": "#0A7D7B",
        "ardent-coral": "#0A7D7B",
        "ardent-mint": "#0A7D7B",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
