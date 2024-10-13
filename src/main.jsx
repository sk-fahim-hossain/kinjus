import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Featured from './components/Featured'
import Home from './Pages/Home'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import NotFoundPage from './components/NotFoundPage'



const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
  },
  {
    path: '/featured',
    element: <><Navbar/><Featured/><Footer/></>
  },
  {
    path: '/about',
    element: <><Navbar/><About/><Footer/></>
  },
  {
    path: '/gallery',
    element: <><Navbar/><Gallery/><Footer/></>
  },
  {
    path:'*',
    element: <><Navbar/><NotFoundPage/></>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
