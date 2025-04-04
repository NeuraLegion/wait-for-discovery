module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  ignorePatterns: [
    '**/test{,s}',
    '**/*.spec.ts'
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts']
    },
    'import/resolver': {
      typescript: {}
    }
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'no-public',
          constructors: 'no-public'
        }
      }
    ],
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          // Static fields
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          
          // Instance fields
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          
          // Constructors
          'constructor',
          
          // Methods
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method'
        ]
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid'
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE']
      },
      {
        selector: 'typeLike',
        format: ['PascalCase']
      },
      {
        selector: 'function',
        format: ['PascalCase', 'camelCase']
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case']
      },
      {
        selector: 'method',
        format: ['camelCase', 'PascalCase'],
        modifiers: ['static']
      },
      {
        selector: 'property',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
        leadingUnderscore: 'allow'
      },
      // https://github.com/typescript-eslint/typescript-eslint/issues/1510#issuecomment-580593245
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      }
    ],
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
        ignoreProperties: true
      }
    ],
    '@typescript-eslint/default-param-last': ['error'],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/typedef': [
      'error',
      {
        arrayDestructuring: true,
        arrowParameter: false,
        memberVariableDeclaration: false,
        variableDeclarationIgnoreFunction: true
      }
    ],
    '@typescript-eslint/no-shadow': [
      'error',
      {
        hoist: 'all'
      }
    ],
    'arrow-body-style': 'error',
    'camelcase': 'off',
    'complexity': [
      'error',
      {
        max: 10
      }
    ],
    'eqeqeq': ['error', 'smart'],
    'guard-for-in': 'error',
    'import/no-self-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-duplicates': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true
      }
    ],
    'import/order': [
      'error',
      {
        groups: [
          'index',
          ['sibling', 'parent'],
          'internal',
          'external',
          'builtin'
        ]
      }
    ],
    'max-classes-per-file': ['error', 1],
    'max-depth': [
      'error',
      {
        max: 2
      }
    ],
    'default-param-last': 'off',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-console': 'error',
    'no-eval': 'error',
    'no-restricted-syntax': ['error', 'ForInStatement'],
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: 'return',
        prev: '*'
      }
    ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'radix': 'error'
  },
  overrides: [
    {
      env: {
        mocha: true
      },
      files: ['*.spec.ts'],
      parserOptions: {
        project: ['./tsconfig.spec.json'],
        tsconfigRootDir: __dirname
      },
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: ['**/*.spec.ts'] }
        ],
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'chai',
                importNames: ['should'],
                message: "Please `import 'chai/register-should'` instead"
              }
            ]
          }
        ]
      }
    }
  ]
};
