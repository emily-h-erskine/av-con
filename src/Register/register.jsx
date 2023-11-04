import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import RegistrationForm from "./registrationForm";

export default function Register() {
  return (
      <main className="flex min-h-screen flex-col justify-between p-24">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
            <div style={{padding:" 0 0 0 15%"}}>
                <h1>Register for AVCon</h1>
                <RegistrationForm />
              </div>
            </Grid>
            <Grid item xs={6}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                  src="https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?cs=srgb&dl=pexels-pixabay-46148.jpg&fm=jpg"
                  alt="Airplane"
                  style={{ width: '80%', mixBlendMode: 'luminosity'}}
                />
              </div>
            </Grid>
          </Grid>
        </Box>
      </main>
  );
}