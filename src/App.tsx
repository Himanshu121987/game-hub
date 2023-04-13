import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/Game-Grid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="main">
        <GameGrid />
      </GridItem>
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show>
        <GridItem area="aside" bg="blue">
          <GenreList />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
