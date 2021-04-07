import React from "react";
import Input from "../../atoms/Input/index";
function SearchInput(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <Input {...props} />
    </form>
  );
}

export default SearchInput;
