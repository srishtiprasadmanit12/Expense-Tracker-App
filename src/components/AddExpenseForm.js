import { Form } from "react-router-dom";
import { Box, Button,FormControl,Input,FormLabel } from "@chakra-ui/react";
import { useState } from "react";


// import {
//     Table,
//     Thead,
//     Tbody,
//     Tfoot,
//     Tr,
//     Th,
//     Td,
//     TableCaption,
//     TableContainer,
//     HStack,
//   } from '@chakra-ui/react'
// import Rows from "./Rows";
 
 const AddExpenseForm=()=>{
  const [name,setName]=useState('');
  const [cost,setCost]=useState('');

  // const onSubmit=(e)=>{
  //   console.log('form submitted')
  // }

    return(
        <Box>
        <Form >
        <FormControl>
            <FormLabel >Name of the Item
              <Input type='text' name='item' value={name} placeholder='enter item' mb={2} isRequired onChange={(e)=>setName(e.target.value)}/>
            </FormLabel>
        </FormControl>
        <FormControl>
            <FormLabel>Cost of the item 
              <Input type='number' name='cost' value={cost} placeholder='Enter cost of item' mb={2} isRequired onChange={(e)=>setCost(e.target.value)}/>
            </FormLabel>
        </FormControl>   
            <center><Button type='submit' mb={50} colorScheme='blue'>ADD</Button></center>
          </Form>
        </Box>

    )}
  export default AddExpenseForm;


  {/* <TableContainer>
  <Table size='sm'>
    <Thead>
      <Tr>
        <Th>Name of the Item</Th>
        <Th>Category</Th>
        <Th isNumeric>Cost</Th>
      </Tr>
    </Thead>
    <Tbody>
        < Rows/>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>item{}</Th>
        <Th>Category</Th>
        <Th isNumeric>cost</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer> */}
        
