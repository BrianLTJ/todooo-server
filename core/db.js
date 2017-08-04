/*
*
* MongoDB Connection
* Author: Brian Lee
*
*/
const config = require("./load_config");

var mongoose = require('mongoose');

mongoose.connect(config.db.mongo_url,{useMongoClient:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("DB connected")
});
db.on('close',function() {console.log("DB connection closed")});
module.exports = db;
