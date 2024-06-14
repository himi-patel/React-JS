import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/ContactUs.jsx'
import Github,{githubInfoLoader}  from "./components/Github/Github.jsx";

const router=createBrowserRouter([
  {
    path:'',
    element:<Layout/>,
    children:[{
      path:"",
      element:<Home/>
    },{
      path:"about",
      element:<About/>

    },{
      path:"contact",
      element:<Contact/>
    },{
      path:"github",
      element:<Github/>,
      loader:githubInfoLoader,
   
    }
  ]
  }
])

//second method

// const router=createBrowserRouter(createRoutesFromElements(
//   <Route path='/'  element={<Layout/>}></Route>
// )
//   }
// ])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
