import React from "react";

function Search(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        <input
          type="text"
          onChange={props.onChange}
          placeholder="Search Pokémon"
        />
      </label>
    </form>
  );
}

export default Search;
