import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider
} from "react-router-dom";
import './index.css'
import Router from './Router/Router';
import AuthContextProvider from './AuthPovider/AuthPovider';




createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthContextProvider><RouterProvider router={Router} /></AuthContextProvider>
  </StrictMode>,
)
