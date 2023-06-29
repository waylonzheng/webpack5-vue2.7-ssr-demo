const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.js')
const { resolve } = require('./util');

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: resolve('src/vue/main.js'),
    output: {
        path: resolve('dist'),
        filename: 'index.js',
        chunkFilename: '[id].js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack5-vue2-ssr-demo",
            filename: "index.html",
            template: resolve("public/index.html"),
        }),
    ],
    devServer: {
        hot: true,
        open: false,
        host: 'localhost',
        port: 2513 //'origin'
    }
})