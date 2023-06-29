const { resolve } = require('../../build/util')
const { createBundleRenderer } = require('vue-server-renderer')
const bundle = resolve('../ssr/vue-ssr-server-bundle.json')
const renderer = createBundleRenderer(bundle)
module.exports = async (req, res, context) => {
    const main = await renderer.renderToString(context)
    res.render('index.ejs', { main })
}