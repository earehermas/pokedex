import React from "react";
import PokemonsList from "../components/organisms/PokemonsList/PokemonsList.index";
import PokemonsSearch from "../components/molecules/PokemonsSearch/PokemonsSearch.index";

function Pokedex() {
  console.log("good component rendering ?");
  return (
    <>
      <PokemonsSearch />
      <PokemonsList />
    </>
  );
}

export default Pokedex;
