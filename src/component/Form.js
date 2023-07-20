import React, {useState} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, 
    Input, 
    Button, 
    FormControl, 
    FormErrorMessage, 
    FormLabel, 
    Flex, 
    HStack,
    Select,
    Text,
    Center,
    ButtonGroup
     } from '@chakra-ui/react';
     import {Route, Routes, BrowserRouter, Link} from 'react-router-dom';

      
const FormComponent = ({ onSubmit }) => {

   const {
        handleSubmit,
        control,
        formState: { errors },
      } = useForm();
    
      const onSubmitForm = (data) => {
        onSubmit(data);
        console.log(data);
      };
 
  return (
    <Box my={8} w="100%" textAlign='left' justifyContent="Center" fontFamily="KanitRegular" display="block">
    <form onSubmit={handleSubmit(onSubmitForm)}>
    
    <FormControl isInvalid={errors.firstname} mb={4}>
      <FormLabel>First Name</FormLabel>
        <Controller
          name="firstname"
          control={control}
          defaultValue=""
          rules={{
            required: 'First name is required',
            pattern: {
              message: 'Invalid First name',
            },
          }}
          render={({ field }) => (
            <>
              <Input {...field} type="text" placeholder="Please fill first name"  />
              <FormErrorMessage>{errors.firstname && errors.firstname.message}</FormErrorMessage>
            </>
          )}
        />
      </FormControl>

      <FormControl isInvalid={errors.lastname} mb={4}>
        <FormLabel>Last Name</FormLabel>
          <Controller
            name="lastname"
            control={control}
            defaultValue=""
            rules={{
              required: 'Last name is required',
              pattern: {
                message: 'Invalid Last name',
              },
            }}
            render={({ field }) => (
              <>
                <Input {...field}  placeholder="Please fill Last name" />
                <FormErrorMessage>{errors.lastname && errors.lastname.message}</FormErrorMessage>
              </>
            )}
          />
      </FormControl>
 
      <FormControl isInvalid={errors.email} mb={4}>
      <FormLabel>E-mail</FormLabel>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: 'E-mail is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address',
            },
          }}
          render={({ field }) => (
            <>
              <Input {...field} placeholder="Please fill E-mail" />
              <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
            </>
          )}
        />
      </FormControl>
     
      

      <FormControl isInvalid={errors.password} mb={4}>
      <FormLabel>Password</FormLabel>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
          render={({ field }) => (
            <>
              <Input {...field} type="password" placeholder="Please fill password" />
              <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
            </>
          )}
        />
      </FormControl>

      <FormControl isInvalid={errors.verifypassword} mb={4}>
      <FormLabel>Verify Password</FormLabel>
        <Controller
          name="verifypassword"
          control={control}
          defaultValue=""
          rules={{
            required: 'Verify password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
           
          }}
          render={({ field }) => (
            <>
              <Input {...field} type="password" placeholder="Please fill verify password"  />
              <FormErrorMessage>{errors.verifypassword && errors.verifypassword.message}</FormErrorMessage>
            </>
          )}
        />
       
      </FormControl>

      <FormControl isInvalid={errors.gender} mb={4}>
        <FormLabel>Gender</FormLabel>
        <Controller
          name="gender"
          control={control}
          defaultValue=""
          rules={{
            required: 'Gender is required',
            
           
          }}
          render={({ field }) => (
            <>
             <Select {...field} placeholder='Please Select gender'>
               <option>Male</option>
               <option>Female</option>
         </Select >
             
              <FormErrorMessage>{errors.gender && errors.gender.message}</FormErrorMessage>
            </>
          )}

        />

      </FormControl>

     
      
      <Button type = 'submit'  
      border="2px"  
      mt={4} bg="#8cc63e" 
      color='white' 
      mb='5' 
      _hover={{borderColor:"#8cc63e",color:"#8cc63e",bg:"white"}} 
      fontWeight="normal">
        
        Submit

      </Button>
     
    </form>
    </Box>
    
  );
  
};
const DisplayComponent = ({ data }) => {
    return (
      <Box my={8} w="100%" textAlign='left' justifyContent="Center" fontFamily="KanitRegular" display="block">

        <Center fontSize={"20px"}>Result</Center>
        <Text>First Name: {data.firstname}</Text>
        <Text>Last Name: {data.lastname}</Text>
        <Text>E-mail: {data.email}</Text>
        <Text>Gender: {data.gender}</Text>
      </Box>
    );
  };

const FormArea = () => {
  const [submittedData, setSubmittedData] = React.useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

    return (
    <Box
      h='full' 
      width='full' 
      bgGradient={[
        'linear(to-t, #0f0c29, #302b63, #24243e)' 
      ]}>

      <Flex  
        align='center' 
        alignItems="flex-start" 
        justifyContent='Center' 
        h='full'
        width='full'p="20"
        > 
       

        <Box 
        h='full'
        px={4}
        width='full'
        maxWidth='500px'
        
        textAlign='center'
        borderRadius={"5"}
        boxShadow={"2xl"}
        bg="white"
        >
         

          <Text 
          fontSize={"20px"} 
          fontFamily="KanitRegular" 
          fontWeight={'bold'}
          pt="1.5rem">
            Form and Validation
          </Text>
  
          <Box p={4}>
            <FormComponent onSubmit={handleFormSubmit} />
            {submittedData && <DisplayComponent data={submittedData} />}
          </Box>

        </Box>
      </Flex>
     </Box>
    )
  }

export default FormArea;
