/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			// Adding custom font
			fontFamily: {
				poppins: ["Poppins"],
			},
		},
	},
	plugins: [],
};
