module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 必须使用单引号
    'quotes': ['error', 'single'],
    // 仅在必要的时候使用分号，以 [, (, /, +, - 开头的行
    'semi': ['error', 'never'],
    // 不能使用alert
    'no-alert': 'error',
    // 块之前的空格
    'space-before-blocks'        : ['error', { 'functions': 'always', 'keywords': 'always', 'classes': 'always' }],
    // 方法定义相关的空格
    'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'always', 'asyncArrow': 'always' }],
    // 解决Missing file extension "vue" for "xxxx" (import/extensions)
    'import/extensions': ['error', 'always', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      vue: 'never'
    }]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
