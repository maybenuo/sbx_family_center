const assert = require('assert')

// 查询文档
function findDocuments (collection, callback, querySyn = {}) {
    // 根据查询语法寻找对应文档
    collection.find(querySyn).toArray(function(err, docs) {
      assert.equal(err, null)
      console.log("文档查询成功！")
      callback(docs)
    })
}

// 插入文档
function insertDocuments () {

}

// 更新文档
function updateDocuments () {

}

// 删除文档
function deleteDocument () {

}

exports.findDocuments = findDocuments
exports.insertDocuments = insertDocuments
exports.updateDocuments = updateDocuments
exports.deleteDocument = deleteDocument


