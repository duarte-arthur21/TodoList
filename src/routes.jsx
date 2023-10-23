import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Singin from "./pages/singin";
import AddTodo from "./pages/addTodo";
import Dashboard from "./pages/dashboard";
import { Register } from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Singin />,
    errorElement: <div>Rota inexistente</div>,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/addTodo",
    element: <AddTodo />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <div>Rota de login</div>,
  },
]);

export { router };
