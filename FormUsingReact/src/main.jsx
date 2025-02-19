import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route } from 'react-router'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import FormFill from './components/FormFill.jsx'
import Layout from './Layout.jsx'
import ListedUsers from './components/ListedUsers.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='Apply' element={<FormFill />} />
      <Route path='ListedUsers' element={<ListedUsers />} />
      </Route >
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode >,
)
