const express = require("express");
const router = express.Router();
const taskControllers = require("../controllers/taskControllers");
const verifyToken = require("../middlewares/authMiddleware");

// Route for creating new Task
router.post("/tasks", verifyToken, taskControllers.createTaskHandler);

// Route for getting filtered tasks
router.get("/get-tasks", verifyToken, taskControllers.getTasksHandler);

// Route for deleting task
router.delete("/delete-task",verifyToken, taskControllers.deleteTaskHandler);

// Route for updating task
router.put("/update-task",verifyToken, taskControllers.updateTaskHandler);

module.exports = router;
