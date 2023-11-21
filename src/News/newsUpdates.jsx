import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FacebookNews from "./facebookNews.jsx";

export default function News() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <h1 style={{ textAlign: 'center' }}>Get the Latest Updates:</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div>
              <h2 style={{ textAlign: 'center' }}>Facebook Live Feed</h2>
              <FacebookNews />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <h2 style={{ textAlign: 'center' }}>Latest</h2>
            </div>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
