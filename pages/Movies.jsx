import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { FormControl } from '@chakra-ui/react'
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

const Movies = () => {
const [titleInput,setTitleInput] = useState("")
const [contentInput,setContentInput] = useState("")
const [authorInput,setAuthorInput] = useState("")

  const [data,setData] = useState([])
  useEffect(() =>{
    axios 
    .get("http://localhost:5000/api/posts")
    .then((result) => setData(result.data.products))
  },[])
  

    const addData = async (data) =>{
try {
  await axios.post("http://localhost:5000/api/posts", data)
  .then(res =>console.log(res)) 
} catch (error) {
 console.log(error); 
}
    }
    const handleSubmit = (event) =>{
      event.preventDefault()
      let inputData = {
        author:authorInput,
        content:contentInput,
        title:titleInput,
      }
      addData(inputData)
    }
return(
  <Box>
  <FormControl as={"form"} onSubmit={handleSubmit}>
      <Input onChange={e=>setTitleInput(e.target.value)} placeholder="title" required/>
      <Input onChange={e=>setContentInput(e.target.value)} placeholder="content" required/>

      <Input onChange={e=>setAuthorInput(e.target.value)} placeholder="description" required/>
      <Button colorScheme="green" type="submit">add</Button>
      </FormControl>
  </Box>

)
      
}

export default Movies
