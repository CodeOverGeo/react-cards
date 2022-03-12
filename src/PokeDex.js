import React from 'react';
import PokemonSelect from './PokemonSelect';
import PokemonCard from './PokemonCard';
import './PokeDex.css';
import useAxios from './hooks/useAxios';

const POKEMON_BASE_API = 'https://pokeapi.co/api/v2/pokemon/';

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, addPokemon, clearPokemon] = useAxios(
    'pokemon',
    POKEMON_BASE_API
  );

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
        <button onClick={clearPokemon}>Clear the Pokemon!</button>
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map((card) => (
          <PokemonCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
