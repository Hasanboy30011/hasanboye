import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Movies from '../pages/Movies'
import Adress from '../pages/Adress'
import Layout from '../Layout/Layout'
import Posts from '../components/Posts'
import Photos from '../components/Photos'

export const mainRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'about/address',
        element: <Adress />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'movies',
        element: <Movies />,
        children: [
          {
            path: 'posts',
            element: <Posts />,
          },
          {
            path: 'photos',
            element: <Photos />,
          },
        ],
      },
    ],
  },
])
