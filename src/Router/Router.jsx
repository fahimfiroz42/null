import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Login from "../Pages/Login";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";

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
          path: "/login",
          element:<Login/>

        }
      ]
    },
  ]);

export default Router;