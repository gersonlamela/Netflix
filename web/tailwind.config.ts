import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				black: '#000000',
  				white: '#FFFFFF',
  				red: '#E50914',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'red-100': '#EB3942',
  				'red-200': '#C11119',
  				'red-300': '#F50723',
  				'blue-100': '#0071EB',
  				'blue-200': '#448EF4',
  				'blue-300': '#54b9c5',
  				green: '#46d369',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			neutral: {
  				'grey-10': '#e5e5e5',
  				'grey-20': '#dcdcdc',
  				'grey-25': '#d2d2d2',
  				'grey-50': '#bcbcbc',
  				'grey-100': '#b3b3b3',
  				'grey-150': '#979797',
  				'grey-200': '#808080',
  				'grey-250': '#777777',
  				'grey-300t40': 'rgba(109, 109, 110, 0.4)',
  				'grey-300t70': 'rgba(109, 109, 110, 0.7)',
  				'grey-350': '#545454',
  				'grey-400': '#414141',
  				'grey-450': '#404040',
  				'grey-500': '#3a3a3a',
  				'grey-550': '#363636',
  				'grey-600t60': 'rgba(51, 51, 51, 0.6)',
  				'grey-600': '#333333',
  				'grey-650': '#2f2f2f',
  				'grey-700': '#2a2a2a',
  				'grey-750': '#262626',
  				'grey-800': '#232323',
  				'grey-850': '#181818',
  				'grey-900': '#141414'
  			},
  			transparentWhite: {
  				'15': 'rgba(255, 255, 255, 0.15)',
  				'20': 'rgba(255, 255, 255, 0.2)',
  				'30': 'rgba(255, 255, 255, 0.3)',
  				'35': 'rgba(255, 255, 255, 0.35)',
  				'50': 'rgba(255, 255, 255, 0.5)',
  				'70': 'rgba(255, 255, 255, 0.7)'
  			},
  			transparentBlack: {
  				'30': 'rgba(0, 0, 0, 0.3)',
  				'60': 'rgba(0, 0, 0, 0.6)',
  				'90': 'rgba(0, 0, 0, 0.9)'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
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
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		backgroundImage: {
  			'custom-radial': 'radial-gradient(circle, rgba(255, 153, 0, 0.6) 0%, rgba(229, 9, 20, 0.6) 0%, rgba(14, 27, 79, 0.6) 70%, rgba(0, 4, 19, 0.6) 100%)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;