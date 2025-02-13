const { createTask } = require("../services/taskServices");

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

module.exports = {
  createTaskHandler,
};
