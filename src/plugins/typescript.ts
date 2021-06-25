import type { Config } from "../types";

// https://github.com/nodesecurity/eslint-plugin-security
const config: Config = {
	extends: ["plugin:security/recommended"],
	plugins: ["security"],
	parser: "@typescript-eslint/parser",
};

export default config;
