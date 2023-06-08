import { create } from "zustand";
import { useState } from "react";

const useTasksStore = create((set) => ({
  tasks: [],

  addTasks(newTasks) {
    set((state) => ({
      tasks: state.tasks.concat(newTasks),
    }));
  },

  updateTask: (taskName) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.name === taskName ? { ...task, completed: !task.completed } : task
      ),
    }));
  },
}));

export { useTasksStore };
