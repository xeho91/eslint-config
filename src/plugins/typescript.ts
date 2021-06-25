import type { Config } from "../types";

// https://github.com/nodesecurity/eslint-plugin-security
const config: Config = {
	parser: "@typescript-eslint/parser",
	extends: ["plugin:security/recommended"],
	plugins: ["security"],
};

export default config;
