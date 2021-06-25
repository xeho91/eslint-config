import type { Config } from "../types";

// https://github.com/sveltejs/eslint-plugin-svelte3
const config: Config = {
	plugins: ["svelte3"],

	overrides: [{
		files: ["*.svelte", "*.svx"],
		processor: "svelte3/svelte3",
	}],

	settings: {
		"svelte3/ignore-styles": () => true,
		"svelte3/typescript": require("typescript"),
	},
}

export default config;
