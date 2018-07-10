const express = require('express')
const path = require('path')
const xtpl = require('xtpl')
// 创建app
const app = express()
//浏览器请求静态资源
app.use(express.static(path.join(__dirname,'statics')))


app.get('/list.html',(req,res)=>{
    xtpl.renderFile(path.join(__dirname,'list.html'),{
        musics:path.join(__dirname,'musics.json')
    },(err,content)=>{
       res.send(content)
    })
})

// app.get()

app.listen(80, '127.0.0.1', err => {
    if (err) {
        console.log(err)
    }
    console.log('服务器开启成功了')
})