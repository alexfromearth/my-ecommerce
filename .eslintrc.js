module.exports = {
  "plugins": ["prettier", "@typescript-eslint"],
  "extends": [
    'airbnb',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  "parser": "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    ecmaVersion: 2020,
    project: [`${__dirname}/tsconfig.json`],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  root: true,
  "settings": {
    "import/resolver": {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', __dirname],
      },
    }
  },
  "rules": {
    '@typescript-eslint/await-thenable': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/method-signature-style': [2, 'method'],
    '@typescript-eslint/naming-convention': [
  2,
  {
    selector: 'enumMember',
    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
  },
  {
    selector: 'memberLike',
    format: ['camelCase', 'snake_case'],
    custom: {
      regex: '^(any|number|string|boolean|unknown)$',
      match: false,
    },
    filter: {
      regex: '^UNSAFE_',
      match: false,
    },
    leadingUnderscore: 'allow',
  },
  {
    selector: 'property',
    format: null,
    custom: {
      regex: '^(any|string|boolean|unknown)$',
      match: false,
    },
    leadingUnderscore: 'allow',
  },
  {
    selector: 'typeLike',
    format: ['PascalCase'],
    custom: {
      regex: '^(Number|String|Boolean|Undefined)$',
      match: false,
    },
  },
  {
    selector: 'variable',
    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    custom: {
      regex: '^(any|number|string|boolean|unknown)$',
      match: false,
    },
    filter: {
      regex: '^__.+__$',
      match: false,
    },
  },
],
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/no-shadow': [2],
    '@typescript-eslint/no-unsafe-argument': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unsafe-return': 0,
    '@typescript-eslint/no-unused-expressions': 2,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/restrict-plus-operands': 0,
    '@typescript-eslint/restrict-template-expressions': 0,
    '@typescript-eslint/unbound-method': 0,
    'class-methods-use-this': 0,
    complexity: [2, 30],
    'consistent-return': 0,
    'function-paren-newline': 0,
    'global-require': 0,
    'no-console': [1, { allow: ['warn', 'error'] }],
    'no-continue': 0,
    'no-else-return': [2, { allowElseIf: true }],
    'no-loop-func': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': [
  2,
  {
    props: true,
    ignorePropertyModificationsFor: [
      'acc', // for reduce accumulators
      'accumulator', // for reduce accumulators
      'result', // for reduce accumulators
    ],
    ignorePropertyModificationsForRegex: ['^(.+(Element|Ref))|element|ref$'],
  },
],
    'no-shadow': 0,
    'no-unused-expressions': 0,
    'no-use-before-define': 0,
    'prefer-destructuring': 0,
    'prefer-promise-reject-errors': 0,
    'import/extensions': [
  2,
  'never',
  {
    json: 'always',
    svg: 'always',
  },
],
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': [
  2,
],
    'import/order': [
  'error',
  {
    groups: [
      ['external', 'builtin'],
      'type',
      'internal',
      ['parent', 'sibling', 'index', 'object'],
    ],
    'newlines-between': 'always',
    alphabetize: {
      order: 'asc',
      caseInsensitive: false,
    },
    warnOnUnassignedImports: true,
  },
],
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/default-props-match-prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/function-component-definition': [
  2,
  { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-pascal-case': 2,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-uses-react': 0,
    'react/no-unstable-nested-components': [2, { allowAsProps: true }],
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': [
  2,
  'property assignment',
  {
    contextType: 'static public field',
    contextTypes: 'static public field',
    displayName: 'static public field',
    defaultProps: 'static public field',
  },
],
}
}