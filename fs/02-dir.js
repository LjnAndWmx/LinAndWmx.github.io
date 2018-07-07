const path = require('path')
const fs = require('fs')

//准备好文件夹的路径
const dirPath = path.join(__dirname,'abc')
const newDirPath = path.join(__dirname,'cba')

//创建文件夹
// fs.mkdir(dirPath,err=>{
//     if(err){
//         console.log(err)
//     }

//     console.log('create OK')
// })

//重命名
// fs.rename(dirPath,newDirPath,err=>{
//     if(err){
//         console.log(err)
//     }

//     console.log('rename OK')
// })

// 判断是否存在
// fs.exists(newDirPath,exists=>{
//     console.log(exists)
// })

//干掉
// fs.rmdir(newDirPath,err=>{
//     if(err){
//         console.log(err)
//     }

//     console.log('rm OK')
// })