const mongoose = require("mongoose");

const dbInit = function(){
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost:27017/hackfreeapps",{useNewUrlParser: true,useUnifiedTopology: true });
}

module.exports = dbInit;
