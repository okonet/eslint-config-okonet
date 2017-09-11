'use strict'

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    commonjs: true
  },
  extends: ['./index.js', 'eslint-config-airbnb/rules/react', 'eslint-config-prettier/react'].map(
    require.resolve
  ),
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
