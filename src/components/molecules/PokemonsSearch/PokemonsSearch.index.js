import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../../../redux/actions/root";
import Link from "../../atoms/Link/Link.index";
import Input from "../../atoms/Input/Input.index";
import Button from "../../atoms/Button/Button.index";

function PokemonsSearch({ pokemons, setFilter, filter, page }) {
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
