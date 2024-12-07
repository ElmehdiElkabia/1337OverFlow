/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				slideFromTop: {
					'0%': {
						opacity: '0',
						transform: 'translateY(-50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				slideFromBottom: {
					'0%': {
						opacity: '0',
						transform: 'translateY(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				popIn: {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				slideFromLeft: {
					'0%': {
						opacity: '0',
						transform: 'translateX(-50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				slideFromRight: {
					'0%': {
						opacity: '0',
						transform: 'translateX(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				}
			},
			animation: {
				slideFromTop: 'slideFromTop 1s ease-out forwards',
				slideFromBottom: 'slideFromBottom 1s ease-out forwards',
				popIn: 'popIn 0.7s ease-out forwards',
				slideFromLeft: 'slideFromLeft 0.7s ease-out forwards',
				slideFromRight: 'slideFromRight 0.7s ease-out forwards'
			}
		}
	},
	plugins: [],
};
