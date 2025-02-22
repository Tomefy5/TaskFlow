const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");

// Route for front auth
router.get("/check-auth", authControllers.getAuthHandler);

module.exports = router;