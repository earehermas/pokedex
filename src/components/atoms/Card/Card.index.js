import React from "react";
import { CardTitle, CardContainer, CardContent } from "./Card.style";

const Card = (props) => {
  return (
    <CardContainer>
      <CardTitle>{props.title}</CardTitle>
      <CardContent>{props.children}</CardContent>
    </CardContainer>
  );
};

export default Card;
