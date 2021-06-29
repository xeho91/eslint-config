import { defineConfig } from "eslint-define-config";

// https://github.com/Rantanen/eslint-plugin-xss
const config = defineConfig({
	plugins: ["xss"],
});

export default config;
