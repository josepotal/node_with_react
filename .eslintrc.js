module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-console": 0,
    "no-unused-vars": 1,
    "comma-dangle": 0
  }
};
