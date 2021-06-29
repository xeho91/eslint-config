import { defineConfig } from "eslint-define-config";

// https://github.com/xjamundx/eslint-plugin-promise
const config = defineConfig({
	extends: ["plugin:promise/recommended"],
	plugins: ["promise"],
});

export default config;
