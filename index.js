var mode = process.env.NODE_ENV || "Production";
const version = {
    id: 1,
    code: "0.1.0.0803"
}
var express = require('express');
var db=require('./core/db.js');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

let auth = require("./app/auth");
let user = require("./app/user")

var app = express();
const config = require("./core/load_config");

app.use(logger('dev'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/auth', auth);
app.use('/user', user);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


app.listen(3000, function () {
    if(mode=="dev"){
        console.info(" ** Running in Development mode ** ");
    }
    console.log('Todooo server listening on port 3000');
    console.log('Version: '+version.code);

});
