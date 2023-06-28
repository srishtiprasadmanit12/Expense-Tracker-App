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
            <Input type='text' name='item'placeholder='enter item' mb={2}/>
            <Input type='number' name='cost'placeholder='Enter cost of item' mb={2} />
            <center><Button mb={50}>ADD</Button></center>
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
        
