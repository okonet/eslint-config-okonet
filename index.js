'use strict'

module.exports = {
  parserOptions: {
    ecmaVersion: 2017
  },
  env: {
    es6: true, // This setting enables ES6 syntax automatically
    jest: true
  },
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    'eslint-config-prettier'
  ].map(require.resolve),
  plugins: ['prettier'],
  rules: {
    'padded-blocks': [0, 'never'],
    'id-length': [2, { exceptions: ['b', 'x', 'y', 'i'] }],
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNewExceptions: ['List', 'Map', 'Set']
      }
    ],
    'no-console': 2,
    'no-debugger': 2,
    'guard-for-in': 0,

    // Import
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: [
          '**/webpack*.js',
          '**/*.spec.js',
          '**/*.stories.js',
          '**/.storybook/*',
          'test/*.js',
          'tests/*.js',
          'expect',
          'enzyme',
          'sinon',
          'mocha',
          'chai*'
        ]
      }
    ],

    // Prettier
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        trailingComma: 'none',
        singleQuote: true,
        semi: false,
        jsxBracketSameLine: false,
        bracketSpacing: true
      }
    ]
  }
}
