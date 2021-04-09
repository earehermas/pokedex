import React from "react";
import Card from "../../atoms/Card/Card.index";
import Link from "../../atoms/Link/Link.index";
// import Types from './Types';

export default function PokemonPreviewCard({ pokemon }) {
  const { id, name, types } = pokemon;

  return (
    <Link to={`/pokemon/${id}`}>
      <Card>{name}</Card>
    </Link>
  );
}
