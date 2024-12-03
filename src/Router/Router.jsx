import {
    createBrowserRouter,
   
  } from "react-router-dom";

import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Register from "../Pages/Register";
import Login from "../Pages/Login";


const Router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout />,
      errorElement:<Error />,
      children: [
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/register",
          element:<Register />

        },
        {
          path: "/login",
          element:<Login />
        }
      ]
    },
  ]);

export default Router;