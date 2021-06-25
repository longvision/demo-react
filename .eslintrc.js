module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'prettier'],
  rules: {
    'react/jsx-no-undef': 0,
    'operator-linebreak': 0,
    'prettier/prettier': 0,
    'arrow-body-style': 0,
    'react/jsx-filename-extension': 0,
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'import/no-unresolved': [
      2,
      {
        commonjs: true,
      },
    ],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
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
    'object-shorthand': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: {
          multiline: true,
        },
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
