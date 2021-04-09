import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchDescription } from "../../../redux/actions/pokemon";

function PokemonCard({ types, sprite, name, description, fetchDescription }) {
  const params = useParams();
  let id = parseInt(params.pokemonId);
  console.log("id", id);
  // Retrieve description on component mount
  useEffect(() => {
    fetchDescription(id);
  });

  return (
    <div>
      NAME
      {name}
    </div>
  );
}

function getPoke(state, curPokeId) {
  const pokemons = state.mainReducer.pokemons;
  const values = Object.values(pokemons);
  for (let i = 0; i < values.length; i++) {
    if (values[i].id === curPokeId) return values[i];
  }
}

const mapStateToProps = (state) => {
  const curPokeId = state.mainReducer.currentPokemon;
  const pk = getPoke(state, curPokeId);

  const description = state.pokemonReducer.description;
  return {
    id: pk.id,
    types: pk.types,
    sprite: getSprite(pk.sprites),
    name: pk.name,
    description,
  };
};

function getSprite(sprites) {
  const keys = Object.keys(sprites);
  const values = Object.values(sprites);
  for (let i = keys.length; i > 0; i--) {
    if (values[i] !== undefined && values[i] !== null) {
      return values[i];
    }
  }
}

export default connect(mapStateToProps, { fetchDescription })(PokemonCard);
