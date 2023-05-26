import { create } from "zustand";

const useTasksStore = create((set) => ({
  tasks: [],

  addTasks(newTasks) {
    set((state) => ({
      tasks: state.tasks.concat(newTasks),
    }));
  },

  updateTask(taskDescription) {
    set((state) => ({
      tasks: state.tasks.map((task) => task.description === 
      taskDescription ?({
        description: taskDescription
      }))
    }))
  },

}));

export { useTasksStore };
