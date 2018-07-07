const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname,"abc.txt")

//1.覆盖写入
// fs.writeFile(filePath,'但是我们不合适!',err=>{
//     if(err){
//         console.log(err)
//     }

//     console.log('write OK')
// })

//2.覆盖写入
// fs.appendFile(filePath,'没有万一!',err=>{
//     if(err){
//         console.log(err)
//     }

//     console.log('write OK')
// })

//3.删除
fs.unlink(filePath,err=>{
    if(err){
        console.log(err)
    }

    console.log('delete OK')
})