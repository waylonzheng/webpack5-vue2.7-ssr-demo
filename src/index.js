const { resolve } = require('../build/util.js')
const express = require('express')
const app = express()
const port = 3000

// 注册模版引擎
app.engine('.html', require('ejs').__express)
app.set('views', resolve('../public')); //设置视图的对应目录
app.set('view engine', 'ejs')

app.use(require('./routes')(app))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})