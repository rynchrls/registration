const express = require("express");
const { registerUser, allUsers } = require("../authHandler/authenticationHandler");

const route = express.Router();

// HTTP methods and the callback functions
route.post("/register", registerUser);
route.get("/users", allUsers);

module.exports = route;
