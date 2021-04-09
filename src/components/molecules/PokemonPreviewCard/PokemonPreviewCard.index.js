import React from "react";
import Card from "../../atoms/Card/Card.index";
import Link from "../../atoms/Link/Link.index";
// import Types from './Types';

export default function PokemonPreviewCard({ pokemon }) {
  const { id, name, types } = pokemon;
  const sprite = pokemon.sprites ? getSprite(pokemon.sprites) : "";

  return (
    <Link to={`/pokemon/${id}`}>
      <Card>{name}</Card>
    </Link>
  );
}

// Loop through object sprites and return first existing image
function getSprite(sprites) {
  const keys = Object.keys(sprites);
  const values = Object.values(sprites);
  for (let i = keys.length; i > 0; i--) {
    if (values[i] !== undefined && values[i] !== null) {
      return values[i];
    }
  }
}
