/* eslint-disable unicorn/prefer-module, @typescript-eslint/no-var-requires */
import merge from "deepmerge";

import type { Linter } from "eslint";

const global: Linter.Config = {
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: "module",
	},

	env: {
		es2020: true,
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
};

function hasModule(name: string) {
	try {
		/* eslint-disable-next-line unicorn/prefer-module */
		require.resolve(name);
		return true;
	} catch {
		return false;
	}
}

const configurations = [
	global,
	require("./eslint").default,
	require("./plugins/compat").default,
	require("./plugins/html").default,
	require("./plugins/markdown").default,
	require("./plugins/promise").default,
	require("./plugins/security").default,
	hasModule("svelte") && require("./plugins/svelte3").default,
	hasModule("typescript") && require("./plugins/typescript").default,
	require("./plugins/unicorn").default,
].filter(Boolean);

const config = merge.all(configurations);

/* eslint-disable-next-line unicorn/prefer-module */
module.exports = config;
