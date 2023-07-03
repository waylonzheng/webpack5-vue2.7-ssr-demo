
const { createBundleRenderer } = require('vue-server-renderer')
const bundle = require('../../dist/server/vue-ssr-server-bundle.json')
const clientManifest = require('../../dist/client/vue-ssr-client-manifest.json')
const renderer = createBundleRenderer(bundle, { runInNewContext: false, clientManifest })
module.exports = (req, res) => {
    const context = { originalUrl: req.originalUrl };
    renderer.renderToString(context, (err, main) => {
        if (err) {
            return res.status(500).end(JSON.stringify(err));
        }
        res.render('index', {
            title: 'ssr demo',
            main,
            context,
        })
    })
}