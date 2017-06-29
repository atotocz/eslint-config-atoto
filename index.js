module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    jasmine: true, // for jasmine.DEFAULT_TIMEOUT_INTERVAL in jest tests
    jest: true,
  },
  extends: ['airbnb'/*, 'plugin:flowtype/recommended'*/, 'prettier'],
  plugins: ['prettier'/* , 'flowtype'*/],
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
  /*settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },*/
};
