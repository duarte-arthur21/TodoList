import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {
    email: "",
    password: "",
  },

  updateUser: (userData) => {
    set({
      user: {
        email: userData.email,
        password: userData.password,
      },
    });
  },
}));

export { useUserStore };
