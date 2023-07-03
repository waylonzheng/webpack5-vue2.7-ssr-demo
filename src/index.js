const { resolve } = require('../build/util.js')
const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000

app.use(express.static(resolve('../dist')))
// 注册模版引擎
app.engine('.ejs', ejs.__express)
app.set('views', resolve('../public')); //设置视图的对应目录
app.set('view engine', 'ejs')
// 允许设置代理
app.enable('trust proxy')
app.use(require('./routes')(app))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})