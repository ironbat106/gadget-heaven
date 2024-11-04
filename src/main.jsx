import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';

import Home from './components/Home';
import GadgetsCategory from './components/Gadgets/GadgetsCategory';
import Statistics from './components/Statistics';
import Dashboard from './components/Dashboard';
import GadgetsDetails from './components/Gadgets/GadgetsDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/categories.json'),
        children: [
          {
            path: '/',
            element: <GadgetsCategory></GadgetsCategory>,
            loader: () => fetch('/gadgets.json')
          },
          {
            path: '/gadgets/:category',
            element: <GadgetsCategory></GadgetsCategory>,
            loader: () => fetch('/gadgets.json')
          },
        ]
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>

      },
      {
        path:'/details/:GId',
        element:<GadgetsDetails></GadgetsDetails>,
        loader: () => fetch('/gadgets.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)