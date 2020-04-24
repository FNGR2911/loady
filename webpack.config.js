const path = require('path')

module.exports = {
  entry: './src/loady.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    filename: 'loady.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
