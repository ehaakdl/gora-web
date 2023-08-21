require("@rushstack/eslint-patch/modern-module-resolution")


module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript'
  ],
  rules: {
    "vue/script-indent": ["error", 2, { "baseIndent": 0 }],
    "no-console": process.env.NODE_ENV === 'production' ? 'error' : "warn",
    "no-debugger": process.env.NODE_ENV === 'production' ? 'error' : "warn",
    'vue/multi-word-component-names': 'off'
  }
}