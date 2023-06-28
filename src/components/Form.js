import { Button,Input } from "@chakra-ui/react";

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
 
 const Form=()=>{
    return(
        <div>
            <label>Name of the Item
              <Input type='text' name='item'placeholder='enter item' mb={2} required='required'/>
            </label>
            <label>Cost of the item 
              <Input type='number' name='cost'placeholder='Enter cost of item' mb={2} required='required' />
            </label>
            
            <center><Button type='submit' mb={50} colorScheme='blue'>ADD</Button></center>
        </div>
    )}
  export default Form;


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
        
