const userControllers = require("../controllers/userControllers");
const express = require("express");
const router = express.Router();

// Route for registering a new user
router.post("/register", userControllers.registerHandler);

// Route for login a user
router.post("/login", userControllers.loginHandler);

// Route for logout
router.post("/logout", userControllers.logoutHandler);

module.exports = router;
