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
import Support from './components/Support';
import GadgetsDetails from './components/Gadgets/GadgetsDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        path:'/support',
        element:<Support></Support>

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
    <ToastContainer />
  </StrictMode>,
)
