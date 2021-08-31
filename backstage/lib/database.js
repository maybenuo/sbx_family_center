const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const operateMongo = require('./operateMongo.js')

// 链接数据库基本信息
const databaseLink = {
  url: 'mongodb://localhost:27017',
  dbName: 'sbx_family_center',

}

// 创建一个数据库客户端
const client = new MongoClient(databaseLink.url, {useNewUrlParser: true})

// 用客户端链接数据库服务并执行操作
client.connect(function(err) {
  assert.equal(null, err)
  console.log("数据库链接成功！")
  const db = client.db(databaseLink.dbName)
  // 获取文档集合
  const collection = db.collection('student_info')

  operateMongo.findDocuments(collection, function(docs) {
    console.log(docs)
    client.close()
  })
})


