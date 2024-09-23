import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BlogPage from './pages/BlogPage.jsx'
import Contact from './pages/Contact.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "Home",
    element: <App/>,
  },
  {
    path: "Blog",
    element: <BlogPage/>,
  },
  {
    path: "Contact",
    element: <Contact/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
