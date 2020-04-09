var low = require('lowdb');//low db
var FileSync = require('lowdb/adapters/FileSync');

var adapter = new FileSync('db.json');
var db = low(adapter);
db.defaults({ users: [] })
  .write();
  module.exports = db;