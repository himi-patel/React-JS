import React, { useLayoutEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import For_partners from './components/For_partners/For_partners.jsx'
import About from './components/About/About.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Recipes from './components/Recipes/Recipes.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="for-partners" element={<For_partners/>}/>
      <Route path="recipes" element={<Recipes/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<RouterProvider router={router}/>
  </React.StrictMode>
)
