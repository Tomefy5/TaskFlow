const Task = require("../models/Task");

const createTask = async (task) => {
  // Title verification
  if (!task.title || typeof task.title !== "string") {
    throw new Error(
      "createTask: task's title is required and must be a string"
    );
  }

  if (task.priority && !["high", "medium", "low"].includes(task.priority)) {
    throw new Error("createTask: invalid priority value");
  }

  try {
    const newTask = new Task(task);
    await newTask.save();
    return newTask;
  } catch (error) {
    throw error;
  }
};

const getTasks = async (isFinished) => {

  if(typeof isFinished !== "boolean") throw new Error("getTasks: param must be a boolean");

  try {
    const tasks = await Task.find({ finished: isFinished });
    if (!tasks) throw new Error("getTasks: failed to get tasks");
    return tasks;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTask,
  getTasks,
};
