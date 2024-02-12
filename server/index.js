// dependencies imports
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const {registerUser, allUsers} = require('./authHandler/authenticationHandler')

// google auth imports
const session = require('express-session')
const passport = require("passport");
require('./passport')


// routing import
const registerRoute = require('./route/registerRoute')
const getRoute = require('./route/getRoute')
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
const corsOptions = {
  origin: 'https://registration-client-sigma.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));

// database connect
connectDatabase();

// request body parser
app.use(express.json());

// API routing
app.use("/auth/users/register", registerRoute);
app.use('auth/users', getRoute)
app.use('/auth', router)


app.use('/auth/u', (req, res) => {
  res.status(200).json({message: 'Congrats!!'})
})


// middleware/error handler
app.use(errorHandler);

// server
app.listen(PORT, () => {
  console.log(`Server is listening to port: ${PORT}`);
});
