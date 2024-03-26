import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Components/MainComponents/Home";
import Expenses from "./Components/MainComponents/Expenses";
import SignUp from "./Auth/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/Expenses",
    element: <Expenses />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
    errorElement: <h1>Error</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
