import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCards';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Pokemonn = ({ pokemonName }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [showList, setShowList] = useState(true);
  const API = "https://pokeapi.co/api/v2/pokemon?limit=151";

  const fetchPokemonData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemon = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );

      setPokemonList(detailedPokemon);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const filteredPokemonList = pokemonName
    ? pokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()))
    : pokemonList;

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setShowList(false);
  };

  const handleBackClick = () => {
    setSelectedPokemon(null);
    setShowList(true);
  };

  return (
    <>
      {showList ? (
        <Grid container spacing={2}>
          {filteredPokemonList.map((pokemon) => (
            <Grid item xs={12} sm={6} md={4} key={pokemon.id}>
              <PokemonCard 
                pokemonData={pokemon} 
                onClick={() => handleCardClick(pokemon)}
                className="pokemon-card" // Add class for styling
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        selectedPokemon && (
          <Card sx={{ marginTop: 4 }}>
            <CardContent>
              <Typography variant="h5" component="div" className="pokemon-name">
                {selectedPokemon.name.charAt(0).toUpperCase() + selectedPokemon.name.slice(1)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Height: {selectedPokemon.height / 10} m
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Weight: {selectedPokemon.weight / 10} kg
              </Typography>
              <Typography variant="body2" color="text.secondary" className="pokemon-type">
                Type: {selectedPokemon.types.map((type) => type.type.name).join(', ')}
              </Typography>
              <img 
                src={selectedPokemon.sprites.other.dream_world.front_default || selectedPokemon.sprites.front_default} 
                alt={selectedPokemon.name} 
                style={{ height: '200px', margin: '10px auto', objectFit: 'contain' }}
              />
              <button className="back-button" onClick={handleBackClick}>Back to Search</button>
            </CardContent>
          </Card>
        )
      )}
    </>
  );
};

export default Pokemonn;

// Ensure this is exported as default
