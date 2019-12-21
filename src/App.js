import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";


export default function App() {
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
      axios
        .get(`https://rickandmortyapi.com/api/character`) 
        .then(response => {
          console.log(response.data.results)
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error(error);
        });
  },[]);

  return (
    <main>
      <Header />
      <SearchForm 
        characters={characters}
        setCharacters={setCharacters}/>
        <Route exact path= "/characters">
          <CharacterList 
          characters={characters}
          setCharacters={setCharacters}/>
        </Route>
        <Route exact path="/">
          <WelcomePage />
        </Route>
    </main>
  );
}
