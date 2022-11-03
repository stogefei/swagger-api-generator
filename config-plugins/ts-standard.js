'use strict';

module.exports = {
  plugins: ['@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    parser: require.resolve('@typescript-eslint/parser'),
  },
  rules: {
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
        readonly: 'array-simple',
      },
    ],
    // type 和 interface 都支持
    '@typescript-eslint/consistent-type-definitions': 'off',
    // 不强制函数返回类型有声明
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { accessibility: 'no-public' },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/member-naming': 'off',
    // 暂时不强制定义类型，any暂不处理
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    // 暂时关掉，以后去规范
    '@typescript-eslint/no-namespace': 'off',
    // 非空断言 不禁止
    '@typescript-eslint/no-non-null-assertion': 'off',
    // class constructor 参数属性类型不禁止
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true, // Allow `const { props, state } = this`; false by default
        allowedNames: ['self'], // Allow `const self = this`; `[]` by default
      },
    ],
    '@typescript-eslint/no-type-alias': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: true },
    ],
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    // 过于严格，后续观察
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/triple-slash-reference': [
      'error',
      { path: 'never', types: 'never', lib: 'never' },
    ],
    // '@typescript-eslint/typedef': [
    //   'error',
    //   {
    //     arrayDestructuring: false,
    //     arrowParameter: false,
    //     objectDestructuring: false,
    //     propertyDeclaration: false,
    //     parameter: true,
    //     memberVariableDeclaration: true,
    //     variableDeclaration: true,
    //   },
    // ],
    '@typescript-eslint/unbound-method': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error', { builtinGlobals: false, hoist: 'functions', allow: ['self'] }],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error', { builtinGlobals: true, ignoreDeclarationMerge: true }],
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', {
      functions: false,
      classes: false,
      variables: false,
      typedefs: false,
      enums: false,
    }],
    'max-len': 'off',
  },
};
