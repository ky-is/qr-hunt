module.exports = {
	theme: {
		extend: {
			inset: {
				'full': '100%',
			},
			opacity: {
				'10': '0.1',
				'90': '0.9',
			},
		},
	},
	corePlugins: {
		container: false,
	},
	variants: {
		display: ['responsive', 'hover', 'group-hover'],
	},
	plugins: [
		require('@ky-is/tailwindcss-plugin-width-height')({ variants: ['responsive'] }),
	],
}
