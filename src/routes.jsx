import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Singin from "./pages/singin";
import AddTodo from "./pages/addTodo";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Singin />,
    errorElement: <div>Rota inexistente</div>,
  },

  {
    path: "/addTodo",
    element: <AddTodo />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export { router };
