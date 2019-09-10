# eslint-config-work180

This package provides the ESLint config used by WORK180 as an extensible shared config/

## Usage

1) Install the following peer dependencies:
```
"eslint": "^6.3.0",
"eslint-plugin-import": "^2.18.2",
"eslint-plugin-jsx-a11y": "^6.2.3",
"eslint-plugin-prettier": "^3.1.0",
"eslint-plugin-react": "^7.14.3",
"eslint-plugin-react-hooks": "^2.0.1"
```

2) Install `eslint-config-work180`
```
npm i -D ssh://git@github.com:WORK180/eslint-config-work180.git
```

3) Extend eslint-config-work180 in your `.eslintrc` config
```
{
    "extends": ["eslint-config-work180"]
}
```

## Using with editor plugins
If your editor has an ESLint plugin, you can use it to auto format code using this ESLint config.
The ESLint config uses prettier to format your code. If your editor has a prettier plugin installed, disable it to prevent conflicts.

