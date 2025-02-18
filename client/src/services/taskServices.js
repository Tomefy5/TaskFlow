import api from "./api";
import { CREATE_TASK, GET_TASKS_URL, DELETE_TASK_URL, UPDATE_TASK_URL } from "./url"

export const createTask = async (task) => {
  try {
    const response = await api.post(CREATE_TASK, task);
    if (!response.data)
      throw new Error("fetchTasks: error on creating new tasks");
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchTasksToDo = async (isFinished, isDoing) => {
  try {
    const response = await api.get(
      `${GET_TASKS_URL}?finished=${isFinished}&doing=${isDoing}`
    );
    if (!response.data) throw new Error("fetchTasks: error on fetching tasks");
    return response.data; // tasks to do
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTask = async (taskId) => {
  try {
    await api.delete(`${DELETE_TASK_URL}?taskId=${taskId}`);
  } catch (error) {
    console.log(error.message);
  }
};

export const changeTaskStatus = async (taskId, newStatus) => {
  try {
    api.put(`${UPDATE_TASK_URL}?taskId=${taskId}`, {
      finished: newStatus,
    });
  } catch (error) {
    console.log(error.message);
  }
};
