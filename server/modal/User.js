const mongoose = require("mongoose");

const schema = new mongoose.Schema({
   id: Number,
   token: String,
   logging_in:  Boolean,
   user: mongoose.Schema.Types.Mixed
});


const User = mongoose.model("User", schema);

module.exports = User;