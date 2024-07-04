import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ErrorPage404 from "./pages/ErrorPage404/ErrorPage404.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import BoxPage from "./pages/BoxPage/BoxPage.jsx";

const router = createBrowserRouter([
  {
    element: <App />,

    errorElement: <ErrorPage404 />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage404 />,
      },
      {
        path: "/boxPage",
        element: <BoxPage />,
        errorElement: <ErrorPage404 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
