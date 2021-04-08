import React from "react";
import PokemonsList from "../components/organisms/PokemonsList/PokemonsList.index";
import PokemonsSearch from "../components/organisms/PokemonsSearch/PokemonsSearch.index";
function Home() {
  return (
    <>
      <PokemonsSearch />
      <PokemonsList />
    </>
  );
}

export default Home;
