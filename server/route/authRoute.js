const express = require('express')
const {registerUser, allUsers} = require('../authHandler/authenticationHandler')

const route = express.Router()

// HTTP methods and the callback functions
route.get('/users', allUsers)
route.post('/register', registerUser)


module.exports = route