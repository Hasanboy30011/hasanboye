import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/global.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import { mainRouter } from './routes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ChakraProvider>
    <RouterProvider router={mainRouter} />
  </ChakraProvider>
)
