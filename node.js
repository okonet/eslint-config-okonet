'use strict'

module.exports = {
  parserOptions: {
    sourceType: 'script'
  },
  env: {
    node: true
  },
  plugins: ['node'],
  extends: ['./index.js', 'plugin:node/recommended'],
  rules: {
    strict: ['error', 'global'],
    'node/exports-style': ['error', 'module.exports']
  }
}
