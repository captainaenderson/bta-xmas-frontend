/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'mono': ['GT-America-Mono', 'monospace'] // Definiert 'GT-America-Mono' als Schriftfamilie
			  }
		},
	},
	plugins: [],
};

