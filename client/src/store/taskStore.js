import { create } from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [],
  addNewTask: (newTask) =>
    set((state) => ({ tasks: [...state.tasks, newTask] })),
}));
