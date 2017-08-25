module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    commonjs: true,
    mocha: true,
    jest: true
  },
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict',
    'eslint-config-airbnb/rules/react',
    'eslint-plugin-flowtype/dist/configs/recommended',
    'eslint-config-prettier',
    'eslint-config-prettier/flowtype',
    'eslint-config-prettier/react'
  ].map(require.resolve),
  plugins: ['flowtype', 'prettier'],
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

    // React
    'react/jsx-filename-extension': 0,
    'react/sort-comp': [
      2,
      {
        order: ['flow-types', 'static-methods', 'lifecycle', 'everything-else', 'render'],
        groups: {
          'flow-types': ['props', 'state']
        }
      }
    ],

    // Import
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: [
          '**/webpack*.js',
          '**/*.spec.js',
          '**/*.stories.js',
          '**/.storybook/*',
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
