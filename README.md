# ESLint configuration

**Extendable** [ESLint] configuration, which load plugins on conditions.
If the project has:

- `@types/node` as dependency, then it will load [`node`] plugin
- `svelte` as dependency, then it will load [`svelte3`] plugin
- `typescript` as dependency, then it will load [`typescript`] plugin
- `react` as dependency, then it will load [`react`](s) plugin

[`node`]: https://github.com/mysticatea/eslint-plugin-node
[`svelte3`]: https://github.com/sveltejs/eslint-plugin-svelte3
[`typescript`]: https://github.com/typescript-eslint/typescript-eslint
[`react`]: https://github.com/yannickcr/eslint-plugin-react

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
	extends: ["@xeho91/eslint-config"],
};
```

[ESLint]: https://github.com/eslint/eslint
[ESLint configuration file]: https://eslint.org/docs/user-guide/configuring/configuration-files
