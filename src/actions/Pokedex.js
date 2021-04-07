import React, { useState } from "react";
import SearchInput from "../components/molecules/SearchInput/index";
import Pokemons from "../components/organisms/Pokemons";
import axios from "axios";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  // const [pokemonType, setPokemonType] = useState("");

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      // setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (e) {
      console.log(e);
    }
  };
  console.log("pokemonDataFromApi", pokemonData);

  return (
    <>
      <SearchInput
        onSubmit={handleSubmit}
        onChange={handleChange}
        placeholder={"Search Pokémon"}
        type={"text"}
      />
      <Pokemons pokemonData={pokemonData} />
    </>
  );
};

export default Pokedex;
