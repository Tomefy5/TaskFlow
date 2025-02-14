const { createTask, getTasks } = require("../services/taskServices");

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

module.exports = {
  createTaskHandler,
  getTasksHandler,
};
