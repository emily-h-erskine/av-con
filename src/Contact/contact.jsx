import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ContactUsForm from "./contactForm";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src="https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?cs=srgb&dl=pexels-pixabay-46148.jpg&fm=jpg"
                alt="Airplane"
                style={{ width: '100%', mixBlendMode: 'luminosity' }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div>
              <h1>Contact Us</h1>
              <ContactUsForm />
            </div>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}
