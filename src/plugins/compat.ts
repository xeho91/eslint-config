import type { Config } from "../types";

// https://github.com/amilajack/eslint-plugin-compat
const config: Config = {
	extends: ["plugin:compat/recommended"],
	plugins: ["compat"],
};

export default config;
