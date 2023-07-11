import { Container, Heading ,HStack,VStack} from "@chakra-ui/react";
import AddExpenseForm from "./components/AddExpenseForm";
import {Budget} from "./components/Budget";
import { Remaining } from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import { AppProvider } from "./components/AppContext";

//Since that our components are nested within the AppProvider, they've access to value object that the AppProvider exposes.
const App=()=> {
  return (
    <AppProvider>
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
         <AddExpenseForm/>
         </VStack>
      </Container>
      
    </AppProvider>
  );
}

export default App;
