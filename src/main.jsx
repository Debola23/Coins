import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Coins } from './Components/Coins/Coins.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
{
  path: "/coins",
  element: <Coins/>,
},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>,
)
