module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true
	},
	extends: "eslint:recommended",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: "module"
	},
	plugins: ["react", "react-hooks"],
	rules: {
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-console": "off",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn"
	}
};
