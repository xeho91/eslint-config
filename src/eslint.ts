import type { Config } from "./types";

const config: Config = {
	extends: ["eslint:recommended"],

	// https://eslint.org/docs/rules
	rules: {
		"indent": [
			"warn",
			"tab",
			{ SwitchCase: 1 },
		],

		"max-len": [
			"error",
			{
				code: 100,
				tabWidth: 4,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreUrls: true,
			},
		],

		"quotes": ["warn", "double", { avoidEscape: true }],

		"no-console": ["warn"],

		"no-alert": ["error"],

		"no-debugger": ["error"],

		"prefer-named-capture-group": ["error"],

		"func-names": ["error", "as-needed"],
	},
}

export { config };
