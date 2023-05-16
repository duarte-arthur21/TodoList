import React from "react";
import "./App.css";
import Template from "./templates";
import { router } from "./routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
