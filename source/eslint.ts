import { defineConfig } from "eslint-define-config";

const config = defineConfig({
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: "module",
	},

	env: {
		es2021: true,
		node: true,
		browser: true,
	},

	ignorePatterns: [
		"node_modules/**/*",
		".git/**/*",
		".husky/**/*",
		".svelte-kit/**/*",
		".vercel/**/*",
		".vercel_build_output/**/*",
		"build/**/*",
		"lib/**/*",
		// Unignore files starting with dot (usually config files)
		"!.*",
	],

	extends: ["eslint:recommended"],

	rules: {
		"indent": ["warn", "tab", { SwitchCase: 1 }],

		"max-len": ["error", {
			code: 100,
			tabWidth: 4,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
			ignoreUrls: true,
		}],

		"quotes": ["warn", "double", { avoidEscape: true }],

		"no-console": ["warn"],

		"no-alert": ["error"],

		"no-debugger": ["error"],

		"prefer-named-capture-group": ["error"],

		"func-names": ["error", "as-needed"],
	},
});

export default config;
