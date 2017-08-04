var mode = process.env.NODE_ENV || "Production";
var config = null;
if(mode=="dev"){
    config=require('../config.dev.js');
}else {
    config=require('../config.production.js');
}

module.exports = config;
