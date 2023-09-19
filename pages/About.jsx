import { Button } from '@chakra-ui/react'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>about page</h1>
      <Button colorScheme='twitter'>
        <Link to='/about/address'>go to address</Link>
      </Button>
    </div>
  )
}

export default About
