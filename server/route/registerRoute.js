const express = require("express");
const { registerUser } = require("../authHandler/authenticationHandler");

const route = express.Router();

// HTTP methods and the callback functions
route.post("/", registerUser);

module.exports = route;
