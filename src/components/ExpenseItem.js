
import { ListItem } from '@chakra-ui/react';
import React from 'react'


const ExpenseItem = ({ item }) => {
  return (
        <ListItem>
            {item.name}-{item.cost}
        </ListItem> 
       );
};
export default ExpenseItem;