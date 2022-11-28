import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import arrayOfPokemon from './data';

function App() {
  return (
    <Pokedex pokemonList={ arrayOfPokemon } />
  );
}

export default App;
