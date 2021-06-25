import type { Linter } from "eslint";
import type { ESLintRules } from "eslint/rules";

export interface Config {
	parser?: Linter.config["parser"];
	extends?: Linter.Config["extends"];
	rules?: Partial<ESLintRules>;
	plugins?: Linter.Config["plugins"];
	settings?: Linter.Config["settings"];
	overrides?: Linter.Config["overrides"];
}
