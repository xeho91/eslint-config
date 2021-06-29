import { defineConfig } from "eslint-define-config";

// https://github.com/sveltejs/eslint-plugin-svelte3
const config = defineConfig({
	plugins: ["svelte3"],

	overrides: [{
		files: ["*.svelte", "*.svx"],
		processor: "svelte3/svelte3",
	}],

	settings: {
		"svelte3/ignore-styles": () => true,
		"svelte3/typescript": true,
	},
});

export default config;
