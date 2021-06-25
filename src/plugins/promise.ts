import type { Config } from "../types";

// https://github.com/xjamundx/eslint-plugin-promise
const config: Config = {
	extends: ["plugin:promise/recommended"],
	plugins: ["promise"],
};

export default config;
