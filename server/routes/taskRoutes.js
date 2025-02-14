const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/taskControllers");

// Route for creating new Task
router.post("/tasks", taskControllers.createTaskHandler);

// Route for getting filtered tasks
router.get("/get-tasks", taskControllers.getTasksHandler);

module.exports = router;
