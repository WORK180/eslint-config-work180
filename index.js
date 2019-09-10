module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:jsx-a11y/recommended',
        'prettier'
    ],
    parser: 'babel-eslint',
    plugins: ['react', 'react-hooks', 'import', 'jsx-a11y', 'prettier'],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'no-console': [
            'error',
            {
                allow: ['warn', 'error', 'info']
            }
        ],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'react/prop-types': [
            2,
            {
                skipUndeclared: true
            }
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                printWidth: 140,
                singleQuote: true
            }
        ]
    }
};
