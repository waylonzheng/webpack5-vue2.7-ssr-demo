const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.js')
const { resolve } = require('./util');

/**
 *
 * @param {*}
 * @returns
 */
module.exports = () => merge(baseConfig, {
    mode: 'production',
    entry: resolve('../src/vue/main.js'),
    output: {
        path: resolve('../dist'),
        filename: 'index.js',
        chunkFilename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack5-vue2-ssr-demo",
            filename: "index.html",
            template: resolve("public/index.html"),
        }),
    ],
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': resolve('../src')
        },
        modules: ['node_modules']
    },

});