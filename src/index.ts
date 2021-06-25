/* eslint-disable unicorn/prefer-module, @typescript-eslint/no-var-requires */
import merge from "deepmerge";

function hasModule(name: string) {
	try {
		/* eslint-disable-next-line unicorn/prefer-module */
		require.resolve(name);
		return true;
	} catch {
		return false;
	}
}

const configurations = [
	require("./global").default,
	require("./eslint").default,
	require("./plugins/compat").default,
	require("./plugins/html").default,
	require("./plugins/markdown").default,
	hasModule("@types/node") && require("./plugins/node").default,
	require("./plugins/promise").default,
	require("./plugins/regexp").default,
	require("./plugins/security").default,
	hasModule("svelte") && require("./plugins/svelte3").default,
	hasModule("typescript") && require("./plugins/typescript").default,
	require("./plugins/unicorn").default,
].filter(Boolean);

const config = merge.all(configurations);

/* eslint-disable-next-line unicorn/prefer-module */
module.exports = config;
