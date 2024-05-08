import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FacebookNews from "./facebookNews.jsx";
import PressRelease from "./AvConPressRelease-May7th.pdf";

export default function News() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <h1 style={{ textAlign: 'center' }}>Get the Latest Updates:</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div style={{ textAlign: 'center' }}>
              <h2>Facebook Live Feed</h2>
              <FacebookNews />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{textAlign: 'center'}}>
              <h2>Latest</h2>
              <h5>-------- May 7th 2024 --------</h5>
              <iframe src={PressRelease} width="80%" height="500px" />
            </div>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
