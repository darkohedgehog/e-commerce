module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
  },
  /* rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto'}],
  } for windows eslint error */
}
