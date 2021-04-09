import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchDescription } from "../../../redux/actions/pokemon";
import { PokemonContainer } from "../../atoms/Container/Container.index";
// import Link from "../../atoms/Link/Link.index";
import Button from "../../atoms/Button/Button.index";

function PokemonCard({
  types,
  sprite,
  name,
  description,
  fetchDescription,
  height,
  weight,
  base_exp,
  abilities,
  held_items,
  stats,
}) {
  const params = useParams();
  let id = parseInt(params.pokemonId);
  let prev = id > 1 ? id - 1 : 1;
  let next = id + 1;
  console.log("sprite", sprite);
  console.log("stats", stats);
  useEffect(() => {
    fetchDescription(id);
  });

  return (
    <div>
      <Button>
        <Link to={`/pokemon/${prev}`}>prev</Link>
      </Button>
      <PokemonContainer>
        {name}, {description}, {height}, {weight}, {base_exp}, {abilities},
        {held_items},
        {types
          ? types.map((type, i) => {
              const name = type.type.name;
              return <div>{name}</div>;
            })
          : ""}
      </PokemonContainer>
      <Button>
        <Link to={`/pokemon/${next}`}>next</Link>
      </Button>
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
  const abilities = pk.abilities.length
    ? pk.abilities.map((el) => el.ability.name).join(", ")
    : "none";
  const held_items = pk.held_items.length
    ? pk.held_items.map((el) => el.item.name).join(", ")
    : "none";
  const description = state.pokemonReducer.description;
  return {
    id: pk.id,
    types: pk.types,
    sprite: getSprite(pk.sprites),
    name: pk.name,
    description,
    height: pk.height,
    weight: pk.weight,
    base_exp: pk.base_experience,
    abilities,
    held_items,
    stats: pk.stats,
  };
};

function getSprite(sprites) {
  console.log("hello", sprites.front_default);
  const entries = Object.entries(sprites);
  console.log("entries", entries);
  const keys = Object.keys(sprites);
  console.log("keys", keys);
  const values = Object.values(sprites);
  console.log("values", values);
  //   values.map((value) => {
  //     return console.log("valuee", value);
  //   });
}

export default connect(mapStateToProps, { fetchDescription })(PokemonCard);
