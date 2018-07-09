const http = require('http')
const path = require('path')
const fs = require('fs')
const xtpl = require('xtpl')



// 创建服务器
const server = http.createServer()

// 请求 处理 响应
server.on('request', (req, res) => {
    if(req.url.includes('index')){
        // 读取文件  必须获取文件路径
        const htmlBuffer = fs.readFileSync(path.join(__dirname,'index.html'))

        // 加载数据
        const datas = require(path.join(__dirname,'datas.json'))
        xtpl.renderFile(path.join(__dirname,'index.html'),{
            datas
        },function(error,content){
             console.log(content)
             
             res.setHeader('Content-Type','text/html;charset=utf-8')
             res.end(content)
        });
    }else if(req.url.includes('site')){
       fs.readFile(path.join(__dirname,'site.css'),(err,data)=>{          
           res.setHeader('Content-Type','text/css;charset=utf-8')
           res.end(data)
       })
    }
})

// 开启服务器
server.listen(80, '127.0.0.1', err => {
    if (err) {
        console.log(err)
    }
    console.log('服务器开启')
})