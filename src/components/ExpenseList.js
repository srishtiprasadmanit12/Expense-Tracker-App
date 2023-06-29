import { UnorderedList,ListItem } from '@chakra-ui/react';
import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from './AppContext';

const ExpenseList = () => {
  const {expense}=useContext(AppContext)
  // const expenses = [
  //   { id: 1, name: 'shopping', cost: 20 },
  //   { id: 2, name: 'grocery', cost: 30 },
  //   { id: 3, name: 'education', cost: 100 }
  // ];

  return (
    <UnorderedList>
      {expense.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </UnorderedList>
  );
};

export default ExpenseList;

        {/* {expenses.map((expense)=>(
          <ListItem>{expense.name}..............{expense.cost} </ListItem>
        ))} */}