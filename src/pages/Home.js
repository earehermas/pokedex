import React from "react";
import Button from "../components/atoms/Button/Button.index";
import PageContent from "../components/atoms/PageContent/PageContent.index";
import Link from "../components/atoms/Link/Link.index";

function Home() {
  return (
    <PageContent>
      <Button>
        <Link to="/pokemons">LET'S GO</Link>
      </Button>
    </PageContent>
  );
}

export default Home;
