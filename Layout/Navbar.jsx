import { Box } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box display={'flex'} justifyContent={'space-around'}>
      <NavLink to={'/'}>Products</NavLink>
      <NavLink to={'/movies'}>Add</NavLink>
    </Box>
  )
}

export default Navbar
