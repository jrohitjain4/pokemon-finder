import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import './App.css'; // Import the CSS file

const PokemonCard = ({ pokemonData, onClick }) => {
  const imageSrc = pokemonData.sprites.other.dream_world.front_default || pokemonData.sprites.front_default;

  return (
    <Card className="pokemon-card" sx={{ height: 200, margin: 'auto' }} onClick={onClick}>
      <CardMedia
        component="img"
        height="100"
        image={imageSrc}
        alt={pokemonData.name}
        sx={{ objectFit: 'contain', margin: '10px auto' }}
      />
      <CardContent>
        <Typography variant="h6" component="div" className="pokemon-name">
          {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;


  