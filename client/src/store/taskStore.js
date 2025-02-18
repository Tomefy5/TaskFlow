import { create } from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [],
  taskToDo: [],
  taskDoing: [],
  taskDone: [],
  addNewTaskToDo: (newTask) =>
    set((state) => ({ taskToDo: [...state.taskToDo, newTask] })),
  addNewTaskDoing: (newTask) =>
    set((state) => ({ taskDoing: [...state.taskDoing, newTask] })),
  addNewTaskDone: (newTask) =>
    set((state) => ({ taskDone: [...state.taskDone, newTask] })),
  removeToDo: (taskId) =>
    set((state) => ({
      taskToDo: state.taskToDo.filter((task) => task._id !== taskId),
    })),
  removeDoing: (taskId) =>
    set((state) => ({
      taskDoing: state.taskDoing.filter((task) => task._id !== taskId),
    })),
  removeDone: (taskId) =>
    set((state) => ({
      taskDone: state.taskDone.filter((task) => task._id !== taskId),
    })),
  setTaskToDo: (tasksFetched) =>
    set((state) => ({ taskToDo: [...tasksFetched, ...state.taskToDo] })),
  setTaskDoing: (tasksFetched) =>
    set((state) => ({ taskDoing: [...tasksFetched, ...state.taskDoing] })),
  setTaskDone: (tasksFetched) =>
    set((state) => ({ taskDone: [...tasksFetched, ...state.taskDone] })),
  deleteTaskFromStore: (task) =>
    set((state) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      const deadline = new Date(task.deadline);
      deadline.setHours(0, 0, 0, 0);

      if (task.finished) {
        return {
          taskDone: state.taskDone.filter(
            (taskItem) => taskItem._id !== task._id
          ),
        };
      } else if (!task.finished && deadline >= today && deadline < tomorrow) {
        return {
          taskDoing: state.taskDoing.filter(
            (taskItem) => taskItem._id !== task._id
          ),
        };
      } else {
        return {
          taskToDo: state.taskToDo.filter(
            (taskItem) => taskItem._id !== task._id
          ),
        };
      }
    }),
}));
