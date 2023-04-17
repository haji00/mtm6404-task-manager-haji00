import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NavBar from "./components/NavBar";
import List from "./components/List";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <NavBar />,
  },
  {
    path: "/list/:id",
    element: <List />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
