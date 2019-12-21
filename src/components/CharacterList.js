import React from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  return (
    
    <section className="character-list">
      <h2>Characters</h2>
      <div className="card">
      {props.characters.map((data, index) => {
        return(<CharacterCard 
            key={index}
            character={data}
            />
        );
      })}
    </div>
    </section>
  );
}
