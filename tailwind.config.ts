import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			platinum: {
  				DEFAULT: '#d8dbe2',
  				100: '#262a33',
  				200: '#4b5366',
  				300: '#737e97',
  				400: '#a6adbd',
  				500: '#d8dbe2',
  				600: '#e1e3e8',
  				700: '#e8eaee',
  				800: '#f0f1f4',
  				900: '#f7f8f9'
  			},
  			pink_blue: {
  				DEFAULT: '#a9bcd0',
  				100: '#1b2531',
  				200: '#364b61',
  				300: '#507092',
  				400: '#7996b5',
  				500: '#a9bcd0',
  				600: '#bbc9d9',
  				700: '#ccd7e3',
  				800: '#dde4ec',
  				900: '#eef2f6'
  			},
  			moonstone: {
  				DEFAULT: '#58a4b0',
  				100: '#112224',
  				200: '#224348',
  				300: '#33656c',
  				400: '#448690',
  				500: '#58a4b0',
  				600: '#7ab7c0',
  				700: '#9bc9d0',
  				800: '#bcdbe0',
  				900: '#deedef'
  			},
  			charcoal: {
  				DEFAULT: '#373f51',
  				100: '#0b0d10',
  				200: '#161921',
  				300: '#212631',
  				400: '#2d3342',
  				500: '#373f51',
  				600: '#56627e',
  				700: '#7a87a5',
  				800: '#a6afc3',
  				900: '#d3d7e1'
  			},
  			eerie_black: {
  				DEFAULT: '#1b1b1e',
  				100: '#050506',
  				200: '#0b0b0c',
  				300: '#101012',
  				400: '#151518',
  				500: '#1b1b1e',
  				600: '#46464d',
  				700: '#71717d',
  				800: '#a0a0a9',
  				900: '#cfcfd4'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		container: {
  			center: true,
  			padding: "2rem",
  			screens: {
  				"2xl": "1400px",
  			},
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
  		},
  		animation: {
  			"accordion-down": "accordion-down 0.2s ease-out",
  			"accordion-up": "accordion-up 0.2s ease-out",
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
