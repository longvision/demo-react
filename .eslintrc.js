module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'prettier'],
  rules: {
    'react/jsx-no-undef': 0,
    'no-undef': 0,
    'jsx-a11y/alt-text': 'off',
    'operator-linebreak': 0,
    'prettier/prettier': 0,
    'arrow-body-style': 0,
    'react/jsx-filename-extension': 0,
    'no-unused-vars': 'warn',
    'max-len': ['warn', { code: 200 }],
    'no-console': 'off',
    'import/no-unresolved': [2, { commonjs: true }],
    'import/named': 2,
    'consistent-return': 0,
    'import/namespace': 2,
    'import/default': 2,
    'react/no-array-index-key': 0,
    'import/export': 2,
    'no-useless-return': 1,
    'prefer-destructuring': [
      'warn',
      {
        array: false,
        object: false,
      },
      { enforceForRenamedProperties: false },
    ],
    'import/extensions': [
      0,
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'func-names': 'off',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'no-process-exit': 'off',
    'object-shorthand': 2,
    'object-property-newline': 'error',
    'react/jsx-props-no-spreading': 0,
    'object-curly-newline': [
      'warn',
      {
        ObjectExpression: { multiline: true },
        ObjectPattern: {
          multiline: true,
          minProperties: 3,
        },
        ImportDeclaration: 'never',
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      },
    ],
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 0,

    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
  },
};
