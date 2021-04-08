import React from "react";
import { connect } from "react-redux";
import { setPokemon } from "../redux/actions/root";
import { useParams } from "react-router-dom";
import { loadMoves } from "../redux/actions/pokemon";

const PokemonDetails = ({ pokemons, setPokemon, loadMoves }) => {
  const params = useParams();
  const pokemonId = parseInt(params.pokemonId);

  setPokemon(pokemonId);
  console.log("it works", pokemonId);
  loadMoves(false);
  return <></>;
};

function mapStateToProps(state) {
  return { pokemons: state.mainReducer.pokemons };
}

export default connect(mapStateToProps, { setPokemon, loadMoves })(
  PokemonDetails
);
