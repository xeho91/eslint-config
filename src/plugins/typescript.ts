import type { Config } from "../types";

// https://github.com/nodesecurity/eslint-plugin-security
const config: Config = {
	extends: ["plugin:@typescript-eslint/recommended"],
	plugins: ["@typescript-eslint"],
	parser: "@typescript-eslint/parser",
};

export default config;
