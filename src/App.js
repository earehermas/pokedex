import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Pokedex from "./pages/Pokedex";
import PokemonDetails from "./pages/PokemonDetails";
import Root from "./Root/Root.index";

function App() {
  return (
    <Provider store={store}>
      <Root>
        <Router>
          <Switch>
            <Route path="/pokemon/:pokemonId">
              <PokemonDetails />
            </Route>
            <Route path="/">
              <Pokedex />
            </Route>
          </Switch>
        </Router>
      </Root>
    </Provider>
  );
}

export default App;
