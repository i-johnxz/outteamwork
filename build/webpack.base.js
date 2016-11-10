const path = require('path')
const webpack = require('webpack')

const config = require('../config')
const utils = require('./utils')

module.exports = {
  entry: {
    app: [
      './src/index.jsx'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath
  },
  module: {
    preLoaders: [{
      test: /\.jsx$/,
      include: config.src,
      loader: 'eslint'
    }],
    loaders: [{
      test: /\.jsx$/,
      include: config.src,
      loader: 'babel'
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: utils.assetsPath('images/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    }]
  },
  resolve: {
    root: config.src,
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
  ]
}
