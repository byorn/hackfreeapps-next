const mongoose = require("mongoose");

const dbInit = async function(){
    mongoose.Promise = global.Promise;
    await mongoose.connect("mongodb://localhost:27017/hackfreeapps",{useNewUrlParser: true,useUnifiedTopology: true });
};

module.exports = dbInit;
