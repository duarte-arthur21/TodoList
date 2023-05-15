module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"es6":true,

	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"overrides": [
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"react/prop-types": 0,
		"no-unused-vars": 1
	}
};
