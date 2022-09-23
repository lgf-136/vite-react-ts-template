module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // 启用 JSX
    },
    ecmaVersion: 12, // or 'latest'
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    // 'no-undef': 'off',
    // 禁止使用 var
    'no-var': 'error',
    semi: 'off',
    // semi: [2, 'always'],
    'no-use-before-define': 'off', // 'React' was used before it was defined
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-shadow': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts', 'js', 'jsx'] }],
    '@typescript-eslint/triple-slash-reference': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
};
