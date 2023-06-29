
const { createBundleRenderer } = require('vue-server-renderer')
const bundle = require('../../ssr/vue-ssr-server-bundle.json')
const renderer = createBundleRenderer(bundle, { runInNewContext: false })
module.exports = (req, res) => {
    const context = { originalUrl: req.originalUrl };
    renderer.renderToString(context, (err, main) => {
        if (err) {
            return res.status(500).end(JSON.stringify(err));
        }
        res.render('index', {
            title: 'ssr demo',
            main: main
        })
    })
}