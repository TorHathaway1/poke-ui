import react from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import PokemonCard from "./Card.js";

function App() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) => {
      setPokemon(response.data.results);
    });
    return () => {
      setPokemon([]);
    };
  }, []);

  return (
    <div className="App">
      {pokemon.map((p) => {
        return <PokemonCard poke={p.name} />;
      })}
    </div>
  );
}

export default App;
