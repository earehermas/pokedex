import React from "react";
import Pokedex from "../actions/Pokedex";
import Header from "../components/atoms/Header/index";
function Home() {
  return (
    <>
      <Header /> <Pokedex />
    </>
  );
}

export default Home;
