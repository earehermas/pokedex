import React from "react";
import { connect } from "react-redux";
import { fetchAll, resetData } from "../../../redux/actions/root";
import pokeball from "../../../img/pokeball.gif";
import PokemonPreviewCard from "../../molecules/PokemonPreviewCard/PokemonPreviewCard.index";
import { ListContainer } from "../../atoms/Container/Container.index";

function PokemonsList({
  fetchAll,
  resetData,
  pokemons,
  loading,
  timer,
  filter,
  error,
}) {
  const filteredPokemons = pokemons.filter((pk) => pk.name.includes(filter));

  return (
    <>
      <div>
        <button variant="outlined" onClick={fetchAll}>
          Catch Pokemons
        </button>
        <button variant="outlined" onClick={resetData}>
          Reset
        </button>
        <div>
          {error ? <span>Something bad happened: {error.message}</span> : ""}
        </div>
      </div>
      <ListContainer>
        {loading ? (
          <>
            <img alt={pokeball} src={pokeball}></img>
            <div>Catching...</div>
          </>
        ) : (
          filteredPokemons.map((pokemon, i) => (
            <PokemonPreviewCard
              key={pokemon.name}
              pokemon={pokemon}
            ></PokemonPreviewCard>
          ))
        )}
      </ListContainer>
    </>
  );
}

function mapStateToProps(state) {
  return {
    pokemons: state.mainReducer.pokemons,
    loading: state.mainReducer.loading,
    timer: state.mainReducer.timer,
    filter: state.mainReducer.filter,
    error: state.mainReducer.error,
  };
}

const actionCreators = {
  resetData,
  fetchAll,
};

export default connect(mapStateToProps, actionCreators)(PokemonsList);
