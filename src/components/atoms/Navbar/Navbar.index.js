import React from "react";
import { NavbarContainer } from "./Navbar.style";

const Navbar = (props) => {
  return <NavbarContainer>{props.children}</NavbarContainer>;
};

export default Navbar;
