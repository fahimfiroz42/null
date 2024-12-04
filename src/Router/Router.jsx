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
import MyProduct from "../Pages/MyProduct";
import UpdateProduct from "../Pages/UpdateProduct";


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
          element:<AllSportsEquipment />,
          loader:()=>fetch('http://localhost:5000/addProduct')
        },
        {
          path:'/addproduct',
          element:<AddItemForm />
        },
        {
          path:'/product/:id',
          element:<ViewDetails />,
          loader:({params})=>fetch(`http://localhost:5000/addProduct/${params.id}`)
        },
        {
          path:'/myProduct/:email',
          element:<MyProduct />,
          loader:({params})=>fetch(`http://localhost:5000/userProduct/${params.email}`)

        },
        {
          path:'/updateProduct/:id',
          element:<UpdateProduct />,
          loader:({params})=>fetch(`http://localhost:5000/addProduct/${params.id}`)
        }
      ]
    },
  ]);

export default Router;