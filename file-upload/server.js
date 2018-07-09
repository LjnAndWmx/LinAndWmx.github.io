const http = require('http')
const path = require('path')
const fs = require('fs')
const querystring = require('querystring')
const multiparty = require('multiparty')
const format = require('date-format')
const util = require('util')

// 创建服务器
const server = http.createServer()

// 请求 处理 响应
server.on('request', (req, res) => {
    // 做了请求
    if (req.url.includes('index')) {
        const filepath = path.join(__dirname, 'index.html')
        const htmlBuffer = fs.readFileSync(filepath)

        res.setHeader('Content-Type', 'text/html')
        res.end(htmlBuffer)
    } else if (req.url.includes('postLogin')) {
        //    post请求数据保存
        let body = ''
        req.on('data', chunk => {
            body += chunk
        })
        req.on('end', () => {
            console.log(body)
            const params = querystring.parse(body)
            console.log(params)
        })
        //    响应
        const result = {
            status: 0,
            message: '登入成功'
        }
        res.setHeader('Content-Type', 'application/json;charset=uft-8')
        res.end(JSON.stringify(result))
    } else if (req.url.includes('uploadPage')) {
        // 浏览器输入//http://127.0.0.1:8899/uploadPage.html
        // 找路径
        const filepath = path.join(__dirname, 'uploadPage.html')
        const httpBuffer = fs.readFileSync(filepath)

        // 响应
        res.setHeader('Content-Type', 'text/html')
        res.end(httpBuffer)
    } else if (req.url.includes('upload')) {

        // 获取文件路径
        const dirpath = path.join(__dirname, 'upload')
        const exists = fs.existsSync(dirpath)
        if (!exists) {
            // 创建文件
            const err = fs.mkdirSync(dirpath)
            if (err) {
                console.log(err)
            }
            console.log('mkdir OK')
        }

        // 创建form表单文件对象
        const form = new multiparty.Form({
            uploadDir: dirpath
        })
        // 请求过来有文本框也有文件框
        form.parse(req, function (err, fields, files) {
            console.log(fields)
            console.log(files)

            Object.keys(fields).forEach(function (name) {
                console.log(`${name} is ${fields[name][0]}`)
            })

            Object.keys(files).forEach(function (name) {
                console.log('111111111111111111111')
                console.log(name)
                const file = files[name][0]

                // 获取就的路径
                const oldpath = file.path

                // 新的路径
                const newpath = path.join(__dirname,"upload",`${format('yyyyMMddhhmmssSSS',new Date())}.txt`)
                console.log('aaaaaaaaaa')
                const err = fs.renameSync(oldpath, newpath)
                if (err) {
                    console.log(err)
                }
                console.log('rename ok')
            })
            res.writeHead(200, {
                'content-type': 'text/plain'
            })
            res.write('received upload:\n\n')
            res.end(util.inspect({
                fields:fields,
                files:files
            }))
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