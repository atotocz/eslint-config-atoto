module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    jasmine: true, // for jasmine.DEFAULT_TIMEOUT_INTERVAL in jest tests
    jest: true,
  },
  extends: ['airbnb', 'plugin:flowtype/recommended', 'prettier'],
  plugins: ['flowtype', 'prettier'],
  rules: {
    "react/jsx-filename-extension": "off",
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
