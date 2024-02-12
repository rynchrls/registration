const mongoose = require("mongoose");

// creating mongoose model
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "please add your email"],
    },
    password: {
      type: String,
      required: [true, "please add your password"],
    },
    rememberMe: {
      type: Boolean
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('user', userSchema)
