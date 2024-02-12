// async functions handler
const asyncHandler = require("express-async-handler");

// user model from database
const User = require("../models/userSchema");

// Hashing password
const bcrypt = require("bcrypt");

// Getting all users from database / PRIVATE route
const allUsers = asyncHandler(async (req, res) => {
  const user = await User.find();
  res.json(user);
});

// User registration / PUBLIC route
const registerUser = asyncHandler(async (req, res) => {
  const { email, password, rememberMe } = req.body;

  if (!email || !password) {
    res.status(404);
    throw new Error("All fields are mandatory");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const availability = await User.findOne({ email });
  if (availability) {
    res.status(400);
    throw new Error("email was already registered");
  }
  const newUser = await User.create({
    email,
    password: hashedPassword,
    rememberMe
  });
  if (newUser) {
    res.status(201).json({
        _id: newUser.id,
        email: newUser.email,
        rememberMe: newUser.rememberMe
    });
  } else {
    res.status(400);
    throw new Error("Failed to register");
  }
  // if(email === '' || password === '') {
  //   res.status(404)
  //   throw new Error('All fields are mandatory!')
  // }
});

module.exports = { registerUser, allUsers };
