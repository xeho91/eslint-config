# ESLint configuration

**Extendable** [ESLint] configurations, which load plugins on conditions. If the
project has:

- `svelte` as dependency, then it will load [`svelte3`] plugin
- `typescript` as dependency, then it will load [`typescript`] plugin

[`svelte3`]: https://github.com/sveltejs/eslint-plugin-svelte3
[`typescript`]: https://github.com/typescript-eslint/typescript-eslint

## Usage

1. Install it firstly with the Node.JS package manager of your choice.\
   Example:

```sh
pnpm install --save-dev eslint @xeho91/eslint-config
```

2. Create a **[ESLint configuration file]**, and extend this project configuration.\
   Example:

```js
// .eslintrc.js

module.exports = {
	extends: ["@xeho91-config"],
};
```

[ESLint]: https://github.com/eslint/eslint
[ESLint configuration file]: https://eslint.org/docs/user-guide/configuring/configuration-files
