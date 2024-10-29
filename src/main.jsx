import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
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
import Views3D from './Components/Services/Architecture/Views3D';
import ArchitecturelPlan from './Components/Services/Architecture/ArchitecturelPlan';
import Landscaping from './Components/Services/Architecture/Landscaping';
import SubSoil from './Components/Services/StrucTural/SubSoil';
import LaboratoryTesting from './Components/Services/StrucTural/LaboratoryTesting';
import StructuralDesign from './Components/Services/StrucTural/StructuralDesign.JSX';
import Survey from './Components/Services/StrucTural/Survey';
import WarehouseDesign from './Components/Services/StrucTural/WarehouseDesign';
import CompositeDesign from './Components/Services/StrucTural/CompositeDesign';
import BuildingConstruction from './Components/Services/Construction/BuildingConstruction';
import Factory from './Components/Services/Construction/Factory';
import WarehouseConstruction from './Components/Services/Construction/WarehouseConstruction';
import ConstructionTeam from './Components/AboutPrfile/ConstructionTeam';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contactUs", element: <ContactUs /> },
      { path: "/ourService", element: <OurService /> },
      { path: "/about", element: <About /> },
      { path: "/management", element: <Management /> },
      { path: "/companyProfile", element: <CompanyAbout /> },
      { path: "/architech", element: <Architech /> },
      { path: "/structure", element: <Structure /> },
      { path: "/constructionTeam", element: <ConstructionTeam/> },
      { path: "/views3D", element: <Views3D /> },
      { path: "/architecturelPlan", element: <ArchitecturelPlan/> } ,
      { path: "/landscaping", element: <Landscaping/> },

      { path: "/subSoil", element: <SubSoil/> },
      { path: "/laboratoryTesting", element: <LaboratoryTesting/> },
      { path: "/structuralDesign", element: <StructuralDesign/> },
      { path: "/survey", element: <Survey/> },
      { path: "/warehouseDesign", element: <WarehouseDesign/> },
      { path: "/compositeDesign", element: <CompositeDesign/> },
      
      { path: "/buildingConstruction", element: <BuildingConstruction/> },
      { path: "/factory", element: <Factory/> },
      { path: "/warehouseConstruction", element: <WarehouseConstruction/> },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
