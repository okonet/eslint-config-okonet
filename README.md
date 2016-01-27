# eslint-config-wildbit
Wildbit-specific config for ESLint

## Installation

1. `npm install --save-dev eslint eslint-plugin-react wildbit/eslint-config-wildbit`
2. Add following block to `package.json`

```json
"eslintConfig": {
    "extends": [
      "eslint-config-wildbit"
    ]
  }
```

## Adding a pre-commit hook

Linting makes more sense when running before committing the code.

To add a pre-commit task:

1. `npm install -D pre-commit lint-staged`
2. Add `"eslint-staged": "eslint-staged"` to `scripts` section of `package.json`
3. Add `"pre-commit": [ "eslint-staged" ]` to `package.json`
