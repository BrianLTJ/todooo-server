/*
* Auth
*
* URI: /auth
*
 */

var express = require('express');
var router = express.Router();
var auth = require('../core/auth');
var User = require('../models/user').userItem;

/* GET users listing. */
router.get('auth', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
    console.log("Login handler");
    User.find({mail:req.body.mail},function (err, user) {
        let result = false;
        if(err) {result = false;}
        if(user.length==1){
            result = auth.checkPSW(user[0].password,req.body.password);
        }else {
            result = false;
        }
        if(result){
            res.jsonp({
                result:"ok"
            });
        }else{
            res.jsonp({
                result:"error"
            });
        }

    });
});


module.exports = router;