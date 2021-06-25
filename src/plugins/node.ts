import type { Config } from "../types";

// https://github.com/mysticatea/eslint-plugin-node
const config: Config = {
	extends: ["plugin:node/recommended"],
	plugins: ["node"],

	rules: {
		"node/no-file-extension-in-import": ["error", "always"],
	},
};

export default config;
