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
  setTaskToDo: (tasksFetched) => set((state) => ({ taskToDo: [...tasksFetched, ...state.taskToDo] })),
  setTaskDoing: (tasksFetched) => set((state) => ({ taskDoing: [...tasksFetched, ...state.taskDoing] })),
  setTaskDone: (tasksFetched) => set((state) => ({ taskDone: [...tasksFetched, ...state.taskDone] })),
}));

