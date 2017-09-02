import express from 'express'
import path from 'path'
import webpack from 'webpack'
import webpackConfig from '../webpack.config.dev.js'

const port = 8000
const app = express()
const compiler = webpack(webpackConfig)

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(port, () => console.log('App is running on localhost:8000'))
