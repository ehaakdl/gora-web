// eslint docs
// https://eslint.org/docs/latest/use/configure/parser

module.exports = {
  env: {
    // 사전 정의된 전역변수 docs
    // https://eslint.org/docs/latest/use/configure/language-options#specifying-environments
    // 명시해줘야 console, debugger 이런거 쓸 수 있음
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  parserOptions: {
    // js 버전지정
    ecmaVersion: '6',
    // typescript parser docs
    // https://typescript-eslint.io/packages/parser/
    parser: '@typescript-eslint/parser',
    // es6에서 사용될 때 사용
    sourceType: 'module',
  },
  ignorePatterns: [],
  rules: {
    'vue/script-indent': ['error', 2, { baseIndent: 0 }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/multi-word-component-names': 'off',
  },
};
