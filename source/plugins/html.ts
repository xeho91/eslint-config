import { defineConfig } from "eslint-define-config";

// https://github.com/BenoitZugmeyer/eslint-plugin-html
const config = defineConfig({
	plugins: ["html"],
});

export default config;
