import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import Contact from './Contact/Contact.jsx'
import AboutUs from './AboutUs/AboutUs.jsx'
import User from './User/User.jsx'
import Github, { gitLoader } from './components/Github/Github.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <AboutUs/>
      },
      {
        path: "contact",
        element:<Contact/>,
      },
      {
        path: "user/:userId",
        element:<User/>,
      },
      {
        //using this loader help to perform us in another way for fetching the data in more optimized way
        loader: gitLoader,
        path: "github",
        element:<Github/>,
      },
      
    ]
  }
])

 
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
