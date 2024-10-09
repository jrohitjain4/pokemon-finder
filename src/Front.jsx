import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Box } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export default function BasicCard() {
  return (
    <Card sx={{ height: 650, width: 650 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Pokemon
        </Typography>
        <TextField id="standard-basic" label="Enter the pokemon name" variant="standard" />
        
        <ThemeProvider
          theme={{
            palette: {
              primary: {
                main: '#8f5774',
                dark: '#e0829d',
              },
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',               // Flexbox display
              justifyContent: 'center',       // Horizontally center
              alignItems: 'center',           // Vertically center
              width: '100%',                  // Full width of parent
              height: '100%',                 // Full height of parent
              mt: 8,
            }}
          >
            <Box
              sx={{
                width: 400,
                height: 400,
                borderRadius: 1,
                bgcolor: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            />
          </Box>
        </ThemeProvider>
      </CardContent>
    </Card>
  );
}
