import {
    createBrowserRouter,
   
  } from "react-router-dom";

import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddItemForm from "../Pages/AddProduct";
import AllSportsEquipment from "../Pages/AllProduct";
import ViewDetails from "../Pages/ViewDetails";


const Router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout />,
      errorElement:<Error />,
      children: [
        {
          path: "/",
          element:<Home/>,
          loader:()=>fetch('http://localhost:5000/addProduct')
        },
        {
          path: "/register",
          element:<Register />

        },
        {
          path: "/login",
          element:<Login />
        },
        {
          path:'/allproduct',
          element:<AllSportsEquipment />
        },
        {
          path:'/addproduct',
          element:<AddItemForm />
        },
        {
          path:'/product/:id',
          element:<ViewDetails />,
          loader:
        }
      ]
    },
  ]);

export default Router;