import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FacebookNews from "./facebookNews.jsx";
import PressRelease from "./AvConPressRelease-May7th.pdf";
import NewsContent from "./newsContent.jsx";

export default function News() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24" style={{padding: "4%"}}>
      <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Get the Latest Updates:</h3>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{ textAlign: 'center', paddingBottom: '5%' }}>
                <h6>LIVE STREAM on TY HUB YOUTUBE</h6>
                <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/7_AYMtVLbhI?si=ulFkMd-tNUI6KD3z" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </Box>
              <h6>Facebook Live Feed</h6>
              <FacebookNews />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center' }}>
              <h6>Latest</h6>
              <Grid item xs={12}>
                <NewsContent />
              </Grid>
              <p>-------- May 7th 2024 --------</p>
              <iframe src={PressRelease} width="100%" height="500px" style={{ border: 'none' }} title="Press Release"></iframe>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}