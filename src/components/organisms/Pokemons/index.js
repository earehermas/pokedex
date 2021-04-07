import React from "react";
import Card from "../../atoms/Card/index";

function Pokemons(props) {
  const { pokemonData } = props;
  return pokemonData.map((pokemon) => (
    <Card cardHeader={pokemon.name} cardBody={pokemon.base_experience} />
  ));
}

export default Pokemons;
