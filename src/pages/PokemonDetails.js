import React from "react";
import { connect } from "react-redux";
import { setPokemon } from "../redux/actions/root";
import { useParams, Redirect } from "react-router-dom";
import { loadMoves } from "../redux/actions/pokemon";
import PokemonCard from "../components/organisms/PokemonCard/PokemonCard.index";

const PokemonDetails = ({ pokemons, setPokemon, loadMoves }) => {
  const params = useParams();
  console.log("params", params);
  const pokemonId = parseInt(params.pokemonId);

  setPokemon(pokemonId);
  console.log("it works", pokemonId);
  loadMoves(false);
  return (
    <> {pokemons.length < 1 ? <Redirect to="/"></Redirect> : <PokemonCard />}</>
  );
};

function mapStateToProps(state) {
  return { pokemons: state.mainReducer.pokemons };
}

export default connect(mapStateToProps, { setPokemon, loadMoves })(
  PokemonDetails
);
