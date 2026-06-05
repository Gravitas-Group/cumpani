module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'next/core-web-vitals'],
  plugins: ['@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
}
