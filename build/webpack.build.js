const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const base = require('./webpack.base')
const config = require('../config')
const utils = require('./utils')

module.exports = merge(base, {
    output: {
        filename: utils.assetsPath('scripts/[name].[chunkhash:7].js'),
        path: config.build.assetsRoot,
        chunkFilename: utils.assetsPath('scripts/[id].[chunkhash:7].js')
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                'style-loader',
                config.build.productionSourceMap ? 'css-loader?sourceMap' : 'css-loader'
            )
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'style-loader',
                config.build.productionSourceMap ? 'css-loader?sourceMap!sass-loader?sourceMap' : 'css-loader!sass-loader'
            )
        }]
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    stats: {
        children: false
    },
    plugins: [
        new CleanWebpackPlugin([config.build.assetsRoot], {
            root: process.cwd()
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin(
            'vendor',
            utils.assetsPath('scripts/[name].[chunkhash:7].js')
        ),
        new ExtractTextPlugin(utils.assetsPath('styles/[name].[contenthash:7].css')),
        new HtmlWebpackPlugin({
            filename: config.build.index,
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        })
    ]
})