import { defineConfig } from "eslint-define-config";

const config = defineConfig({
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
