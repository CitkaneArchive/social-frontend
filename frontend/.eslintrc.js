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
        'indent': ['error', 4],
        'comma-dangle': ['error', 'never']
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    settings: {
        "import/core-modules": [
            "config-alias"
          ]        
    }
};
