import rulesESLint from "./rules/eslint";

import type { Linter } from "eslint";

const config: Linter.Config = {
	extends: [
		// https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js
		"eslint:recommended",

		// https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.ts
		"plugin:@typescript-eslint/recommended",

		// https://github.com/nodesecurity/eslint-plugin-security
		"plugin:security/recommended",

		// https://github.com/xjamundx/eslint-plugin-promise
		"plugin:promise/recommended",
	],

	parser: "@typescript-eslint/parser",

	parserOptions: {
		ecmaVersion: 2021,
		sourceType: "module",
	},

	plugins: [
		// https://github.com/typescript-eslint/typescript-eslint
		"@typescript-eslint",

		// https://github.com/nodesecurity/eslint-plugin-security
		"security",

		// https://github.com/xjamundx/eslint-plugin-promise
		"promise",

		// https://github.com/BenoitZugmeyer/eslint-plugin-html
		"html",

		// https://github.com/sveltejs/eslint-plugin-svelte3
		"svelte3",
	],

	overrides: [
		{
			files: ["*.svelte", "*.svx"],
			processor: "svelte3/svelte3",
		},
	],

	env: {
		es2020: true,
		node: true,
		browser: true,
	},

	rules: {
		...rulesESLint,
	},

	settings: {
		// https://github.com/sveltejs/eslint-plugin-svelte3#configuration
		"svelte3/ignore-styles": () => true,
		"svelte3/typescript": require("typescript"),
	},

	ignorePatterns: [
		"node_modules/**/*",
		".git/**/*",
		".husky/**/*",
		".svelte-kit/**/*",
		".vercel/**/*",
		".vercel_build_output/**/*",
		"build",
		// Unignore files starting with dot (usually config files)
		"!.*",
	],
};

module.exports = config;
