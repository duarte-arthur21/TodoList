import { create } from "zustand";

const useTasksStore = create((set) => ({
  tasks: {
    addTasks(newTasks) {
      set((state) => ({
        tasks: [...state.tasks.concat(newTasks)],
      }));
    },
  },
}));

export { useTasksStore };
