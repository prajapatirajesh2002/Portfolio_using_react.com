import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About/About.jsx';
import Resume from './pages/Resume.jsx';
import PortFolio from './portFolio/PortFolio.jsx';
// import Blogs from './pages/Blogs/Blogs.jsx';
import Contact from './contact/Contect.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children :[
      {
        path:"/",
        element :<About/>
      },
      {
        path:'/resume',
        element:<Resume/>
      },
      {
        path:'/portfolio',
        element: <PortFolio/>
      },
       
      {
        path:'/contact',
        element:<Contact/>

    }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
