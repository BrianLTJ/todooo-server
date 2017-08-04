/*
 * Json Web Token Module
 *
 */

const config = require('./load_config');
const secret = config.secret;
var jwt = require('jsonwebtoken');
const crypto = require('crypto');
const csprng = require('csprng');

const ranStr = require('./random_string');
var Session = require('../models/session');
var User = require('../models/user').userItem;

var sha256hash = 'sha256';
var passwordHash = 'sha256';

// var bytes = csprng.randombytes_buf(32);

function b64(str) {
    return new Buffer(str).toString('base64')
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
}

function createSig(jwtUnprotected) {
    return b64(hmac.update(jwtUnprotected));
}

function verifyJWT(token,uid) {
    try {
        var decoded = jwt.verify(token,config.secret,{ algorithms:['HS256'],issuer:crypto.createHash(sha256hash).update(uid).digest('hex') });
        return true;
    } catch (err){
        return false;
    }
}

function generateJWT(jti,uid,username) {
    let payload = {
        jti: jti,
        iss: sha256hash.update(uid).digest('hex'),
        uname: username
    };
    return jwt.sign(payload,config.secret, {algorithm: 'HS256',expiresIn:config.token_exp_time});
}

function parseJWT(token) {
    try {
        var decoded = jwt.verify(token,config.secret,{ algorithms:['HS256'],issuer:crypto.createHash(sha256hash).update(uid).digest('hex') });
        return decoded.payload;
    } catch (err){
        return null;
    }
}

let genPSWToken = function (password,salt) {
    return crypto.createHash(passwordHash).update(password+salt).digest('hex');
};

let genPSW = function (password) {
    let salt = csprng(160,36);
    let token = genPSWToken(password,salt);
    return token+"."+salt;
};


let checkPSW = function (passwordtoken,password) {
    // let checkPSW = function (mail,password) {
    // User.find({mail:mail},function (err, user) {
    //     if(err) {return false;}
    //     if(user.length>0){
    //         let psws = user[0].password.split(".");
    //         if(psws.length===2){
    //             console.log('Password checking');
    //             // console.log(psws[0]);
    //             // console.log(psws[1]);
    //             // console.log(genPSWToken(password,psws[1]));
    //             console.log(psws[0]===genPSWToken(password,psws[1]));
    //             return (psws[0].toString()===genPSWToken(password,psws[1]).toString());
    //         }else{
    //             return false;
    //         }
    //     }else {
    //         return false;
    //     }
    // });
    console.log("PSWTOK:"+passwordtoken);
    let psws = passwordtoken.split(".");
    if(psws.length===2){
        // console.log('Password checking');
        // // console.log(psws[0]);
        // // console.log(psws[1]);
        // // console.log(genPSWToken(password,psws[1]));
        // console.log(psws[0]===genPSWToken(password,psws[1]));
        return (psws[0].toString()===genPSWToken(password,psws[1]).toString());
    }else{
        return false;
    }
};


let verifySession = function (req,res,next){

};

module.exports = {
    genJWT: generateJWT,
    parseJWT: parseJWT,
    wrapPSW: genPSW,
    checkPSW: checkPSW
}
