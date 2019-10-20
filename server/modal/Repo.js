const mongoose = require("mongoose");

const schema = new mongoose.Schema({
   github_repo: mongoose.Schema.Types.Mixed,
   tech: String,
   domain: String
});


const Repo = mongoose.model("githubrepos", schema);

module.exports = Repo;