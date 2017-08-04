var crypto = require('crypto');

module.exports = function (len,method='hex') {
    return crypto.randomBytes(len/2).toString(method);
};