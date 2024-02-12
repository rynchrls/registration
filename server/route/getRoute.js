const express = require("express");
const { allUsers } = require("../authHandler/authenticationHandler");

const route = express.Router();

// HTTP methods and the callback functions
route.get("/", allUsers);

module.exports = route;
