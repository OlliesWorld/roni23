import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts,svx,md}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			backgroundImage: {
				ollie: "url('/olliecute.png')"
			},
			backgroundSize: {
				'50%': '50%',
				'16': '14rem'
			},
			colors: {
				'regal-green': '#c6c60c',
				'dark-blue': '#05386b'
			},
			animation: {
				border: 'border 8s ease-in-out infinite'
			},
			keyframes: {
				border: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				}
			}
		}
	},
	plugins: [
		skeleton({
			themes: {
				custom: [
					{
						name: 'roni-theme',
						properties: {
							'--theme-font-family-base': 'Proxima Nova, system-ui, sans-serif',
							'--theme-font-family-heading': 'Andalé Mono, monospace',
							'--color-primary-50': '252 252 230',
							'--color-primary-100': '248 248 204',
							'--color-primary-200': '240 240 153',
							'--color-primary-300': '230 230 102',
							'--color-primary-400': '214 214 57',
							'--color-primary-500': '198 198 12',
							'--color-primary-600': '168 168 10',
							'--color-primary-700': '139 139 8',
							'--color-primary-800': '110 110 6',
							'--color-primary-900': '82 82 4',
							'--color-primary-950': '55 55 2',
							'--color-secondary-50': '243 232 255',
							'--color-secondary-100': '233 213 255',
							'--color-secondary-200': '216 180 254',
							'--color-secondary-300': '192 132 252',
							'--color-secondary-400': '168 85 247',
							'--color-secondary-500': '147 51 234',
							'--color-secondary-600': '126 34 206',
							'--color-secondary-700': '107 33 168',
							'--color-secondary-800': '88 28 135',
							'--color-secondary-900': '59 7 100',
							'--color-secondary-950': '38 5 66',
							'--color-surface-50': '230 240 247',
							'--color-surface-100': '204 224 238',
							'--color-surface-200': '153 193 222',
							'--color-surface-300': '102 163 205',
							'--color-surface-400': '51 132 188',
							'--color-surface-500': '5 56 107',
							'--color-surface-600': '4 47 91',
							'--color-surface-700': '3 38 75',
							'--color-surface-800': '2 28 58',
							'--color-surface-900': '1 19 40',
							'--color-surface-950': '0 10 22'
						}
					}
				]
			}
		})
	]
};
