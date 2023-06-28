import { UnorderedList,ListItem } from '@chakra-ui/react';
import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const expenses = [
    { id: 1, name: 'shopping', cost: 20 },
    { id: 2, name: 'grocery', cost: 30 },
    { id: 3, name: 'education', cost: 100 }
  ];

  return (
    <UnorderedList>
      {expenses.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </UnorderedList>
  );
};

export default ExpenseList;

        {/* {expenses.map((expense)=>(
          <ListItem>{expense.name}..............{expense.cost} </ListItem>
        ))} */}