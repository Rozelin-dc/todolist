module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/prettier',
    '@vue/standard',
    '@vue/typescript'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: false
    }
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        tabWidth: 2
      }
    ],
    'space-before-function-paren': [
      2,
      { anonymous: 'never', named: 'never', asyncArrow: 'always' }
    ],
    'no-unused-vars': 'off'
  }
}
