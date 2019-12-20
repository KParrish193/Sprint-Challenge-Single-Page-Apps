import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState();
  const {id} = useParams();
  
  useEffect(() => {
    
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

      axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          console.log(response)
          setCharacter(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
