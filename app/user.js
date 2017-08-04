var express = require('express');
// var db = require('../core/db');
var router = express.Router();
var genUUIDv4 = require('../core/uuid');
var User = require('../models/user').userItem;
var auth = require('../core/auth');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/register', function (req, res, next) {
    let uuid = genUUIDv4();
    let username = req.body.username || "";
    let password = req.body.password || "";
    let mail = req.body.mail || "";
    if(username.length>0&&password.length>0&&mail.length>0){
        User.find({mail:mail},function (err, docs) {
            if(docs.length>0){
                res.send({result:"error",message:"User already exists."});
            }else{
                let newUser = new User({username:req.body.username,password:auth.wrapPSW(req.body.password),uid:uuid,mail:req.body.mail});
                newUser.save(function (err, newUser, numAffected) {
                    if (err) {
                        console.log('Saving Data: ERROR');
                    }else {
                        console.log(newUser);
                        res.jsonp({result: "ok"});
                    }
                });
            }
        });
    }else {
        res.jsonp({result:"error"});
    }

});

module.exports = router;
