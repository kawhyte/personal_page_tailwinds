// See https://tailwindcss.com/docs/configuration for details
module.exports = {
	purge: ["./src/**/*.js"],
	theme: {
		fontSize: {
			xs: ".75rem",
			sm: ".875rem",
			tiny: ".875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
			"7xl": "5rem",
			"8xl": "7rem",
			"9xl": "9rem",
			"10xl": "10rem",
			"15xl": "15rem",
		},
	},
	variants: {},
	// https://github.com/tailwindcss/custom-forms
	plugins: [require("@tailwindcss/custom-forms")],
};
