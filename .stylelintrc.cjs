module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-tailwindcss',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'selector-pseudo-element-colon-notation': 'double',
    'order/order': ['custom-properties', 'declarations'],
  },
  ignoreFiles: ['**/node_modules/**'],
}
