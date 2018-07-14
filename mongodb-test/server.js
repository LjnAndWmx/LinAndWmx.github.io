const MongoClient = require('mongodb').MongoClient;
// 断言：只在开发阶段使用
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'mydatabase';
 
// Use connect method to connect to the server
MongoClient.connect(url,{useNewUrlParser: true},function(err, client) {
    // 判断是否相等，第一个参数事先假定的条件，第二个参数真实链接时的返回，假如有错误 null
  assert.equal(null, err);
  console.log("Connected successfully to server");
  //   db对象
  const db = client.db(dbName);
  
  //   插入数据  添加文档名称
  const collection = db.collection('foodInfo');
    
 // Insert some documents  插入多条
//  collection.insertMany([
//     {foodName : '红烧肉',price:10},{foodName : '红烧肉01',price:100},{foodName : '红烧肉02',price:1000}
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     if(err){
//         console.log(err)
//     }
//     console.log(result)
//     client.close();
//   });

 // Insert one document  插入一条
//  collection.insertOne({foodName : '红烧肉好好吃',price:200}
//   , function(err, result) {
//     assert.equal(err, null);
//     if(err){
//         console.log(err)
//     }
//     console.log(result)
//     client.close();
//   });

 // Update document where a is 2, set b equal to 1
//  collection.updateOne({foodName : '红烧肉',price:10}
//     , { $set: { foodName : '红烧肉',price:999 } }, function(err, result) {
//     assert.equal(err, null);
//     assert.equal(1, result.result.n);
//     console.log("Updated the document with the field a equal to 2");
//     console.log(result);
//     client.close();
//   });  

// Delete document where a is 3 删除一条文档
// collection.deleteOne({ foodName : '红烧肉',price:10 }, function(err, result) {
//     assert.equal(err, null);
//     assert.equal(1, result.result.n);
//     console.log("Removed the document with the field a equal to 3");
//     console.log(result);
//     client.close();
//   });    

// 删除多条文档
collection.deleteMany({ foodName : '红烧肉02',price:1000 },function(err, result) {
    assert.equal(err, null);

    console.log(result);
    client.close();
  });  


// Find some documents
// collection.find({}).toArray(function(err, docs) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(docs)
//   });

   //当操作完毕之后，断开与mongodb服务端的链接
//    client.close();
});