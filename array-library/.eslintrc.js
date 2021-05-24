module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
      "max-len": [1, 120, 2, {ignoreComments: false}],
      "quotes": ["warn", "double"]
    }
};
