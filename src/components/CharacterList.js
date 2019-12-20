import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  const {id} = useParams();
  
  useEffect(() => {
    
    // ${id}

      axios
        .get(`https://rickandmortyapi.com/api/character`) 
        .then(response => {
          console.log(response.data.results)
          setCharacter(response.data.results);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);

  return (
    <section className="character-list">
      <div className="card">
      {character.map((data, index) => {
        return(<CharacterCard 
            key={index}
            name={data.name}
            />
        );
      })}
    </div>
    </section>
  );
}
