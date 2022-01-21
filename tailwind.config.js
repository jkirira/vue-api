module.exports = {
  purge: {
    enabled: true,
    content: [
        './client/**/*/*.html',
        './client/assets/*/*.css',
        './client/**/*/*.js',
    ]
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
