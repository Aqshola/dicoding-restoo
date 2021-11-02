const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    useLocalIp: true,
    open: true,
    contentBase: path.resolve(__dirname, 'dist'),
  },
})
