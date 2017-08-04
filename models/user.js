/*
 *
 * User Model
 * 
 *
 *
*/
let mongoose = require('mongoose');
let Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var userSchema = Schema({
    uid: {type:String, default:''},
    username: {type:String, default:''},
    password: {type:String, default:''},
    mail: {type:String, default:''},
});

var userItem = mongoose.model("user",userSchema);

module.exports = {
    userItem: userItem,
    userSchema: userSchema
};
