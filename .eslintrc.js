module.exports = {
    // "eslint-disable":{
    //     "no-unused-vars":false,
    //     "no-undef":false
    // },
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    overrides: [
      {
        env: {
          node: true,
        },
        files: ['.eslintrc.{js,cjs}'],
        parserOptions: {
          sourceType: 'script',
        },
      },
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
      // "no-unused-vars":"of"
    },
  }
  
