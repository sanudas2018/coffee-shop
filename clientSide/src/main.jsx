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


const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
    loader: () => fetch('http://localhost:5000/all-coffee')
  },
  {
    path: "/addcoffee",
    element: <AddCoffee></AddCoffee>

  },
  {
    path: "/all-coffee-item",
    // element: <SingleCoffCard></SingleCoffCard> ,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  }
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
