import type { Config } from "../types";

// https://github.com/typescript-eslint/typescript-eslint

const config: Config = {
	extends: ["plugin:security/recommended"],
	plugins: ["security"],
};

export default config;
