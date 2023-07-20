import React from 'react'
import { Image, Flex, Box, Center } from '@chakra-ui/react';
import ImgCode from '../image/code.png';
import Welcome from '../image/welcome.png'

function Home() {
  return (
  
       <Flex justifyContent={'center'}>
       <Box  >
        
        <Image src={Welcome} h="full" w="1200px"/>
  
     </Box>
        </Flex>
    
  )
}

export default Home
