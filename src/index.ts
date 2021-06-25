import merge from "merge";

import pluginPromise from "./plugins/promise";
import pluginSecurity from "./plugins/security";
import pluginSvelte3 from "./plugins/svelte3";
import pluginTypeScript from "./plugins/typescript";
import pluginUnicorn from "./plugins/unicorn";
import eslint from "./eslint";

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

const config = merge(
	global,
	eslint,
	pluginPromise,
	pluginSecurity,
	pluginSvelte3,
	pluginTypeScript,
	pluginUnicorn,
);

module.exports = config;
