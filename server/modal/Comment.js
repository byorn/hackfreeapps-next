const mongoose = require("mongoose");

const schema = new mongoose.Schema({
   githubrepos_id: {type: mongoose.Schema.Types.ObjectId, ref: 'githubrepos'},
   repo_id: Number,
   comment_from: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
   comment: String,
   updated: { type: Date, default: Date.now },
});


const Comments = mongoose.model("Comments", schema);

module.exports = Comments;