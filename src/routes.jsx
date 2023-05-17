import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import AddTodo from "./pages/addTodo";
import Dashboard from "./pages/dashboard";
import Template from "./templates";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
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
