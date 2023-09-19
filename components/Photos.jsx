import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Heading,
  Grid,
  GridItem,
  Container,
  Image,
  Text,
  Input,
  Button,
  Box,
  Stack,
} from '@chakra-ui/react'

const Photos = () => {
  const [data,setData] = useState([])
  useEffect(() =>{
    axios 
    .get("https://dummyjson.com/products")
    .then((result) => setData(result.data.products))
  },[]) 
return(
  <Box>
    <Grid templateColumns={"repeat(4,1fr)"}>

      {data.map(item=>{
        return(
          <GridItem key={item.id}>
            <Image src={item.images[0]} />
          </GridItem>
        )
      })}    </Grid>
  </Box>

)
      
}

export default Photos
