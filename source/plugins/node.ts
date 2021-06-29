import { defineConfig } from "eslint-define-config";

// https://github.com/mysticatea/eslint-plugin-node
const config = defineConfig({
	extends: ["plugin:node/recommended"],
	plugins: ["node"],

	rules: {
		"node/no-file-extension-in-import": ["error", "always"],
	},
});

export default config;
