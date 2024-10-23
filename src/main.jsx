import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
 
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Root from './Root/Root';
import NotFound from './NotFound/NotFound';
import ContactUs from './Components/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
      path:"/",
      element:<Home></Home>
      },
      {
        path:"/contactUs",
        element:<ContactUs></ContactUs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
