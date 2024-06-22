import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function MiddleBlockOfText() {
  return (
    <Box sx={{ padding: { xs: '0 2%', md: '0 5%' } }}>
      <hr/>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ textAlign: 'center' }}>
            Secure your FREE School/Group tickets now for an unforgettable adventure at AvCon 2024. Book/register here!
          </h2>
        </Grid>
        <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h2>Location:</h2>
            <h4>Irish Air Corps, Casement Aerodrome, Baldonnel, County Dublin</h4>
            <h2>Date:</h2>
            <h4>November 7th, 2024</h4>
          </div>
        </Grid>
      </Grid>
      <hr/>
    </Box>
  );
}