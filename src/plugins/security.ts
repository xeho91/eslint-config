import { defineConfig } from "eslint-define-config";

// https://github.com/typescript-eslint/typescript-eslint

const config = defineConfig({
	extends: ["plugin:security/recommended"],
	plugins: ["security"],
});

export default config;
