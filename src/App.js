import { Container, Heading ,HStack,VStack} from "@chakra-ui/react";
import Form from "./components/Form";
import { Budget } from "./components/Budget";
import { Remaining } from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";


function App() {
  return (
    <>
      <Container>
      <VStack>
      <Heading size='xl' mb={2}> Expense tracker</Heading>
      
      
      <HStack>
          <Budget/>
          <Remaining/>
          <ExpenseTotal/>
      </HStack>
         <ExpenseList/>
         <Heading size='xl'>Add expenses</Heading>
         <Form/>
         </VStack>
      </Container>
      
    </>
  );
}

export default App;
