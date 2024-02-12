const mongoose = require("mongoose");

// creating mongoose model
const userSchema = new mongoose.Schema({
    googleId: String,
    displayName: String,
  });
  
module.exports = mongoose.model("Google", userSchema);
