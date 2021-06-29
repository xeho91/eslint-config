import { defineConfig } from "eslint-define-config";

// https://github.com/nodesecurity/eslint-plugin-security
const config = defineConfig({
	extends: ["plugin:@typescript-eslint/recommended"],
	plugins: ["@typescript-eslint"],
	parser: "@typescript-eslint/parser",
});

export default config;
