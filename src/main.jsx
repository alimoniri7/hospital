import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Landing from "./routes/landing";
import Dashboard from "./routes/dashboard";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Landing />,
   },
   {
      path: "/dashboard/:path?",
      element: <Dashboard />,
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <>
      <ToastContainer
         position="top-right"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={true}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="light"
         toastClassName='!font-[tt] font-medium'
         
      />
      <RouterProvider router={router} />
   </>
);
