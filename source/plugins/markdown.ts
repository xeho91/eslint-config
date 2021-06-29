import { defineConfig } from "eslint-define-config";

// https://github.com/eslint/eslint-plugin-markdown
const config = defineConfig({
	extends: ["plugin:markdown/recommended"],

	overrides: [{
		files: ["**/*.md"],
		processor: "markdown/markdown",
	}],

	plugins: ["markdown"],
});

export default config;
