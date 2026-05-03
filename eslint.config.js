import js from '@eslint/js'
import globals from 'globals'

export default [
	js.configs.recommended,
	{
		ignores: ['node_modules/', 'dist/', '.vite/', '*.html'],
	},
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			'no-unused-vars': 'warn',
			'no-console': 'off',
			'prefer-const': 'error',
		},
	},
]
