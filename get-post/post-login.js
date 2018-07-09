const http=require('http')
const url = require('url')
const querystring = require('querystring')

const server = http.createServer()

server.on('request',(req,res)=>{
    const result = {
        status:0,
        message:'登陆成功'
    }
    // console.log(req)
    // console.log(req.url)
    if(req.url.includes('login')){
        const urlString = req.url
        const urlObj = url.parse(urlString)
        let body = ''
        // data事件，客户端传递几次数据它就会调用几次,每次请求过来自动加起来
        req.on('data',chunk=>{
            console.log(chunk)
            body+=chunk
        })
        req.on('end',()=>{
            const params = querystring.parse(body)
            console.log(params)
        })
       
    }
   res.setHeader('Content-Type','application/json;chartset=utf-8')
//    不能响应对象，只能响应字符串
   res.end('result')
})

server.listen(80,'127.0.0.1',err=>{
    if(err){
        console.log(err)
    }
    console.log('开启服务器')
})