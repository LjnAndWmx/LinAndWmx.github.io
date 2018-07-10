// 1.导入express框架
const express = require('express')
const bodyParser = require('body-parser')


// 2.创建app
const app = express()

// parse application/x-www-form-urlencoded  普通文件post请求
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
// app.use(bodyParser.json())

// 3.请求 处理 响应

app.get('/getlogin',(req,res)=>{
    res.status(200).json({message:'get请求成功'})
})
app.post('/login',(req,res)=>{
    // 获取post请求数据过来
    console.log(req.body)
    res.status(200).json({message:'post请求成功'})
})

// 4.开启
app.listen(3000,'127.0.0.1',err=>{
    if(err){
        console.log(err)
    }
    console.log('app服务器开启了')
})
