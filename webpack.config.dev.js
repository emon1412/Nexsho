import path from 'path'
import webpack from 'webpack'

export default {
  devtool: 'cheap-module-eval-source-map',
    entry: [
        './client/components/app.js',
        'webpack-hot-middleware/client'
    ],
    module: {
      loaders: [
        {
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        }
      ]
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin ()
    ]
}
