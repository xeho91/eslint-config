import type { Config } from "../types";

// https://github.com/typescript-eslint/typescript-eslint
const config: Config = {
	extends: ["plugin:@typescript-eslint/recommended"],
	plugins: ["@typescript-eslint"],
};

export default config;
