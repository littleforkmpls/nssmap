module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		'no-console': 'off',
		'no-alert': 'off',
		'jsx-a11y/no-onchange': 'off',
	},
};
