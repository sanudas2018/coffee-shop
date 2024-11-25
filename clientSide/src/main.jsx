import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import AllCoffeeItem from './Components/AllCoffeeItem.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/addcoffee",
    element: <AddCoffee></AddCoffee>

  },
  {
    path: "/all-coffee-item",
    element: <AllCoffeeItem></AllCoffeeItem> ,
  },
  {
    path: "/updateCoffee",
    element: <UpdateCoffee></UpdateCoffee>
  }
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
