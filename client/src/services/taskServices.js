import api from "./api";

export const createTask = async (task) => {
  try {
    const response = await api.post("/tasks", task);
    if (!response.data)
      throw new Error("fetchTasks: error on creating new tasks");
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchTasksToDo = async (isFinished, isDoing) => {
  try {
    const response = await api.get(
      `/get-tasks?finished=${isFinished}&doing=${isDoing}`
    );
    if (!response.data) throw new Error("fetchTasks: error on fetching tasks");
    return response.data; // tasks to do
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await api.delete(`/delete-task?taskId=${taskId}`);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
