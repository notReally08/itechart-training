module.exports = {
    "env": {
      "browser": true,
      "es2021": true,
      "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "max-len": [1, 120, 2, {ignoreComments: false}],
        "quotes": ["warn", "double"],
        "react/prop-types": "off"
    },
    "settings": {
        "react": {
            "createClass": "createReactClass",
            "pragma": "React",
            "fragment": "Fragment",
            "version": "detect",
            "flowVersion": "0.53"
        },
        "propWrapperFunctions": [
            "forbidExtraProps",
            {"property": "freeze", "object": "Object"},
            {"property": "myFavoriteWrapper"}
        ],
        "componentWrapperFunctions": [
            "observer",
            {"property": "styled"},
            {"property": "observer", "object": "Mobx"},
            {"property": "observer", "object": "<pragma>"}
        ],
        "linkComponents": [
            "Hyperlink",
            {"name": "Link", "linkAttribute": "to"}
        ]
    }
};
