const userControllers = require("../controllers/userControllers");
const express = require("express");
const router = express.Router();

// Route for registering a new user
router.post("/register", userControllers.registerHandler);

module.exports = router;
