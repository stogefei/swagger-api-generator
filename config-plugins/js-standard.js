module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    parser: require.resolve('babel-eslint'),
  },

  env: {
    es6: true,
    node: true,
  },
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  extends: [
    'standard',
  ],
  rules: {
    // 允许单独使用get，不允许单独使用set
    'accessor-pairs': 'error',
    camelcase: ['error', { properties: 'never' }],
    // 要求多行的末尾使用逗号
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    // 逗号前不要，后要
    'comma-spacing': ['error', { before: false, after: true }],
    // 逗号在行末尾，不在行前
    'comma-style': ['error', 'last'],
    // 点换行后跟随属性
    'dot-location': ['error', 'property'],
    // 只允许=== 和 !==
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    // generator的*前面有空格，后面没有
    'generator-star-spacing': ['error', { before: true, after: false }],
    // 要对名字为err或error的参数做异常处理
    'handle-callback-err': ['error', '^(err|error)$'],
    // 基于冒号两端对齐，冒号后有空格
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
    }],
    // 类的成员之间有一行空行
    'lines-between-class-members': ['error', 'always'],
    'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true }],
    // 禁止
    'no-async-promise-executor': 'error',
    // 允许在 case 或 default 子句中出现词法声明
    'no-case-declarations': 'off',
    // 禁止条件判断使用常量，但循环语句除外
    'no-constant-condition': ['error', { checkLoops: false }],
    // 不允许直接调用eval，可以间接调用
    'no-eval': ['error', { allowIndirect: true }],
    // 禁止函数表达式两边的括号，其他的都允许
    // 'no-extra-parens': ['error', 'functions'],
    // 禁止在块级作用域内生命变量和函数
    'no-inner-declarations': ['error', 'both'],
    // 'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
    // 禁止多个空格，对象属性除外，防止与key-spacing冲突
    'no-multi-spaces': ['error', { exceptions: { Property: true } }],
    // 禁止重复声明，禁止复写全局变量
    'no-redeclare': ['error', { builtinGlobals: true }],
    // 禁止无意义的三元运算符，禁止exp ? exp : value的格式
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    // 禁止未使用过的变量，函数内只检查最后一个使用之后的参数
    'no-unused-vars': ['error', { vars: 'all', args: 'none', ignoreRestSiblings: true }],
    // todo
    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true, consistent: true },
      ObjectPattern: { multiline: true, minProperties: 4 },
      ImportDeclaration: { multiline: true, minProperties: 4 },
      ExportDeclaration: 'always',
    }],
    'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
    // 要求Promise reject 传入一个Error对象作为参数
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: false }],
    // 要求行尾有分号
    semi: ['error', 'always'],
    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }],
    'linebreak-style': ['error', 'unix'],
    'no-shadow': ['error', { builtinGlobals: false, hoist: 'functions', allow: ['self'] }],
    'no-underscore-dangle': 'off',
    'no-param-reassign': ['error', { props: false }],
    'max-len': 'off',
  },
};
