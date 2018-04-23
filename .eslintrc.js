module.exports = {
  extends: 'airbnb',
  plugins: ['prettier'],
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      { components: ['Link'], specialLink: ['to'] },
    ],
    'import/extensions': ['ignorePackages'],
    'no-debugger': ['warn'],
    'prettier/prettier': 'error',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['', '.js', '.jsx'],
            root: __dirname,
          },
        },
      },
    },
  },
};
