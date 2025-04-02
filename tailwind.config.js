const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				accent: '#679877',
				accentSecondary: '#C5CC66',
				accentGradient: 'linear-gradient(90deg, #679877 0%, #C5CC66 100%)',
				primary: '#070907',
				secondary: '#181b18',
				tertiary: '#222622',
				white100: 'hsla(240, 2%, 88%, 1.0)',
				white90: 'hsla(240, 2%, 88%, 0.9)',
				white75: 'hsla(240, 2%, 88%, 0.75)',
				white50: 'hsla(240, 2%, 88%, 0.5)',
				white25: 'hsla(240, 2%, 88%, 0.25)',
				white15: 'hsla(240, 2%, 88%, 0.15)',
				white10: 'hsla(240, 2%, 88%, 0.10)',
				white5: 'hsla(240, 2%, 88%, 0.05)'
			},
			fontFamily: {
				ubuntu: ["var(--font-ubuntu-sans)"],
				jetBrainsMono: ["var(--font-jetBrains-mono)"]
			},
			fontSize: {
				'body-lg': '1rem',
				body: '.875rem',
				kitmin: '0.64rem',
				sm: '0.8rem',
				base: '1rem',
				h1: '3.815rem',
				h2: '3.052rem',
				h3: '2.441rem',
				h4: '1.953rem',
				h5: '1.563rem',
				h6: '1.25rem'
			},
			keyframes: {
				'blur-fade-in': {
					'0%': {
						opacity: '0',
						filter: 'blur(10px)'
					},
					'100%': {
						opacity: '1',
						filter: 'blur(0px)'
					}
				},
				'scroll-horizontal-right': {
					'0%': {
						transform: 'left-[200%]'
					},
					'100%': {
						transform: 'left-0'
					}
				},
				'bg-pan-left': {
					to: {
						backgroundPosition: '100% 0%'
					}
				},
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
				blurfadein: 'blur-fade-in 2.5s cubic-bezier(0.680, -0.550, 0.265, 1.550) both 1',
				scrollHorizontalRight: 'scroll-horizontal-right 10s ease-in-out infinity',
				bgPanLeft: 'bg-pan-left 30s linear infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			backgroundImage: {
				'about-hero': "url('../public/images/about/about-hero.png')"
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};

