import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Login from "../Pages/Login";

const Router = createBrowserRouter([
    {
      path: "/",
      element:<Login />
    },
  ]);

export default Router;