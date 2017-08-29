const path = require('path');

export default () => ({
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  node: {
    fs: 'empty'
  }
})
