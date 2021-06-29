import { defineConfig } from "eslint-define-config";

// https://github.com/yannickcr/eslint-plugin-react
// https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
// https://github.com/Intellicode/eslint-plugin-react-native
// https://github.com/DianaSuvorova/eslint-plugin-react-redux
// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
const config = defineConfig({
	extends: [
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:react-native/all",
		"plugin:react-redux/recommended",
		"plugin:jsx-a11y/recommended",
	],

	plugins: [
		"react",
		"react-hooks",
		"react-native",
		"react-redux",
		"jsx-a11y",
	],

	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},

	env: {
		"react-native/react-native": true,
	},
});

export default config;
