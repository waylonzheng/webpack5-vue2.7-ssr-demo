const { VueLoaderPlugin } = require('vue-loader')
const { resolve } = require('./util');
module.exports = {
    stats: 'verbose',
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('src'),
        },
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"],
                sideEffects: true, // 有副作用 支持import css 配合Tree Shaking
            },
            {
                test: /\.less$/,
                use: ["vue-style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(svg|gif|png|jpe?g)$/,
                type: "asset/inline",
            },
            {
                test: /\.(otf|ttf|woff2?|eot)$/,
                type: "asset/inline",
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    // optimization: {
    //     usedExports: true,
    // },
};
