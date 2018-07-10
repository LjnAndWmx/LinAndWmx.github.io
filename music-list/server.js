const express = require('express')
const path = require('path')
const xtpl = require('xtpl')
const querystring = require('querystring')
const fs = require('fs')
// 创建app
const app = express()
//浏览器请求静态资源
app.use(express.static(path.join(__dirname,'statics')))

// 文件中存在文字或其他特殊字符



app.get('/list.html',(req,res)=>{
    xtpl.renderFile(path.join(__dirname,'list.html'),{
        // 获取json数据路径，并把它读出来，切记require
        musics:require(path.join(__dirname,'musics.json'))
    },(err,content)=>{
        if(err){
            console.log(err)
        }
       res.send(content)
    })
})

app.get('/site.css',(req,res)=>{
    res.status(200).json({message:'样式添加成功'})
})


app.get('/juqery.min.js',(req,res)=>{
    res.status(200).json({message:'样式添加成功'})
})

// querystring.unescape()
app.get('/musics',(req,res)=>{
    // console.log(req)
    const url = querystring.unescape(req.url)
    console.log(url)
    // fs.readFile(path.join(__dirname,url),(err,data)=>{
    //     res.setHeader("Content-Type","audio/mpeg;charset=utf-8")
    //     res.send(data)
    // })
    res.status(200).json({message:'样式添加成功'})
})

app.listen(80, '127.0.0.1', err => {
    if (err) {
        console.log(err)
    }
    console.log('服务器开启成功了')
})