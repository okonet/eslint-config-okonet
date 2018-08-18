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
    './index.js',
    'eslint-plugin-react/recommended',
    'eslint-plugin-jsx-a11y/recommended',
    'eslint-config-prettier/react'
  ].map(require.resolve),
  plugins: ['eslint-plugin-jsx-a11y'].map(require.resolve),
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
