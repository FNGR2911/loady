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
  mode: 'production',
  output: {
    filename: 'loady.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'loady',
    libraryTarget: 'umd',
  },
}
