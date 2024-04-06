/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 10s linear infinite',
			},
			colors: {
				'kv': {
					'50': '#ebf9ff',
					'100': '#d2f1ff',
					'200': '#afe8ff',
					'300': '#78dcff',
					'400': '#39c5ff',
					'500': '#0ba2ff',
					'600': '#007eff',
					'700': '#0065ff',
					'800': '#0053d4',
					'900': '#023e8a',
					'950': '#072e64'
				}
			},
		},
	},
	plugins: [],
}
