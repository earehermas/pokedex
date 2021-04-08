import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokemonDetails from "./pages/PokemonDetails";
import Header from "./components/organisms/Header/Header.index";
import Root from "./Root/Root.index";

function App() {
  return (
    <Provider store={store}>
      <Root>
        <Router>
          <Switch>
            <Route path="/pokemons/">
              <Pokedex />
            </Route>
            <Route path="/">
              {/* <Home /> */}
              <Redirect to="/pokemons/" />
            </Route>
            <Route path="/pokemon/:pokemonId">
              <PokemonDetails />
            </Route>
          </Switch>
        </Router>
      </Root>
    </Provider>
  );
}

export default App;
