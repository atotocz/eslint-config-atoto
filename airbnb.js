module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    jasmine: true, // for jasmine.DEFAULT_TIMEOUT_INTERVAL in jest tests
    jest: true,
  },
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  plugins: ['flowtype'],
  rules: {
    "react/jsx-filename-extension": "off"
  },
};
