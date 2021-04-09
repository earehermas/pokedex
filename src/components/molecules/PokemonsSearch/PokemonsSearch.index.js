import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../../../redux/actions/root";
import Input from "../../atoms/Input/Input.index";

function PokemonsSearch({ pokemons, setFilter, filter }) {
  const placeholder =
    pokemons.length < 1 ? "First catch some pokemons.." : "Live search..";

  const disabled = pokemons.length < 1;

  return (
    <Input
      disabled={disabled}
      placeholder={placeholder}
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
}

function mapStateToProps(state) {
  return {
    pokemons: state.mainReducer.pokemons,
  };
}

export default connect(mapStateToProps, { setFilter })(PokemonsSearch);
