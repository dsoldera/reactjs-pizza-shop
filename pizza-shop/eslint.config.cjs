const { FlatCompat } = require('@eslint/eslintrc')
const compat = new FlatCompat()

module.exports = [
  ...compat.config({
    extends: ['@rocketseat/eslint-config/react'],
    plugins: ['simple-import-sort', 'tailwindcss'],
    rules: {
      'simple-import-sort/imports': 'error',
      'tailwindcss/classnames-order': 'warn',
    },
  }),
]
