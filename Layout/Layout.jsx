import { Container } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Container>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>
        <h1>footer</h1>
      </footer>
    </Container>
  )
}

export default Layout
