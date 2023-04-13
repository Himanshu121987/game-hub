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
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="main">
        <GameGrid />
      </GridItem>
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show>
        <GridItem area="aside" paddingX={2}>
          <GenreList />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
