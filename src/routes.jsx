import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from './pages/login';
import AddTodo from "./pages/addTodo";
import TodoTasks from './pages/todoTasks';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <div>Rota inexistente</div>,
  },

  {
    path: "/addTodo",
    element: <AddTodo />,
  },

  {
    path: "/todotasks",
    element: <TodoTasks />,
  },
]);

export {router};
