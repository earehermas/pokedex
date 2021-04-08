import React from "react";
import { Wrapper, Header, Heading, Body } from "./style";
function Card(props) {
  return (
    <div className="App">
      <Wrapper>
        <Header>{props.cardHeader}</Header>
        <Body>{props.cardBody} </Body>
      </Wrapper>
    </div>
  );
}

export default Card;
