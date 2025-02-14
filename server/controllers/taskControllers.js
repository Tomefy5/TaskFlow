const {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
} = require("../services/taskServices");

const createTaskHandler = async (req, res) => {
  const task = req.body;

  try {
    const newTask = await createTask(task);
    res.status(201).json(newTask);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error on creating task: ${error.message}` });
  }
};

const getTasksHandler = async (req, res) => {
  const { finished, doing } = req.query;

  try {
    if (typeof finished === "undefined") {
      throw new Error("getTasksHandler: param is required");
    }

    const tasks = await getTasks(JSON.parse(finished), JSON.parse(doing));
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({
      message: `getTasksHandler: failed to fetch tasks: ${error.message}`,
    });
  }
};

const deleteTaskHandler = async (req, res) => {
  const { taskId } = req.query;

  try {
    const taskToDelete = await deleteTask(taskId);
    res.status(200).json(taskToDelete);
  } catch (error) {
    res.status(500).json({ message: `Error: ${error.message}` });
  }
};

const updateTaskHandler = async (req, res) => {
  const { taskId } = req.query;
  const updates = req.body;

  try {
    const taskToUpdate = await updateTask(taskId, updates);
    res.status(200).json(taskToUpdate);
  } catch (error) {
    res.status(500).json({ message: `Error: ${error.message}` });
  }
};

module.exports = {
  createTaskHandler,
  getTasksHandler,
  deleteTaskHandler,
  updateTaskHandler,
};
