const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/taskControllers");

// Route for creating new Task
router.post("/tasks", taskControllers.createTaskHandler);

module.exports = router;
