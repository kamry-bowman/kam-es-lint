module.exports = {
  extends: 'eslint:recommended',
  rules: {
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'no-console': 1,
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    "no-unused-vars": ["error", {
      "vars": "all",
      "args": "none",
      "ignoreRestSiblings": true
    }]
  };
