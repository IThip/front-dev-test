import './App.css';
import * as React from 'react'
import { Button, ChakraProvider, Flex, ButtonGroup } from '@chakra-ui/react'
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import FormArea from './component/Form';
import PokemonDetails from './component/Pokemon';
import Function from './component/Function';
function App() {
  // const element = useRoutes(routes)
  return (
   
      <ChakraProvider>
        <div className="App">
          <BrowserRouter>
            <Navbar/>
            
            <Routes>
              <Route path='/' element={ <Home/>}/>
              <Route path='/Form' element={ <FormArea/>}/>
              <Route path='/Pokemon' element={ <PokemonDetails/>}/>
              <Route path='/Function' element={ <Function/>}/>
            </Routes>
        </BrowserRouter>
        </div>
      </ChakraProvider>
   
  
  );
}

export default App;
