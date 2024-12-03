import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Login from "../Pages/Login";
import MainLayout from "../MainLayout/MainLayout";

const Router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout />
    },
  ]);

export default Router;