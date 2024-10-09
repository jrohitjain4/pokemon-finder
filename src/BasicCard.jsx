import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Pokemonn from './Pokemon'; // Fixed the import
import './App.css'; // Import the CSS file

export default function BasicCards() {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <Card className="card" sx={{ padding: 3, margin: '20px auto' }}>
      <CardContent className="card-content">
        <Typography gutterBottom className="search-label">
          Pokémon Finder
        </Typography>

        <TextField
          id="pokemon-name-input"
          label="Search Pokémon"
          variant="outlined"
          fullWidth
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          className="search-input" // Ensure this class is applied
          sx={{ mb: 2 }}
        />

        <Box sx={{ mt: 4 }}>
          {/* Pass the searched name to the Pokemon component */}
          <Pokemonn pokemonName={pokemonName} />
        </Box>
      </CardContent>
    </Card>
  );
}

