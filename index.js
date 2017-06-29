module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "all",
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 2
      }
    ],
  },
};
