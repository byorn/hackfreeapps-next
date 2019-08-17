const mongoose = require("mongoose");

const dbInit = function(){
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost:27017/hackfreeapps");
}

module.exports = dbInit;
