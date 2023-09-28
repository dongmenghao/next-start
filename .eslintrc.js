module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        'plugin:import/typescript',
        "plugin:react/recommended",
        'prettier:react'
    ],
    "settings": {
      'import/resolver': {
        node: {
          extensions: ['.tsx', '.ts', '.js', '.json'],
        },
        alias: [['src', './src']],
      },
    },
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaFeatures": {
        jsx: true,
      },
      "ecmaVersion": 12,
      "sourceType": 'module',
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        'react-hooks',
        'unicorn',
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
}
