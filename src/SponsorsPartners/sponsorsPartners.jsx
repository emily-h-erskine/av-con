import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Sponsor from "./sponsor";

export default function SponsorsPartners() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-4 md:p-24">
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        Thank you to All Our Sponsors and Partners
      </h1>
      <br /><br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Sponsor />
          </Grid>
          <Grid item xs={12} md={3}>
            <Sponsor />
          </Grid>
          <Grid item xs={12} md={3}>
            <Sponsor />
          </Grid>
          <Grid item xs={12} md={3}>
            <Sponsor />
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}