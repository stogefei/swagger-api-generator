// https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 描述长度
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', [
      'lower-case', // default
      'upper-case', // UPPERCASE
      'camel-case', // camelCase
      'kebab-case', // kebab-case
      'pascal-case', // PascalCase
      'sentence-case', // Sentence case
      'snake-case', // snake_case
      'start-case', // Start Case
    ]],

    'subject-case': [0], // 不对描述进行判断
    // 'subject-case': [2, 'always', [
    //   'lower-case', // default
    //   'upper-case', // UPPERCASE
    //   'camel-case', // camelCase
    //   'kebab-case', // kebab-case
    //   'pascal-case', // PascalCase
    //   'sentence-case', // Sentence case
    //   'snake-case', // snake_case
    //   'start-case', // Start Case
    // ]],

    'type-case': [2, 'always', [
      'lower-case', // default
      'upper-case', // UPPERCASE
    ]],

    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'improvement',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'WIP',
      ],
    ],
  },
};
