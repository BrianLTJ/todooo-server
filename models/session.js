/*
 * Session storage
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var config = require('../core/load_config');
var sessionSchema = new Schema({
    sid: {type: String, default:""},
    uid: {type: String,default:""},
    createTime: {type: Date, default:Date.now,expires:config.token_exp_time}
});
module.exports = mongoose.model("Session",sessionSchema);
