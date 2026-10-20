const path = require('path')
const webpackMerge = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')

module.exports = webpackMerge(
    commonConfiguration,
    {
        mode: 'development',
        devServer:
        {
            static: path.resolve(__dirname, '../dist'),
            open: true
        }
    }
)
