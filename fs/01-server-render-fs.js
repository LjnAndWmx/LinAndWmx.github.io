//1.导入http模块
const http = require('http')
const path = require('path')
const fs = require('fs')

//2.创建一个server
const server = http.createServer()

//3.请求，处理，响应
server.on('request',(req,res)=>{
    if(req.url.includes('index')){
        //1.通过path模块，获取文件所在的路径
        // 代表的是 01-server-render-fs.js 所在的文件夹
        const filePath = path.join(__dirname,"index.html")

        console.log(filePath)

        //2.利用fs模块的
        /**
        fs.readFile(filePath,(err,data)=>{
            console.log(data)
            console.log(data.toString())

            res.setHeader("Content-Type","text/html;charset=utf-8")
            res.end(data)
        })
         */
        const data = fs.readFileSync(filePath)
        res.setHeader("Content-Type","text/html;charset=utf-8")
        res.end(data)
    }
})

//4.开启web服务
server.listen(8899,"127.0.0.1",err=>{
    if(err){
        console.log(err)
    }

    console.log("start OK")
})