/*
 *
 * Todooo item Model
 *
*/

let mongoose = require('mongoose');
let Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

let subTodoSchema = new Schema({
    title: {type: String, default: ""},
    done: {type:Boolean, default:false},
    hash: {type: String, default: ""}
});

let subTodoItem = mongoose.model("Subtodo",subTodoSchema);

let todoSchema = new Schema({
    title: { type: String, default: ''},
    done: { type: Boolean, default: false},
    due: {type: Date, default: null},
    subTodo: [ObjectId],
    text: {
        type: {type: String, default: 'text'},
        text: {type: String, default: ''}
        },
    // reminder: [{type:Number}],
    box: [ObjectId],
    tag: [ObjectId],
    createTime: {type: Date, default: Date.now },
    updateTime: {type: Date, default: Date.now },
    hash: {type: String, default: ""}
});

let todoItem = mongoose.model("Todo",todoSchema);

module.exports = {
    subTodoItem: subTodoSchema,
    todoItem: todoSchema
};

