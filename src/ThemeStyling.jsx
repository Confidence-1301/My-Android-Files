import React from "react";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const theme = createTheme({
  palette: {
    red: '#FF6B6B',
    yellow: '#FFD93D',
    green: '#6BCB77',
    blue: '#4D96FF',
    violet: '#B28DFF',
  },
});

const colors = ['red', 'yellow', 'green', 'blue', 'violet'];

const ColorGrid = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} sx={{ width: '100%', margin: 0 }}>
        {Array.from({ length: 25 }).map((_, index) => (
          <Grid item xs={2.4} key={index}>
            <Box
              sx={{
                height: 100,
                backgroundColor: theme.palette[colors[index % 5]],
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontWeight: 'bold',
                borderRadius: 1,
              }}
            >
              Box {index + 1}
            </Box>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
};

export default ColorGrid;
