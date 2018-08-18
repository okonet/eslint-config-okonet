'use strict'

module.exports = {
  parser: require.resolve('babel-eslint'),
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    commonjs: true
  },
  extends: [
    require.resolve('./index.js'),
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint-config-prettier/react'
  ],
  plugins: ['eslint-plugin-jsx-a11y'],
  rules: {
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
    ]
  }
}
