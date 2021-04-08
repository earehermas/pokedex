import React from "react";
import { RootContainer } from "./Root.style";

const Root = (props) => {
  return <RootContainer>{props.children}</RootContainer>;
};

export default Root;
