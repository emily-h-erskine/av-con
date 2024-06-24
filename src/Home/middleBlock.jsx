import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function MiddleBlockOfText() {
  return (
    <Box sx={{ padding: { xs: '0 2%', md: '0 5%' } }}>
      <hr/>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <h5 style={{ textAlign: 'center' }}>
            Secure your FREE School/Group tickets now for an unforgettable adventure at AvCon 2024. Book/register here!
          </h5>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={{ textAlign: 'center' }}>
            <p><b>Location:</b></p>
            <p>Irish Air Corps, Casement Aerodrome, Baldonnel, County Dublin</p>
            <p><b>Date:</b></p>
            <p>November 7th, 2024</p>
          </div>
        </Grid>
      </Grid>
      <hr/>
    </Box>
  );
}