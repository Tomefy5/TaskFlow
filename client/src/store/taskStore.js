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
  setTaskToDo: (tasksFetched) =>
    set((state) => ({ taskToDo: [...tasksFetched, ...state.taskToDo] })),
  setTaskDoing: (tasksFetched) =>
    set((state) => ({ taskDoing: [...tasksFetched, ...state.taskDoing] })),
  setTaskDone: (tasksFetched) =>
    set((state) => ({ taskDone: [...tasksFetched, ...state.taskDone] })),
  deleteTaskFromStore: (task) =>
    set((state) => {
      console.log("DeleteTask\n");
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      const deadline = new Date(task.deadline);
      deadline.setHours(0, 0, 0, 0);

      if (task.finished) {
        console.log("Done");
        return {
          taskDone: state.taskDone.filter(
            (taskItem) => taskItem._id !== task._id
          ),
        };
      } else if (!task.finished && deadline >= today && deadline < tomorrow) {
        console.log("Doing");
        return {
          taskDoing: state.taskDoing.filter(
            (taskItem) => taskItem._id !== task._id
          ),
        };
      } else {  
        console.log("ToDo");
        return {
          taskToDo: state.taskToDo.filter(
            (taskItem) => taskItem._id !== task._id
          ),
        };
      }
    }),
}));
