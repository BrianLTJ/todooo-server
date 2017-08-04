/*
 *
 * Box Model
 *
 *
 *
*/
let mongoose = require('mongoose');
let Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var boxSchema = new Schema({
    title: {type:String, default: 'Box'},
    color: {type:String, default:''},
    createTime: {type:String, default:Date.now},
    todoItem: [ObjectId],
    updateTime: {type:String, default:Date.now},
    hash: {type:String, default:''}
});


module.exports = {
    boxSchema : boxSchema
};
