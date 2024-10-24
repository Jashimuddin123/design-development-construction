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
import OurService from './Components/OurService';
import About from './Components/About';
import CompanyAbout from './Components/AboutPrfile/CompanyAbout';
import Architech from './Components/AboutPrfile/Architech';
import Structure from './Components/AboutPrfile/Structure';
import Management from './Components/AboutPrfile/Management';

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
      },
      {
        path:"/ourService",
        element:<OurService></OurService>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/management",
        element:<Management></Management>
      },
      {
        path:"/companyProfile",
        element:<CompanyAbout></CompanyAbout>
      },
       {
        path:"/architech",
        element:<Architech></Architech>
       },
       {
        path:"/structure",
        element:<Structure></Structure>
       },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
