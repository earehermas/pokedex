import React from "react";
import Navbar from "../../atoms/Navbar/Navbar.index";
import Link from "../../atoms/Link/Link.index";
import Button from "../../atoms/Button/Button.index";

function Header() {
  return (
    <Navbar>
      <Button>
        <Link to="/">Pokédex</Link>
      </Button>
    </Navbar>
  );
}

export default Header;
