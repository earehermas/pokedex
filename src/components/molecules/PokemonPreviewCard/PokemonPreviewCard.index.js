import React from "react";
// import Types from './Types';

export default function PokemonPreviewCard({ pokemon }) {
  const { id, name, types } = pokemon;
  const sprite = pokemon.sprites ? getSprite(pokemon.sprites) : "";

  return (
    <Link to={`/pokemon/${id}`}>
      <Card>
        <CardActionArea>
          <CardMedia className={classes.media} image={sprite} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            {/* {types ? <Types types={types} /> : ''} */}
          </CardContent>
        </CardActionArea>
      </Card>
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
