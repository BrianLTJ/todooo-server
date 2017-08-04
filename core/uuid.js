var crypto = require('crypto');

module.exports = function genUUID(){
    return crypto.randomBytes(4).toString('hex') + "-" +
        crypto.randomBytes(2).toString('hex') + "-" +
        crypto.randomBytes(2).toString('hex') + "-" +
        crypto.randomBytes(2).toString('hex') + "-" +
        crypto.randomBytes(6).toString('hex');
}
