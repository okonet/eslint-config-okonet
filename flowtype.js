'use strict'

module.exports = {
  parser: require.resolve('babel-eslint'),
  plugins: ['flowtype'],
  extends: [
    'eslint-plugin-flowtype/dist/configs/recommended',
    'eslint-config-prettier/flowtype'
  ].map(require.resolve)
}
