const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
require('babel-register')

module.exports = {
    entry: ['@babel/polyfill', './src/app.js'],
    output: {
        path : path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules : [
            {
                test: /\.js$/,
                exclude : /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './index.html'
        })
    ],
    node: 'development',
    devtool: 'inline-square-map',
    devServer: {
        open: true,
        contentBase: './dist'
    }
}