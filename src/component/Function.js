import React from 'react';
import Data from '../mock/Data.json'
import { Box } from '@chakra-ui/react';

const Function = () => {

  const filteredData = Data.filter(item => item.shop === 1);

  const resultData = filteredData.reduce(item => {
    const foodItems = item.data.map(food => ({
      id: food.id,
      name: food.name,
      price: food.price,
      amount: food.order.amount ,
    }));
    
    
    return foodItems;
  });
  
// console.log(resultData);

  const resultString = JSON.stringify( resultData , null, 2 , );

  return (

      <pre>{resultString}</pre>
  
  );
};

export default Function;