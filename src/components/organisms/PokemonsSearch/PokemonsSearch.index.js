import React from "react";
import { connect } from "react-redux";

import { setFilter } from "../../../redux/actions/root";

import { Link } from "react-router-dom";

function PokemonsSearch({ pokemons, setFilter, filter, page }) {
  const placeholder =
    pokemons.length < 1 ? "First catch some pokemons.." : "Live search..";

  const disabled = pokemons.length < 1;

  return (
    <div>
      <div>
        <button edge="start" color="inherit" aria-label="open drawer"></button>
        <div>
          <Link to="/">Pokédex</Link>
        </div>
        {page !== "pokemon" ? (
          <div>
            <input
              disabled={disabled}
              placeholder={placeholder}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        ) : (
          <>
            <Link to="/">
              <button>BACK TO OVERVIEW</button>
            </Link>
            <div>Try navigating between pokemons</div>
          </>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    pokemons: state.mainReducer.pokemons,
  };
}

export default connect(mapStateToProps, { setFilter })(PokemonsSearch);
