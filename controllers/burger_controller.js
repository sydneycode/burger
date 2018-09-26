// Import the npm express package
var express = require("express");

// Import the burger model
var burger = require("../models/burger.js");

// Create the 'router' for the app
var router = express.Router();

// Routes for our HTTP requests

// Export the 'router'
module.exports = router;