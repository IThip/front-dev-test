import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Text,
  Box,
  Grid,
  GridItem,
  Image,
  Flex,
  Center
} from '@chakra-ui/react'
import { Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'

const PokemonDetails = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [data, setData] = useState([]);
 

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=104');
      const pokemonUrls = response.data.results.map((pokemon) => pokemon.url);
      const promises = pokemonUrls.map((url) => axios.get(url));
      const responses = await Promise.all(promises);
      const data = responses.map((response) => response.data);
      setPokemonList(data);
      setIsLoading(false);
    } catch (error) {
      setError('Error fetching data');
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (

      <Grid templateColumns='repeat(6, 1fr)' gap={6} p = "8rem" pt="2rem">
         <Box padding='6' boxShadow='lg' bg='white' >
      <SkeletonCircle size='10' />
      <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>

      
         </Grid>
   
  
     
    )
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Box>
      <Text fontFamily="KanitRegular" 
      fontSize={"20px"}
      fontWeight={"bold"}
      pt = "4rem">

        Fetch Pokemon's data จาก https://pokeapi.co/api/v2

      </Text>
      <Grid  templateColumns='repeat(6, 1fr)' gap={6} p = "8rem" pt="2rem">
      {pokemonList.map((pokemon) => (
        <Box 
        key={pokemon.id} 
        boxShadow={"xl"}
        h="150px" w="full"
        >

          <Center>
            <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
          </Center>
            <Text
            fontWeight={"bold"}>
              {pokemon.name}
            </Text>
        </Box>
      ))}
      </Grid>
    </Box>
  );
};

export default PokemonDetails;
