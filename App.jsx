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

const App = () => {
  const [data, setData] = useState([])
  const [inputValue, setInputValue] = useState('')
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((result) => setData(result.data.products))
  }, [])

  const searchData = async () => {
    try {
      axios
        .get(
          `https://dummyjson.com/products/search?q=${inputValue
            .trim()
            .toLowerCase()}`
        )
        .then((response) => setData(response.data.products))
    } catch (error) {
      console.log(error)
    }
  }

  const search = (e) => {
    e.preventDefault()
    searchData()
  }

  return (
    <Container maxW={'1200px'} py={5}>
      <Box onSubmit={search} as={'form'} my={5} display={'flex'} gap={'10px'} direction={'row'}>
        <Input onChange={(e) => setInputValue(e.target.value)} />
        <Button type={'submit'}>search</Button>
      </Box>

      <Grid templateColumns={'repeat(4,1fr)'} gap={4}>
        {data.map((item) => {
          return (
            <GridItem padding={'5px'} border={'1px solid gray'} key={item.id}>
              <Image
                draggable={false}
                width={'100%'}
                height={200}
                objectFit={'cover'}
                src={item.images[0]}
              />
              <Heading size={'sm'}>{item.title}</Heading>
              <Text>{item.description}</Text>
            </GridItem>
          )
        })}
      </Grid>
    </Container>
  )
}

export default App
