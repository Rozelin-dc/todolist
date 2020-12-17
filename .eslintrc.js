module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/recommended",
        "plugin:@typescript-eslint/recommended",
        "@vue/prettier",
        "@vue/standard",
        "@vue/typescript"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "parser": "@typescript-eslint/parser",
        "ecmaFeatures": {
            "jsx": false
        }
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "prettier/prettier": [
            "error",
            {
              "singleQuote": true,
              "semi": false,
              "tabWidth": 2
            }
        ]
    }
};
