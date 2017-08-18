var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path')

module.exports = {
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "/dist"),
    filename: "bundle.min.js"
  },
  module: {
  rules: [
    { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
  ],
  loaders: [
    { test: /\.css$/, loader: 'style-loader!css-loader' },
  ],
},
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
