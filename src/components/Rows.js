import {
    Tr,
    Th,
    Td,
  } from '@chakra-ui/react'

const Rows=()=>{
    return(
        <>
        <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
        </Tr>
        </>
    )
}
export default Rows;