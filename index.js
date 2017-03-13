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
    'eslint-plugin-flowtype/dist/configs/recommended'
  ].map(require.resolve),
  plugins: [
    'flowtype'
  ],
  rules: {
    semi: [2, 'never'],
    indent: [2, 2, {
      SwitchCase: 1
    }],
    'comma-dangle': [2, 'never'],
    'jsx-quotes': [2, 'prefer-double'],
    'padded-blocks': [0, 'never'],
    'id-length': [2, { exceptions: ['b'] }],
    'new-cap': [2, {
      newIsCap: true,
      capIsNewExceptions: ['List', 'Map', 'Set']
    }],
    'no-console': 2,
    'no-debugger': 2,
    'guard-for-in': 0,
    'object-curly-spacing': [2, 'always'],
    'template-curly-spacing': [2, 'always'],

    // React
    'react/jsx-indent-props': [2, 2],
    'react/sort-comp': [2, {
      order: [
        'flow-types',
        'static-methods',
        'lifecycle',
        'everything-else',
        'render'
      ],
      groups: {
        'flow-types': [
          'props',
          'state'
        ]
      }
    }],

    // Import
    'import/no-extraneous-dependencies': [2, {
      devDependencies: [
        '**/webpack*.js',
        '**/*.spec.js',
        '**/*.stories.js',
        '**/.storybook/*',
        '*enzyme*',
        '*sinon*',
        '*mocha*',
        '*chai*'
      ]
    }]
  }
}
