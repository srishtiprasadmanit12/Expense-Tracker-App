import { Button } from "@chakra-ui/react"
import React, { useContext } from 'react';
import { AppContext } from './AppContext';

//Pulling Global state values into our context Components


export const  Budget = () => {
  const {  budget  } = useContext(AppContext);

  return (
    <>
         <Button mb={50}>Budget:{budget}</Button>
    </>
     
    
  );
};



//useContext hook --> helps in consuming the global object,this is done by destructuring to get budget from context
