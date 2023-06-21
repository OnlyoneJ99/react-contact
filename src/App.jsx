import Contacts from "./Contacts";
import ContactsForm from "./ContactsForm";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {
 

  return (
    <Grid
      className="App"
      templateColumns="repeat(12,1fr)"
      gap={{ base: 0, md: 6 }}
      p={10}
    >
      <GridItem colSpan={{ base: 12, md: 6 }}>
        <ContactsForm />
      </GridItem>
      <GridItem colSpan={{ base: 12, md: 6 }} mt={{ base: 10, md: 0 }}>
        <Contacts />
      </GridItem>
    </Grid>
  );
}

export default App;
