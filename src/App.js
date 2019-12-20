import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";


export default function App() {
  return (
    <main>
      <Header />
      <SearchForm />
      <Router>    
      <Switch>  
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route  path="/characters/">
        <CharacterList />
      </Route>
      </Switch>
      </Router>
    </main>
  );
}
