const mongoose = require("mongoose");

const dbInit = async function(){
    mongoose.Promise = global.Promise;

    const uri = "mongodb+srv://hackfreeapps:hackfreeapps@cluster0.fwlx7.mongodb.net/hackfreeapps?retryWrites=true&w=majority";
    //const uri1 = "mongodb://localhost:27017/hackfreeapps";

    await mongoose.connect(uri,{useNewUrlParser: true,useUnifiedTopology: true });
};


module.exports = dbInit;