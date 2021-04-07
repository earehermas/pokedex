import React from "react";
import { Fieldset, Field } from "./style";

function Input(props) {
  return (
    <div className="input">
      <Fieldset>
        <Field
          type={props.type}
          onChange={props.onChange}
          placeholder={props.placeholder}
          label={props.label}
        />
      </Fieldset>
    </div>
  );
}

export default Input;
