/* eslint-disable @typescript-eslint/consistent-type-imports */

type RuleModules = Record<string, import('eslint').Rule.RuleModule>;
interface RuleRecords {
  readonly rules: Readonly<import('eslint').Linter.RulesRecord>;
}

declare module 'eslint-plugin-prettier' {
  const plugin: {
    rules: RuleModules;
    configs: {
      recommended: RuleRecords;
    };
  };
  export default plugin;
}

declare module '@typescript-eslint/eslint-plugin' {
  const plugin: {
    rules: RuleModules;
    configs: {
      all: RuleRecords;
      base: RuleRecords;
      'disable-type-checked': RuleRecords;
      'eslint-recommended': RuleRecords;
      recommended: RuleRecords;
      'recommended-type-checked': RuleRecords;
      strict: RuleRecords;
      'strict-type-checked': RuleRecords;
      stylistic: RuleRecords;
      'stylistic-type-checked': RuleRecords;
    };
  };
  export default plugin;
}

declare module '@cspell/eslint-plugin' {
  const plugin: {
    rules: RuleModules;
    configs: {
      recommended: RuleRecords;
      debug: RuleRecords;
    };
  };
  export default plugin;
}
