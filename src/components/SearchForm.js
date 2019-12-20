import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log(props.characters)
    const results = props.characters.filter(character => {
      console.log(character)
        return character.name.toLowerCase().includes(searchTerm.toLowerCase())
    });
    setSearchResults(results);
    }, [searchTerm]);

  const handleChange = event => {
    console.log(event.target.value)
    setSearchTerm(event.target.value);
  };
  return (
    <section className="search-form">
      <form>
        <label htmlFor="name">Search: </label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <div className="character-list">
          {searchResults.map(character => (
            <CharacterCard
            character={character}
              />
          ))}
      </div>
    </section>
  );
}

