const express = require('express')
const compression = require('compression')
const app = express()

// 静态资源压缩
app.use(compression())
app.use(express.static('./dist'))

// 监听端口
app.listen(3000,() => console.log('http had run at port 3000'))