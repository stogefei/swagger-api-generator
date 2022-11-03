module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: require.resolve('vue-eslint-parser'),
  plugins: ['vue'],
  extends: ['plugin:vue/recommended'],
  rules: {
    // vue 属性值用驼峰写法，几个html原声属性除外
    'vue/attribute-hyphenation': [
      'error',
      'never',
      {
        ignore: ['data-', 'aria-', 'slot-scope'],
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/no-multi-spaces': [
      'error',
      {
        ignoreProperties: true,
      },
    ],
    'vue/require-default-prop': 'off',
    'vue/attributes-order': [
      'error',
      {
        order: [
          'GLOBAL',
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'CONTENT',
          'EVENTS',
        ],
      },
    ],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'fetch',
          'asyncData',
          'data',
          'computed',
          'watch',
          'LIFECYCLE_HOOKS',
          'methods',
          'head',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],
    'vue/this-in-template': ['error', 'never'],
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/eqeqeq': 'error',
    'vue/key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'vue/require-component-is': 'off',
    'vue/object-curly-spacing': 'error',
    'vue/require-direct-export': 'off',
    'vue/space-infix-ops': 'error',
    'vue/v-on-function-call': ['error', 'never'],
    'max-len': 'off',
  },
};
