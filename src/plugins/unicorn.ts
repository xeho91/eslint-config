import type { Config } from "../types";

// https://github.com/sindresorhus/eslint-plugin-unicorn
const config: Config = {
	extends: ["plugin:unicorn/recommended"],
	plugins: ["unicorn"],
};

export default config;
