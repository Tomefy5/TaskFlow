const { default: mongoose } = require("mongoose");
const Task = require("../models/Task");

const createTask = async (task, userId) => {

  const userObjectId = new mongoose.Types.ObjectId(userId);

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
    const newTask = new Task({ ...task, user: userObjectId });
    await newTask.save();
    return newTask;
  } catch (error) {
    throw error;
  }
};

const getTasks = async (isFinished, isDoing, userId) => {
  const userObjectId = new mongoose.Types.ObjectId(userId);

  if (typeof isFinished !== "boolean")
    throw new Error("getTasks: param must be a boolean");

  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const startOfTomorrow = new Date(startOfToday);
  startOfTomorrow.setDate(startOfTomorrow.getDate() + 1);

  let tasks;

  try {
    if (isDoing && !isFinished) {
      tasks = await Task.find({
        finished: isFinished,
        user: userObjectId,
        deadline: {
          $gte: startOfToday,
          $lt: startOfTomorrow,
        },
      });
    } else if (!isDoing && !isFinished) {
      tasks = await Task.find({
        finished: isFinished,
        user: userObjectId,
        $or: [
          { deadline: { $lt: startOfToday } },
          { deadline: { $gte: startOfTomorrow } },
        ],
      });
    } else {
      tasks = await Task.find({ finished: true, user: userObjectId });
    }

    if (!tasks) throw new Error("getTasks: failed to get tasks");
    return tasks;
  } catch (error) {
    throw error;
  }
};

const deleteTask = async (taskId) => {
  const taskObjectId = new mongoose.Types.ObjectId(taskId);

  try {
    const taskToDelete = await Task.findByIdAndDelete(taskObjectId);
    if (!taskToDelete)
      throw new Error("deleteTask:  can't find the task to delete");
    return taskToDelete;
  } catch (error) {
    throw error;
  }
};

const updateTask = async (taskId, update) => {
  const taskObjectId = new mongoose.Types.ObjectId(taskId);
  try {
    const taskToUpdate = await Task.findByIdAndUpdate(taskObjectId, update);
    if (!taskToUpdate) throw new Error("updateTask: can't find task");
    return taskToUpdate;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
};
