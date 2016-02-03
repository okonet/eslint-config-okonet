module.exports = {
    parser: 'babel-eslint',
    extends: [
        'eslint-config-airbnb/base',
        'eslint-config-airbnb/rules/strict',
        'eslint-config-airbnb/rules/react'
    ].map(require.resolve),
    rules: {
        'semi': [2, 'never'],
        'indent': [2, 4, {
            'SwitchCase': 1
        }],
        'comma-dangle': [2, 'never'],
        'jsx-quotes': [2, 'prefer-double'],
        'padded-blocks': [0, 'never'],
        'id-length': [2, {'exceptions': ['b']}],
        'new-cap': [2, {
            'newIsCap': true,
            'capIsNewExceptions': ['List', 'Map', 'Set']
        }],
        'no-console': 2,
        'no-debugger': 2,
        'guard-for-in': 0,
        'object-curly-spacing': [2, 'always'],

        // React
        'react/jsx-indent-props': [2, 4],

        // flow-vars plugin
        'flow-vars/define-flow-type': 1,
        'flow-vars/use-flow-type': 1
    }
};
