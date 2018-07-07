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
        // const pathName = 
        console.log(urlObj)
        const pathName = urlObj.pathname
        const query = urlObj.query
        const params = querystring.parse(query)
        console.log(params)
    }
   res.setHeader('Content-Type','application/json;chartset=utf-8')
  res.end('result')
})

server.listen(80,'127.0.0.1',err=>{
    if(err){
        console.log(err)
    }
    console.log('开启服务器')
})