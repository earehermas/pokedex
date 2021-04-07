import React from "react";

function Pokemons(props) {
  const { pokemonData } = props;
  return pokemonData.map((pokemon) => <div>{pokemon.name}</div>);
}

export default Pokemons;
