const mongoose = require("mongoose");

const schema = new mongoose.Schema({
   domain: [],
   tech:[],
   
});


const RefData = mongoose.model("refdata", schema);

module.exports = RefData;