// dependencies imports
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

// google auth imports
const session = require('express-session')
const passport = require("passport");
require('./passport')


// routing import
const route = require("./route/authRoute");
const router= require('./route/auth')

// middleware import
const errorHandler = require("./middleware/errorHandler");

// database import
const connectDatabase = require("./config/database");

const PORT = process.env.PORT || 5001;

// creating server
const app = express();

// for google authentication
app.use(session({ secret: 'dc.gg', resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

// for cross resources sharing
app.use(cors({
  origin: 'http://localhost:3000',
  methods: "GET, POST, PUT, DELETE",
  credentials: true
}));

// database connect
connectDatabase();

// request body parser
app.use(express.json());

// API routing
app.use("/auth", route);
app.use('/auth', router)


// middleware/error handler
app.use(errorHandler);

// server
app.listen(PORT, () => {
  console.log(`Server is listening to port: ${PORT}`);
});


module.exports = app