import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./Routes/Routes.jsx";
import AuthProvider from "./authProvider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <Toaster />
      <RouterProvider router={Routers}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
