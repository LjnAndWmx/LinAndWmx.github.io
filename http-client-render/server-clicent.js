const http = require('http')

const server = http.createServer()
// 服务端--浏览器
server.on('request',(req,res)=>{
    // const result = {
    //     status:0,
    //     message:'请求成功'
    // }
    const html=`
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>我是一个页面</title>
            <style>
                div{
                    background-color: skyblue;
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                }
            </style>
        </head>
        <body>
            <div>我是一个div</div>
            <h1>我是H1</h1>
            <img src="http://img3.imgtn.bdimg.com/it/u=3339896364,3048947893&fm=27&gp=0.jpg">
        </body>
    </html>
    `
    // res.setHeader('Content-Type','application/json;chartset=utf-8')
    res.writeHeader(200,{
        'Content-Type':'text/html;chartset=utf-8'
    })
    res.end(html)
})

// 开启http服务器监听链接
server.listen(80,'127.0.0.1',err=>{
    if(err){
        console.log(err)
    }
    console.log('开启服务器')
})