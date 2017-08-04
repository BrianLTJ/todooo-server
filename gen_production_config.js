const crypto = require('crypto');
let config = {
    // App secret, please REPLACE IT WITH A RANDOM STRING IN PRODUCTION
    secret: 'APPSECRET',
    // Set whether database is split into different servers
    db: {
        db_split: false,
        mongo_url: "mongodb://localhost:27017/todooo"
    }
}

function genStr(len=128) {
    return crypto.randomBytes(len/2).toString('hex');
}

console.log(genStr(8));