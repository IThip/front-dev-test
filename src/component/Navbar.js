import React from 'react'
import { Box, Button,ButtonGroup, Heading, Text } from '@chakra-ui/react';

import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';


const Navbar = () => {

    return (
        <>
        <Box
          w='100%'
          h='90px' p='2'>
            <Heading 
               mb='-1'
               fontWeight='extrabold'
               fontSize={"32px"}
               bgClip='text'
               fontFamily="KanitRegular"
               pt="20px"
               color={"black"}
               >Frontend Developer Exams</Heading>
        </Box>
        <ButtonGroup >
         <Button 
          border="2px"  
          mb='5' 
          bg="#f9a825" _hover={{borderColor:"#f9a825",color:"#f9a825",bg:"white"}}
          colorScheme='#white' >
                <Link to="/Form"> 
                Forms
                </Link>
         </Button>
         <Button 
          border="2px"  
          mb='5' 
          bg="#283593" _hover={{borderColor:"#283593",color:"#283593",bg:"white"}}
          colorScheme='#white' >
                <Link to="/Pokemon">
                    Pokemon's
                </Link>
          </Button>
          <Button border="2px"  
          mb='5' 
          bg="#c41411" _hover={{borderColor:"#c41411",color:"#c41411",bg:"white"}}
          colorScheme='#white' >
                <Link to="/Function">
                    Function
                </Link>
          </Button>
       </ButtonGroup>
       
        </>
   
    )
  }
  
  export default Navbar
  