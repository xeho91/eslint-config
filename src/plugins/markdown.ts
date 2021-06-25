import type { Config } from "../types";

// https://github.com/eslint/eslint-plugin-markdown
const config: Config = {
	extends: ["plugin:markdown/recommended"],

	overrides: [{
		files: ["**/*.md"],
		processor: "markdown/markdown",
	}],

	plugins: ["markdown"],
};

export default config;
