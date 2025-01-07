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
import PrivateRoute from "../PrivateRoute/PrivateRoute";

import AboutUsPage from "../Pages/AboutUSPage";




const Router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout />,
      errorElement:<Error />,
      children: [
        {
          path: "/",
          element:<Home/>,
          loader:()=>fetch('https://knull-server.vercel.app/addProduct/limit')
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
          loader:()=>fetch('https://knull-server.vercel.app/addProduct')
        },
        {
          path:'/addproduct',
          element:<PrivateRoute><AddItemForm /></PrivateRoute>
        },
        {
          path:'/product/:id',
          element:<PrivateRoute><ViewDetails /></PrivateRoute>,
          loader:({params})=>fetch(`https://knull-server.vercel.app/addProduct/${params.id}`)
        },
        {
          path:'/myProduct',
          element:<PrivateRoute><MyProduct /></PrivateRoute>
         
        },
        {
          path:'/updateProduct/:id',
          element:<PrivateRoute><UpdateProduct /></PrivateRoute>,
          loader:({params})=>fetch(`https://knull-server.vercel.app/addProduct/${params.id}`)
        },
        {
          path:'/aboutUs',
          element:<AboutUsPage/>
        }
      ]
    },
  ]);

export default Router;