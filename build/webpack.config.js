const webpack = require('webpack');

const { NODE_ENV } = process.env;
let requirePath = `./webpack.${NODE_ENV}`;
const webpackConfig = require(requirePath);

webpack(webpackConfig(), (err, stats) => {
    if (err) throw err;
    process.stdout.write(
        `${stats.toString({
            colors: true,
            modules: false,
            children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
            chunks: false,
            chunkModules: false
        })}\n\n`
    );

    if (stats.hasErrors()) {
        process.exit(1);
    }
});